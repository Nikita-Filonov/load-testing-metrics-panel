import { HTTPClient } from '../HTTPClient';
import { SettingsManager } from '../../Config';
import {
  GetMethodDetailsQuery,
  GetMethodDetailsResponse,
  GetMethodsQuery,
  GetMethodsResponse
} from '../../../Models/Results/Methods';

export class MethodsHTTPClient extends HTTPClient {
  constructor() {
    super({ baseUrl: SettingsManager.apiUrl });
  }

  async getMethods(query: GetMethodsQuery): Promise<GetMethodsResponse | null> {
    const response = await this.get({ url: '/methods', query });
    return response.json;
  }

  async getMethodDetails(query: GetMethodDetailsQuery): Promise<GetMethodDetailsResponse | null> {
    const response = await this.get({ url: `/methods/details`, query });
    return response.json;
  }
}
