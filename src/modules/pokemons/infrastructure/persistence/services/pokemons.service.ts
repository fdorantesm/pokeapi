import { InjectRepository } from '@/core/domain/decorators/inject-repository.decorator';
import { BaseRepository } from '@/core/infrastructure/repositories/base.repository';
import { BaseService } from '@/core/infrastructure/services/base.service';
import { PokemonEntity } from '@/modules/pokemons/domain/entities/pokemon.entity';
import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonsService extends BaseService<Pokemon, PokemonEntity> {
  constructor(
    @InjectRepository('PokemonsRepository')
    private readonly pokemonsRepository: BaseRepository<Pokemon, PokemonEntity>,
  ) {
    super(pokemonsRepository);
  }
}
