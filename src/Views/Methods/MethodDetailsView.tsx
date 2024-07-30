import { connect } from 'react-redux';
import { WidgetView } from '../../Components/Views/WidgetView';
import { WidgetInfoRowsView } from '../../Components/Views/WidgetInfoRowsView';
import { MethodDetails } from '../../Models/Results/Methods';
import { FC, useEffect } from 'react';
import { BaseInfoRowView } from '../../Components/Views/BaseInfoRowView';
import { ReduxState } from '../../Redux/ReduxState';
import { useMethods } from '../../Providers/Results/MethodsProvider';
import { BaseLabel } from '../../Components/Labels/BaseLabel';

type MethodDetailsViewProps = {
  method: string;
  details: MethodDetails;
};

const MethodDetailsView: FC<MethodDetailsViewProps> = ({ method, details }) => {
  const { loading, getMethodDetails } = useMethods();

  useEffect(() => {
    method && getMethodDetails({ method });
  }, [method]);

  return (
    <WidgetView
      title={'Method details'}
      loading={loading.getMethodDetails}
      label={<BaseLabel label={'GRPC'} color={'info'} />}>
      <WidgetInfoRowsView>
        <BaseInfoRowView name={'Method'} value={details.method} />
        <BaseInfoRowView name={'Service'} value={details.service} />
        <BaseInfoRowView name={'Average response time'} value={details.averageResponseTime} />
        <BaseInfoRowView name={'Average requests/s'} value={details.averageRequestsPerSecond} />
        <BaseInfoRowView name={'Average number of requests'} value={details.averageNumberOfRequests} />
        <BaseInfoRowView name={'Average failures/s'} value={details.averageFailuresPerSecond} />
        <BaseInfoRowView name={'Average number of failures'} value={details.averageNumberOfFailures} />
        <BaseInfoRowView name={'Average max response time'} value={details.averageMaxResponseTime} />
        <BaseInfoRowView name={'Average min response time'} value={details.averageMinResponseTime} />
      </WidgetInfoRowsView>
    </WidgetView>
  );
};

const getState = (state: ReduxState) => ({
  details: state.results.methodDetails
});
export default connect(getState)(MethodDetailsView);
