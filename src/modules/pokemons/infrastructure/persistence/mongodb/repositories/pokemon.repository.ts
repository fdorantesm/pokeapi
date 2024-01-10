import { BaseRepository } from '@/core/infrastructure/repositories/base.repository';
import { PokemonEntity } from '@/modules/pokemons/domain/entities/pokemon.entity';
import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';
import { PokemonModel } from '@/modules/pokemons/infrastructure/persistence/mongodb/models/pokemon.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PokemonsRepository extends BaseRepository<Pokemon, PokemonEntity> {
  constructor(
    @InjectModel(PokemonModel.name)
    private readonly pokemonModel: Model<PokemonModel>,
  ) {
    super(pokemonModel, PokemonEntity);
  }
}
