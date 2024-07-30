import { WidgetView } from '../../../Components/Views/WidgetView';
import { WidgetInfoRowsView } from '../../../Components/Views/WidgetInfoRowsView';
import { useLoadTestResults } from '../../../Providers/Results/LoadTestResultsProvider';
import { FC, useEffect, useMemo } from 'react';
import { BaseInfoRowView } from '../../../Components/Views/BaseInfoRowView';
import { connect } from 'react-redux';
import { ReduxState } from '../../../Redux/ReduxState';
import { LoadTestResultDetails } from '../../../Models/Results/LoadTestResults';
import dayjs from 'dayjs';
import { SettingsManager } from '../../../Services/Config';
import { LoadTestResultActions } from './LoadTestResultActions';
import { getLoadTestResultTitle } from '../../../Services/Results/Utils';
import { LoadTestResultLabelsView } from './LoadTestResultLabelsView';

type LoadTestResultDetailsViewProps = {
  loadTestResultId: number;
  details: LoadTestResultDetails;
};

const LoadTestResultDetailsView: FC<LoadTestResultDetailsViewProps> = (props) => {
  const { loadTestResultId, details } = props;
  const { loading, getLoadTestResultDetails } = useLoadTestResults();

  useEffect(() => {
    loadTestResultId && getLoadTestResultDetails(loadTestResultId);
  }, [loadTestResultId]);

  const startedAt = useMemo(
    () => dayjs(details.startedAt).format(SettingsManager.apiDateTimeFormat),
    [details.startedAt]
  );

  const finishedAt = useMemo(
    () => dayjs(details.finishedAt).format(SettingsManager.apiDateTimeFormat),
    [details.finishedAt]
  );

  return (
    <WidgetView
      title={getLoadTestResultTitle(details)}
      sx={{ mt: 3 }}
      loading={loading.getLoadTestResultDetails}
      label={<LoadTestResultLabelsView result={details} />}>
      <WidgetInfoRowsView>
        <BaseInfoRowView name={'Time range'} value={`${startedAt} — ${finishedAt}`} />
        <BaseInfoRowView name={'Number of users'} value={details.numberOfUsers} />
        <BaseInfoRowView name={'Total requests'} value={details.totalRequests} />
        <BaseInfoRowView name={'Total requests per second'} value={details.totalRequestsPerSecond} />
        <BaseInfoRowView name={'Total failures'} value={details.totalFailures} />
        <BaseInfoRowView name={'Total failures per second'} value={details.totalFailuresPerSecond} />
        <BaseInfoRowView name={'Max response time'} value={details.maxResponseTime} />
        <BaseInfoRowView name={'Min response time'} value={details.minResponseTime} />
      </WidgetInfoRowsView>
      <LoadTestResultActions details={details} />
    </WidgetView>
  );
};

const getState = (state: ReduxState) => ({
  details: state.results.loadTestResultDetails
});
export default connect(getState)(LoadTestResultDetailsView);
