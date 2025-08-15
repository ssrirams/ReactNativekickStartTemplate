import {APP_CONFIG} from '../../config/AppConfig';
import {ApiClient} from '../client';
import {SERVICES} from '../constants';

export const LoginService = new ApiClient({
  baseURL: APP_CONFIG.BASE_URL as string,
  serviceName: SERVICES.LoginService,
  includesApiKey: false,
});
