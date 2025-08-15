class Logger {
  logInfo(message: string): void {
    console.info(`[INFO]: ${message}`);
  }

  logWarning(message: string): void {
    console.warn(`[WARNING]: ${message}`);
  }

  logError(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }

  logMessage(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

export default Logger;
