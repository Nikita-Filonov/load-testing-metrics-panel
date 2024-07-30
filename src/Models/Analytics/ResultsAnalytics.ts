export interface GetResultsAnalyticsQuery extends Record<string, string> {
  service: string;
  startDatetime: string;
  endDatetime: string;
}
