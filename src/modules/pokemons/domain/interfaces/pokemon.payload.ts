import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';

export type PokemonPayload = Omit<Pokemon, 'uuid' | 'context'>;
