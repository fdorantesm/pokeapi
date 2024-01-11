import { Json } from '@/core/types/general/json.type';
import { PdfServiceOptions } from '@/modules/shared/infrastructure/vendors/puppeteer/pdf.service.options';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import puppeteer, { PuppeteerLaunchOptions } from 'puppeteer';

@Injectable()
export class PdfService {
  private environment: string;

  constructor(private readonly configService: ConfigService) {
    this.environment = this.configService.get<string>('environment.nodeEnv');
  }

  public async render(html: string, options?: PdfServiceOptions): Promise<any> {
    const config: PuppeteerLaunchOptions = {};

    if (this.environment !== 'local') {
      config.executablePath = this.configService.get<string>('puppeteer.executablePath');
      config.args = ['--no-sandbox', '--disable-gpu'];
      config.headless = true;
    }

    const browser = await puppeteer.launch(config);
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');

    const pdfSettings: Json = {
      format: options?.format,
      printBackground: true,
      height: '100vh',
      margin: options?.margin,
    };

    const pdf = await page.pdf(pdfSettings);

    return pdf;
  }
}
