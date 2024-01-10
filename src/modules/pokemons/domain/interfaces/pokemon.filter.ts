import { Json } from '@/core/types/general/json.type';
import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';

export type PokemonFilter = Partial<Pokemon> & Json;
