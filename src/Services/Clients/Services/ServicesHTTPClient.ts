import { HTTPClient } from '../HTTPClient';
import { SettingsManager } from '../../Config';
import { GetServicesResponse } from '../../../Models/Services/Services';

export class ServicesHTTPClient extends HTTPClient {
  constructor() {
    super({ baseUrl: SettingsManager.apiUrl });
  }

  async getServices(): Promise<GetServicesResponse | null> {
    const response = await this.get({ url: '/services' });
    return response.json;
  }
}
