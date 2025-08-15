import {AxiosRequestConfig, AxiosResponse} from 'axios';

export interface ServiceInstanceParams {
  baseUrl: string;
  serviceName: string;
  apiVersion?: string;
  apiVersionPrePath?: string;
}

export interface Interceptors {
  request?(
    request: AxiosRequestConfig,
  ): AxiosRequestConfig | Promise<AxiosRequestConfig>;
  response?(request: AxiosResponse): AxiosResponse;
  error?(e: any): any;
}

export interface ApiClientConfig {
  baseURL: string;
  serviceName: string;
  includesApiKey?: boolean;
}
