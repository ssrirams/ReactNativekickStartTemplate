import {check, request, RESULTS} from 'react-native-permissions';
import {getPermissionString} from './GetPermissionType';
import {AllPermissions} from './enums';

export const requestPermission = async (
  permission = AllPermissions.Camera,
  checkOnly = false,
) => {
  const permissionString = getPermissionString(permission);
  try {
    if (permissionString) {
      const result = await check(permissionString);
      if (result === RESULTS.GRANTED) {
        return RESULTS.GRANTED;
      } else if (!checkOnly) {
        const newResult = await request(permissionString);
        return newResult;
      }
      return result;
    }
  } catch (error) {
    return 'ERROR';
  }
};
