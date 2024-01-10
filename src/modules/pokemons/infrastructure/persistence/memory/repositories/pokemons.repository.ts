import DataStore = require('nedb-promises');
import { BaseMemoryRepository } from '@/core/infrastructure/repositories/base.memory-repository';
import { PokemonEntity } from '@/modules/pokemons/domain/entities/pokemon.entity';
import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonsMemoryRepository extends BaseMemoryRepository<Pokemon, PokemonEntity> {
  constructor() {
    super(DataStore.create(), PokemonEntity, { softDelete: false });
  }
}
