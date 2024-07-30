import { FC, Fragment, useEffect, useState } from 'react';
import { AnalyticsFilters, AnalyticsFiltersView } from '../Analytics/AnalyticsFiltersView';
import { RequestsPerSecondAnalyticsView } from '../Analytics/RequestsPerSecondAnalyticsView';
import { ResponseTimesAnalyticsView } from '../Analytics/ResponseTimesAnalyticsView';
import dayjs from 'dayjs';
import { SettingsManager } from '../../Services/Config';
import { NumberOfRequestsAnalyticsView } from '../Analytics/NumberOfRequestsAnalyticsView';
import { connect } from 'react-redux';
import { ReduxState } from '../../Redux/ReduxState';
import { ResponseTimesAnalytics } from '../../Models/Analytics/ResponseTimesAnalytics';
import { NumberOfRequestsAnalytics } from '../../Models/Analytics/NumberOfRequestsAnalytics';
import { RequestsPerSecondAnalytics } from '../../Models/Analytics/RequestsPerSecondAnalytics';
import { useMethodsAnalytics } from '../../Providers/Analytics/MethodsAnalyticsProvider';
import { GetMethodsAnalyticsQuery } from '../../Models/Analytics/MethodsAnalytics';

type MethodChartsViewProps = {
  method: string;
  responseTimesAnalytics: ResponseTimesAnalytics[];
  numberOfRequestsAnalytics: NumberOfRequestsAnalytics[];
  requestsPerSecondAnalytics: RequestsPerSecondAnalytics[];
};

const MethodChartsView: FC<MethodChartsViewProps> = (props) => {
  const { method, responseTimesAnalytics, numberOfRequestsAnalytics, requestsPerSecondAnalytics } = props;
  const { loading, getResponseTimesAnalytics, getNumberOfRequestsAnalytics, getRequestsPerSecondAnalytics } =
    useMethodsAnalytics();
  const [filters, setFilters] = useState<AnalyticsFilters>({
    startDatetime: dayjs().add(-7, 'days').format(SettingsManager.apiDateTimeFormat),
    endDatetime: dayjs().add(7, 'days').format(SettingsManager.apiDateTimeFormat)
  });

  useEffect(() => {
    const query: GetMethodsAnalyticsQuery = { method, ...filters };

    Promise.all([
      getResponseTimesAnalytics(query),
      getNumberOfRequestsAnalytics(query),
      getRequestsPerSecondAnalytics(query)
    ]);
  }, [filters, method]);

  return (
    <Fragment>
      <AnalyticsFiltersView filters={filters} setFilters={setFilters} containerSx={{ mt: 3 }} />
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
  responseTimesAnalytics: state.analytics.methodsResponseTimesAnalytics,
  numberOfRequestsAnalytics: state.analytics.methodsNumberOfRequestsAnalytics,
  requestsPerSecondAnalytics: state.analytics.methodsRequestsPerSecondAnalytics
});
export default connect(getState)(MethodChartsView);
