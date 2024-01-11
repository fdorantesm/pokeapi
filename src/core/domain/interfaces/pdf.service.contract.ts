import { PdfServiceOptions } from '@/modules/shared/infrastructure/vendors/puppeteer/pdf.service.options';

export interface PdfService {
  render(html: string, options?: PdfServiceOptions): Promise<any>;
}
