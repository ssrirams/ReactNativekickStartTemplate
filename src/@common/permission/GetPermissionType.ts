import {PERMISSIONS} from 'react-native-permissions';
import {PLATFORM} from '../utils/@common/Platfrom';
import {AllPermissions} from './enums';

export const getPermissionString = (permission: AllPermissions) => {
  switch (permission) {
    case AllPermissions.Camera:
      return PLATFORM.IS_IOS
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;
    case AllPermissions.Location:
      return PLATFORM.IS_IOS
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    case AllPermissions.Storage:
      return PLATFORM.IS_IOS
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    case AllPermissions.Audio:
      return PLATFORM.IS_IOS
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO;
    case AllPermissions.PhoneCalls:
      return PLATFORM.IS_ANDROID ? PERMISSIONS.ANDROID.CALL_PHONE : null;
    case AllPermissions.Notification:
      return PLATFORM.IS_ANDROID
        ? PERMISSIONS.ANDROID.POST_NOTIFICATIONS
        : null;
    default:
      return null;
  }
};
