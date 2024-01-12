import { Module } from '@nestjs/common';

import { puppeteerConfig } from '@/modules/shared/infrastructure/config/loaders/puppeteer.loader';
import { DateService } from '@/modules/shared/infrastructure/vendors/luxon';
import { TemplateService } from '@/modules/shared/infrastructure/vendors/pug';
import { PdfGeneratorService } from '@/modules/shared/infrastructure/vendors/puppeteer';
import { SlugService } from '@/modules/shared/infrastructure/vendors/slugify';
import { FileService } from '@/modules/shared/utils/file';
import { FileSystemService } from '@/modules/shared/utils/file-system';
import { PathService } from '@/modules/shared/utils/path';
import { TitlelizerService } from '@/modules/shared/utils/titlelizer';
import { UrlService } from '@/modules/shared/utils/url';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({
      puppeteer: puppeteerConfig(),
    })),
  ],
  providers: [
    TemplateService,
    FileService,
    UrlService,
    TitlelizerService,
    SlugService,
    DateService,
    FileSystemService,
    PathService,
    PdfGeneratorService,
  ],
  exports: [
    FileService,
    UrlService,
    TitlelizerService,
    SlugService,
    TemplateService,
    DateService,
    FileSystemService,
    PathService,
    PdfGeneratorService,
  ],
})
export class SharedModule {}
