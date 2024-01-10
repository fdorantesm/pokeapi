import { PokeApiConfiguration } from '@/modules/pokemons/application/config/types/pokeapi.config';
import { registerAs } from '@nestjs/config';

export const pokeApiConfigLoader = registerAs(
  'pokeApi',
  (): PokeApiConfiguration => ({
    baseUrl: process.env.POKEAPI_BASE_URL,
  }),
);
