import { Resource } from '@/modules/pokemons/infrastructure/vendors/pokeapi/types/resource.type';

export type PokemonsList = {
  count: number;
  next: string;
  previous: string;
  results: Resource[];
};
