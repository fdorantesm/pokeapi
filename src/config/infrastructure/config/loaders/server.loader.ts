import { HttpServerConfiguration } from '@/core/infrastructure/types';
import { registerAs } from '@nestjs/config';

import { configLoader } from '.';

export const serverConfigLoader = registerAs(
  'server',
  (): HttpServerConfiguration => configLoader().server,
);
