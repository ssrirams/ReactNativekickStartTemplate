import {LoginService} from '../../../../../@common/networkClient/services/LoginService';
import {LOGIN_ENDPOINTS} from '../constants/EndPoits';
import {LoginRequest} from '../types/LoginRequest';
import {LoginResponse} from '../types/LoginResponse';

/**
 * Sends a login request to the server and returns the response.
 *
 * @param request - The login request containing the username and password.
 * @returns A promise that resolves to the login response.
 */
export const loginApi = async (
  request: LoginRequest,
): Promise<LoginResponse> => {
  const res: LoginResponse = await LoginService.post<
    LoginRequest,
    LoginResponse
  >(LOGIN_ENDPOINTS, request);
  return res;
};
