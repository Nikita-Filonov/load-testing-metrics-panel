import { HTTPClient } from '../HTTPClient';
import { SettingsManager } from '../../Config';
import {
  GetLoadTestResultDetailsResponse,
  GetLoadTestResultsQuery,
  GetLoadTestResultsResponse
} from '../../../Models/Results/LoadTestResults';

export class LoadTestResultsHTTPClient extends HTTPClient {
  constructor() {
    super({ baseUrl: SettingsManager.apiUrl });
  }

  async getLoadTestResults(query: GetLoadTestResultsQuery): Promise<GetLoadTestResultsResponse | null> {
    const response = await this.get({ url: '/load-test-results', query });
    return response.json;
  }

  async getLoadTestResultDetails(loadTestResultId: number): Promise<GetLoadTestResultDetailsResponse | null> {
    const response = await this.get({ url: `/load-test-results/details/${loadTestResultId}` });
    return response.json;
  }
}
