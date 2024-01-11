import { Resource } from '@/modules/pokemons/application/types/resource.type';

export type PokemonsList = {
  count: number;
  next: string;
  previous: string;
  results: Resource[];
};
