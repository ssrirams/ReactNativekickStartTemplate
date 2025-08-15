export abstract class Codable {
  static codingKeys(): Record<string, string> {
    return {};
  }

  encode(): Record<string, any> {
    const keys = (this.constructor as any).codingKeys();
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(this)) {
      const codingKey = keys[key] || key;
      result[codingKey] = value;
    }
    return result;
  }

  decode(json: Record<string, any>): void {
    const keys = (this.constructor as any).codingKeys();
    for (const [key, value] of Object.entries(json)) {
      const propertyKey = Object.keys(keys).find(k => keys[k] === key) || key;
      (this as any)[propertyKey] = value;
    }
  }
}
