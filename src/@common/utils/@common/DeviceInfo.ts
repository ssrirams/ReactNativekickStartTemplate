import {Platform} from 'react-native';
import {getDeviceToken, getIpAddress} from 'react-native-device-info';

export const DEVICE_INFO = {
  getPackageName() {
    // const packageName = DeviceInfo.getBundleId();
    // TODO: add package name instead of com.example
    const packageName = 'com.example';
    return packageName;
  },
  getDeviceIpAddress() {
    return getIpAddress();
  },

  getAndroidVersion() {
    return Platform.Version;
  },

  getToken() {
    return getDeviceToken();
  },
};
