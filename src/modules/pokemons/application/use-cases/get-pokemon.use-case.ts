import { UseCase } from '@/core/domain/decorators/case.decorator';
import { InjectService } from '@/core/domain/decorators/inject-service.decorator';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Executable } from '@/core/domain/use-case.interface';
import { PokemonNotFoundException } from '@/modules/pokemons/domain/exceptions/pokemon-not-found.exception';
import { PokemonJson } from '@/modules/pokemons/domain/interfaces/pokemon.json.interface';
import { PokemonsService } from '@/modules/pokemons/domain/interfaces/pokemons.service';

@UseCase()
export class GetPokemonUseCase implements Executable {
  constructor(
    @InjectService('PokemonsService')
    private readonly pokemonsService: PokemonsService,
  ) {}

  public async execute(context: Context, uuid: string): Promise<PokemonJson> {
    const pokemon = await this.pokemonsService.findOne({ uuid });

    if (!pokemon) {
      throw new PokemonNotFoundException(`Pokemon ${uuid} not found`);
    }

    return pokemon.toJson();
  }
}
