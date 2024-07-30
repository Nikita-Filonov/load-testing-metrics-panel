export interface GetMethodsAnalyticsQuery extends Record<string, string> {
  method: string;
  startDatetime: string;
  endDatetime: string;
}
