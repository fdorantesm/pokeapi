import { PdfService } from '@/modules/shared/infrastructure/vendors/puppeteer/pdf.service';

export const PdfGeneratorService = {
  provide: 'PdfService',
  useClass: PdfService,
};

export { PdfService } from '../../../../../core/domain/interfaces/pdf.service.contract';
