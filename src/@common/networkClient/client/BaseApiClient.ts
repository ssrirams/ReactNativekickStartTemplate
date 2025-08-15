import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestHeaders,
  Method,
  InternalAxiosRequestConfig,
} from 'axios';

// import {clearDataOnLogout} from '@commons/utils';
// import {navigate} from '@app/AppNavigation';
import {ApiClientConfig} from './types';

export abstract class BaseApiClient {
  protected axiosInstance: AxiosInstance;

  constructor({baseURL, serviceName, includesApiKey = true}: ApiClientConfig) {
    const apiPath = includesApiKey ? '/api' : '';
    const servicePath = `/${serviceName}`;
    const url = baseURL + apiPath + servicePath;

    this.axiosInstance = axios.create({
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.request.use(
      this.handleRequest,
      this.handleError,
    );
    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  }

  protected async modifyHeadersIfRequired(
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> {
    return config;
  }

  private handleRequest = async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    let mConfig = config;
    mConfig = await this.modifyHeadersIfRequired(mConfig);
    return mConfig;
  };

  private handleResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  private async handleUnauthorisedError(error: AxiosError) {
    let httpStatusCode = error?.response?.status;
    if (httpStatusCode === 401) {
      // TODO : Implement clearDataOnLogout
      // await clearDataOnLogout();
    }
  }

  private handleError = async (error: AxiosError): Promise<any> => {
    await this.handleUnauthorisedError(error);
    return Promise.reject(error);
  };

  protected async request<T>(
    method: Method,
    url: string,
    data?: any,
    headers?: Record<string, string>,
    params?: Record<string, any>,
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.request<T>({
        method,
        url,
        data,
        headers: headers as AxiosRequestHeaders,
        params,
      });

      const responseData = response.data as T;
      return responseData;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public post<RequestType, ResponseType>(
    url: string,
    data: RequestType,
    headers?: Record<string, string>,
  ): Promise<ResponseType> {
    return this.request<ResponseType>('POST', url, data, headers);
  }

  public get<ResponseType>(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>,
  ): Promise<ResponseType> {
    return this.request<ResponseType>('GET', url, undefined, headers, params);
  }

  public put<RequestType, ResponseType>(
    url: string,
    data: RequestType,
    headers?: Record<string, string>,
  ): Promise<ResponseType> {
    return this.request<ResponseType>('PUT', url, data, headers);
  }

  public delete<ResponseType>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<ResponseType> {
    return this.request<ResponseType>('DELETE', url, undefined, headers);
  }
}
