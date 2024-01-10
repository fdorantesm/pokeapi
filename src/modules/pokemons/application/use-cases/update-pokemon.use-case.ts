import { UseCase } from '@/core/domain/decorators/case.decorator';
import { InjectService } from '@/core/domain/decorators/inject-service.decorator';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Executable } from '@/core/domain/use-case.interface';
import { PokemonNotFoundException } from '@/modules/pokemons/domain/exceptions/pokemon-not-found.exception';
import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';
import { PokemonsService } from '@/modules/pokemons/domain/interfaces/pokemons.service';
import { Logger } from '@nestjs/common';

@UseCase()
export class UpdatePokemonUseCase implements Executable {
  constructor(
    @InjectService('PokemonsService')
    private readonly pokemonsService: PokemonsService,
  ) {}

  public async execute(
    context: Context,
    uuid: string,
    data: Partial<Pokemon>,
  ): Promise<unknown> {
    const pokemon = await this.pokemonsService.findOne({ uuid });

    if (!pokemon) {
      throw new PokemonNotFoundException(`Pokemon ${uuid} not found`);
    }

    const updatedPokemon = await this.pokemonsService.update({ uuid }, data);

    Logger.log(`Updated pokemon ${uuid}`, context.requestId);

    return updatedPokemon.toJson();
  }
}
