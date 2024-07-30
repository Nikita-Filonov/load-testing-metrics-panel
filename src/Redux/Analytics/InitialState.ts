import { RequestsPerSecondAnalytics } from '../../Models/Analytics/RequestsPerSecondAnalytics';
import { NumberOfRequestsAnalytics } from '../../Models/Analytics/NumberOfRequestsAnalytics';
import { ResponseTimesAnalytics } from '../../Models/Analytics/ResponseTimesAnalytics';

export type AnalyticsInitialState = {
  methodsResponseTimesAnalytics: ResponseTimesAnalytics[];
  methodsNumberOfRequestsAnalytics: NumberOfRequestsAnalytics[];
  methodsRequestsPerSecondAnalytics: RequestsPerSecondAnalytics[];
  resultsResponseTimesAnalytics: ResponseTimesAnalytics[];
  resultsNumberOfRequestsAnalytics: NumberOfRequestsAnalytics[];
  resultsRequestsPerSecondAnalytics: RequestsPerSecondAnalytics[];
};

export const INITIAL_ANALYTICS: AnalyticsInitialState = {
  methodsResponseTimesAnalytics: [],
  methodsNumberOfRequestsAnalytics: [],
  methodsRequestsPerSecondAnalytics: [],
  resultsResponseTimesAnalytics: [],
  resultsNumberOfRequestsAnalytics: [],
  resultsRequestsPerSecondAnalytics: []
};
