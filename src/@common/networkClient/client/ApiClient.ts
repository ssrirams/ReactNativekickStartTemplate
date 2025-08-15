import {AxiosRequestHeaders, InternalAxiosRequestConfig} from 'axios';

import {BaseApiClient} from './BaseApiClient';
import {TokenManager} from '../../tokenManager';

export class ApiClient extends BaseApiClient {
  protected async modifyHeadersIfRequired(
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> {
    const token = await TokenManager.getToken();
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;
    }
    return config;
  }
}
