
import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(), 'logs', 'test.log');

export const logMessage = (message: string) => {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logFilePath, `[${timestamp}] ${message}\n`, { encoding: 'utf8' });
};

export const logTestResult = (testName: string, status: string, duration: number) => {
  const message = `Test: ${testName} | Status: ${status} | Duration: ${duration}ms`;
  logMessage(message);
};
