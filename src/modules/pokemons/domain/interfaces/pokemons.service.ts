import { Crud } from '@/core/domain/crud.interface';
import { PokemonEntity } from '@/modules/pokemons/domain/entities/pokemon.entity';
import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';

export interface PokemonsService extends Crud<Pokemon, PokemonEntity> {}
