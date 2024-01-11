import { UseCase } from '@/core/domain/decorators/case.decorator';
import { InjectService } from '@/core/domain/decorators/inject-service.decorator';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Executable } from '@/core/domain/use-case.interface';
import { Json } from '@/core/types/general/json.type';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import { PokemonsService } from '@/modules/pokemons/domain/interfaces/pokemons.service';
import { Logger } from '@nestjs/common';

@UseCase()
export class GetPokemonsUseCase implements Executable {
  constructor(
    @InjectService('PokemonsService')
    private readonly pokemonsService: PokemonsService,
  ) {}

  public async execute(
    context: Context,
    search: string,
    filter: Json,
    options: QueryParsedOptions,
  ): Promise<any> {
    Logger.log(`Getting pokemons`, context.requestId);
    Logger.log({ search, filter, options }, context.requestId);

    if (!options.sort) {
      options.sort = 'name';
    }

    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    if (options.limit && options.skip !== undefined) {
      return this.pokemonsService.paginate(filter, options);
    }

    const pokemons = await this.pokemonsService.find(filter, null, options);

    return pokemons.map((pokemon) => pokemon.toJson());
  }
}
