import { FC, Fragment, useEffect, useState } from 'react';
import { AnalyticsFilters, AnalyticsFiltersView } from '../Analytics/AnalyticsFiltersView';
import { RequestsPerSecondAnalyticsView } from '../Analytics/RequestsPerSecondAnalyticsView';
import { ResponseTimesAnalyticsView } from '../Analytics/ResponseTimesAnalyticsView';
import dayjs from 'dayjs';
import { SettingsManager } from '../../Services/Config';
import { NumberOfRequestsAnalyticsView } from '../Analytics/NumberOfRequestsAnalyticsView';
import { useResultsAnalytics } from '../../Providers/Analytics/ResultsAnalyticsProvider';
import { connect } from 'react-redux';
import { ReduxState } from '../../Redux/ReduxState';
import { ResponseTimesAnalytics } from '../../Models/Analytics/ResponseTimesAnalytics';
import { NumberOfRequestsAnalytics } from '../../Models/Analytics/NumberOfRequestsAnalytics';
import { RequestsPerSecondAnalytics } from '../../Models/Analytics/RequestsPerSecondAnalytics';
import { Service } from '../../Models/Services/Services';
import { GetResultsAnalyticsQuery } from '../../Models/Analytics/ResultsAnalytics';

type DashboardChartsViewProps = {
  service: Service;
  responseTimesAnalytics: ResponseTimesAnalytics[];
  numberOfRequestsAnalytics: NumberOfRequestsAnalytics[];
  requestsPerSecondAnalytics: RequestsPerSecondAnalytics[];
};

const DashboardChartsView: FC<DashboardChartsViewProps> = (props) => {
  const { service, responseTimesAnalytics, numberOfRequestsAnalytics, requestsPerSecondAnalytics } = props;
  const { loading, getResponseTimesAnalytics, getNumberOfRequestsAnalytics, getRequestsPerSecondAnalytics } =
    useResultsAnalytics();
  const [filters, setFilters] = useState<AnalyticsFilters>({
    startDatetime: dayjs().add(-7, 'days').format(SettingsManager.apiDateTimeFormat),
    endDatetime: dayjs().add(7, 'days').format(SettingsManager.apiDateTimeFormat)
  });

  useEffect(() => {
    const query: GetResultsAnalyticsQuery = { service: service.name, ...filters };

    Promise.all([
      getResponseTimesAnalytics(query),
      getNumberOfRequestsAnalytics(query),
      getRequestsPerSecondAnalytics(query)
    ]);
  }, [filters, service.name]);

  return (
    <Fragment>
      <AnalyticsFiltersView filters={filters} setFilters={setFilters} />
      <RequestsPerSecondAnalyticsView
        title={'Total requests per second'}
        loading={loading.getRequestsPerSecondAnalytics}
        analytics={requestsPerSecondAnalytics}
      />
      <NumberOfRequestsAnalyticsView
        title={'Total requests'}
        loading={loading.getNumberOfRequestsAnalytics}
        analytics={numberOfRequestsAnalytics}
      />
      <ResponseTimesAnalyticsView
        title={'Response times (ms)'}
        loading={loading.getResponseTimesAnalytics}
        analytics={responseTimesAnalytics}
      />
    </Fragment>
  );
};

const getState = (state: ReduxState) => ({
  service: state.services.service,
  responseTimesAnalytics: state.analytics.resultsResponseTimesAnalytics,
  numberOfRequestsAnalytics: state.analytics.resultsNumberOfRequestsAnalytics,
  requestsPerSecondAnalytics: state.analytics.resultsRequestsPerSecondAnalytics
});
export default connect(getState)(DashboardChartsView);
