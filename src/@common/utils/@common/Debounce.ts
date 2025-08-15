function debounce(
  func: {(text: string): void; apply?: any},
  delay: number | undefined,
) {
  let timeoutId: string | number | NodeJS.Timeout | undefined;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, delay);
  };
}

export {debounce};
