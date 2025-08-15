import * as Keychain from 'react-native-keychain';
import {DEVICE_INFO} from '../../@common/utils/@common/DeviceInfo';

class SecuredStore {
  private readonly service: string;

  constructor(identifier: string) {
    const packageName = DEVICE_INFO.getPackageName();
    this.service = `${packageName}.${identifier}`;
  }

  private getServiceName(key: string): string {
    return `${this.service}.${key}`;
  }

  private async secureSet(key: string, value: string): Promise<void> {
    try {
      await Keychain.setGenericPassword(key, value, {
        service: this.getServiceName(key),
      });
    } catch (error) {
      console.error(
        `[secureSet] Error setting ${key} in SecuredStore: `,
        error,
      );
    }
  }

  private async secureGet(key: string): Promise<string | null> {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: this.getServiceName(key),
      });
      if (credentials && credentials?.username === key) {
        return credentials.password;
      }
    } catch (error) {
      console.error(`Error retrieving ${key} from SecuredStore: `, error);
    }
    return null;
  }

  private async secureRemove(key: string): Promise<void> {
    try {
      const serviceName = this.getServiceName(key);
      const credentials = await Keychain.getGenericPassword({
        service: serviceName,
      });
      if (credentials && credentials?.username === key) {
        await Keychain.resetGenericPassword({
          service: serviceName,
        });
      }
    } catch (error) {
      console.error(`Error removing ${key} from SecuredStore: `, error);
    }
  }

  public async setItem(key: string, value: string): Promise<void> {
    await this.secureSet(key, value);
  }

  public async getItem(key: string): Promise<string | null> {
    return await this.secureGet(key);
  }

  public async removeItem(key: string): Promise<void> {
    await this.secureRemove(key);
  }
}

export {SecuredStore};
