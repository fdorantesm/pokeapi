import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { configOptions } from '@/config';
import { HttpExceptionFilter } from '@/core/infrastructure/filters/exception.filter';
import { TransformInterceptor } from '@/core/infrastructure/interceptors/transform.interceptor';

@Module({
  imports: [ConfigModule.forRoot(configOptions)],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class CoreModule {}
