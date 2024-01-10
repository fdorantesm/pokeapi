import { ResourceProps } from '@/core/domain/interfaces/resource-props.interface';
import { PokemonAbility } from '@/modules/pokemons/domain/interfaces/pokemon-ability';
import { Specie } from '@/modules/pokemons/domain/interfaces/specie.interface';
import { Sprites } from '@/modules/pokemons/domain/interfaces/sprites.interface';
import { Stats } from '@/modules/pokemons/domain/interfaces/stats.interface';
import { Types } from '@/modules/pokemons/domain/interfaces/types.interface';

export interface Pokemon extends ResourceProps {
  uuid: string;
  id: number;
  name: string;
  height: number;
  weight: number;
  baseExperience: number;
  abilities: PokemonAbility[];
  species: Specie;
  stats: Stats[];
  types: Types[];
  sprites: Sprites;
}
