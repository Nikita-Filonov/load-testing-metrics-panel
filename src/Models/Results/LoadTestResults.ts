import { PaginationQuery, PaginationResponse } from '../Pagination';

export interface LoadTestResultCompare {
  previousId: number | null;
  currentTotalRequestsPerSecond: number;
  previousTotalRequestsPerSecond: number;
  totalRequestsPerSecondCompare: number;
}

export interface LoadTestResult {
  id: number;
  service: string;
  startedAt: string;
  finishedAt: string;
  totalRequests: number;
  numberOfUsers: number;
  triggerCIPipelineUrl: string | null;
  triggerCIProjectTitle: string | null;
  triggerCIProjectVersion: string | null;
  loadTestsCIPipelineUrl: string | null;
  totalRequestsPerSecond: number;
  compare: LoadTestResultCompare | null;
}

export interface LoadTestResultDetails extends LoadTestResult {
  totalFailures: number;
  totalFailuresPerSecond: number;
  averageResponseTime: number;
  maxResponseTime: number;
  minResponseTime: number;
}

export interface GetLoadTestResultsQuery extends PaginationQuery {
  service: string;
}

export interface GetLoadTestResultsResponse extends PaginationResponse<LoadTestResult> {}

export interface GetLoadTestResultDetailsResponse {
  details: LoadTestResultDetails;
}
