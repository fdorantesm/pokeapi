import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DateService } from '@/modules/shared/infrastructure/vendors/luxon';
import { TemplateService } from '@/modules/shared/infrastructure/vendors/pug';
import { SlugService } from '@/modules/shared/infrastructure/vendors/slugify';
import { FileService } from '@/modules/shared/utils/file';
import { FileSystemService } from '@/modules/shared/utils/file-system';
import { PathService } from '@/modules/shared/utils/path';
import { TitlelizerService } from '@/modules/shared/utils/titlelizer';
import { UrlService } from '@/modules/shared/utils/url';

@Module({
  providers: [
    TemplateService,
    FileService,
    UrlService,
    TitlelizerService,
    SlugService,
    DateService,
    FileSystemService,
    PathService,
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
  ],
})
export class SharedModule {}
