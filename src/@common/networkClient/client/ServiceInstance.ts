import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import JSONBigIntMod from 'json-bigint';

import {ServiceInstanceParams, Interceptors} from './types';

const JSONBigInt = JSONBigIntMod({storeAsString: true});

const generateBaseURL = ({
  baseUrl,
  serviceName,
  apiVersionPrePath = '',
  apiVersion,
}: ServiceInstanceParams): string => {
  const commonPath = `${baseUrl}/${serviceName}/`;
  let apiPath = '';
  if (apiVersion) {
    // Incase prePath is sent as '', then extra slash should not be added
    if (apiVersionPrePath) {
      apiPath = `${apiVersionPrePath}/${apiVersion}/`;
    } else {
      apiPath = `${apiVersion}/`;
    }
  }
  const baseURL = `${commonPath}${apiPath}`;
  return baseURL;
};

const ServiceInstance = (
  params: ServiceInstanceParams,
  config?: AxiosRequestConfig,
  interceptors?: Interceptors,
): AxiosInstance => {
  const mConfig = {
    baseURL: generateBaseURL(params),
    transformResponse: [
      (data: any) => {
        try {
          return JSONBigInt.parse(data);
        } catch (e) {
          return data;
        }
      },
    ],
    ...config,
  };
  console.log('mConfig = ', JSON.stringify(mConfig, null, 2));
  const instance = axios.create(mConfig);

  if (interceptors?.response || interceptors?.error) {
    if (interceptors?.response && interceptors?.error) {
      instance.interceptors.response.use(
        interceptors.response,
        interceptors.error,
      );
    } else if (interceptors.response) {
      instance.interceptors.response.use(interceptors.response);
    } else {
      instance.interceptors.response.use(undefined, interceptors.error);
    }
  }

  instance.interceptors.request.use();
  return instance;
};

export {ServiceInstance, generateBaseURL};
