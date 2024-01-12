import { registerAs } from '@nestjs/config';

export const puppeteerConfig = registerAs('puppeteer', () => ({
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
}));
