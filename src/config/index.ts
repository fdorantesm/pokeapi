import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import * as Joi from 'joi';

import { environmentConfigLoader } from '@/config/infrastructure/config/loaders/environment.loader';
import { serverConfigLoader } from '@/config/infrastructure/config/loaders/server.loader';
import { configSchema } from '@/config/infrastructure/config/schemas/config.schema';
import { databaseSchema } from '@/database/infrastructure/config/schemas/database.schema';

export const configOptions: ConfigModuleOptions = {
  cache: true,
  isGlobal: true,
  load: [serverConfigLoader, environmentConfigLoader],
  validationSchema: Joi.object().keys({
    ...configSchema.keys,
    ...databaseSchema.keys,
  }),
  validationOptions: {
    allowUnknown: true,
    abortEarly: true,
  },
};
