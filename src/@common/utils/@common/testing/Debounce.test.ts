import {debounce} from '../Debounce';

describe('debounce function', () => {
  it('should call the original function after the delay', done => {
    const originalFunction = jest.fn((text: string) => {
      expect(text).toBe('Hello');
    });
    const debouncedFunction = debounce(originalFunction, 100);
    debouncedFunction('Hello');
    setTimeout(() => {
      expect(originalFunction).toHaveBeenCalledTimes(1);
      done();
    }, 150);
  });

  it('should not call the original function if delay is undefined', () => {
    const originalFunction = jest.fn((text: string) => {
      expect(text).toBe('Hello');
    });
    const debouncedFunction = debounce(originalFunction, undefined);
    debouncedFunction('Hello');
    expect(originalFunction).not.toHaveBeenCalled();
  });

  it('should only call the original function once if multiple calls are made within the delay period', done => {
    const originalFunction = jest.fn((text: string) => {
      expect(text).toBe('Hello');
    });
    const debouncedFunction = debounce(originalFunction, 100);
    debouncedFunction('Hello');
    debouncedFunction('World');
    setTimeout(() => {
      expect(originalFunction).toHaveBeenCalledTimes(1);
      done();
    }, 150);
  });

  it('should call the original function multiple times if multiple calls are made outside the delay period', done => {
    const originalFunction = jest.fn((text: string) => {
      expect(text).toBe('Hello');
    });
    const debouncedFunction = debounce(originalFunction, 100);
    debouncedFunction('Hello');
    setTimeout(() => {
      debouncedFunction('World');
    }, 150);
    setTimeout(() => {
      expect(originalFunction).toHaveBeenCalledTimes(2);
      done();
    }, 300);
  });
});
