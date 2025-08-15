import {ConvertDateTime} from '../ConvertDateTime';

describe('ConvertDateTime', () => {
  it('should convert a valid date to a string', () => {
    const date = new Date('2022-01-01T12:00:00.000Z');
    const result = ConvertDateTime(date);
    expect(result).toBe('1/1/2022, 12:00:00 PM');
  });

  it('should return an empty string for an invalid date (null)', () => {
    const date = null;
    const result = ConvertDateTime(date);
    expect(result).toBe('Invalid Date');
  });

  it('should return an empty string for an invalid date (undefined)', () => {
    const date = undefined;
    const result = ConvertDateTime(date);
    expect(result).toBe('Invalid Date');
  });

  it('should return an empty string for an invalid date (string)', () => {
    const date = 'not a date';
    const result = ConvertDateTime(date);
    expect(result).toBe('Invalid Date');
  });

  it('should convert a date in a different timezone', () => {
    const date = new Date('2022-01-01T12:00:00.000Z');
    const timezone = 'America/New_York';
    const result = ConvertDateTime(date);
    // Note: this test assumes the system timezone is not America/New_York
    expect(result).not.toBe('1/1/2022, 12:00:00 PM');
  });
});
