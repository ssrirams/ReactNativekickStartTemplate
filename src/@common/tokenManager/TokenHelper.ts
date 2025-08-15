import {SecuredStore} from '../../security/securedStore';

export class TokenHelper {
  private readonly securedStore: SecuredStore;

  constructor(identifier: string) {
    this.securedStore = new SecuredStore(identifier);
  }

  public async setToken(token: string): Promise<void> {
    await this.securedStore.setItem('token', token);
  }

  public async getToken(): Promise<string | null> {
    return await this.securedStore.getItem('token');
  }

  public async clearToken(): Promise<void> {
    await this.securedStore.removeItem('token');
  }

  public async clearAll(): Promise<void> {
    await this.clearToken();
  }
}
