import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';

import { CoreModule } from '@/core/core.module';
import { DatabaseModule } from '@/database/database.module';
import { HealthModule } from '@/modules/health/health.module';
import { SharedModule } from '@/modules/shared/shared.module';

@Module({
  imports: [
    CoreModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    DatabaseModule,
    HealthModule,
    SharedModule,
  ],
})
export class AppModule {}
