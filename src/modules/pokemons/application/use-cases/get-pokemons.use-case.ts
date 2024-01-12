import { UseCase } from '@/core/domain/decorators/case.decorator';
import { InjectService } from '@/core/domain/decorators/inject-service.decorator';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Pagination } from '@/core/domain/pagination';
import { Executable } from '@/core/domain/use-case.interface';
import { Json } from '@/core/types/general/json.type';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import { PokemonEntity } from '@/modules/pokemons/domain/entities/pokemon.entity';
import { PokemonJson } from '@/modules/pokemons/domain/interfaces/pokemon.json.interface';
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
  ): Promise<Pagination<PokemonEntity> | PokemonJson[]> {
    Logger.log(`Getting pokemons`, context.requestId);
    Logger.log({ search, filter, options }, context.requestId);

    if (!options.sort) {
      options.sort = 'name';
    }

    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    if (options.page && options.limit) {
      const result = await this.pokemonsService.paginate(filter, options);
      const nextPage = result.page < result.pages ? result.page + 1 : null;
      const prevPage = result.page > 1 ? result.page - 1 : null;
      return {
        docs: result.docs,
        total: result.total,
        limit: result.limit,
        page: result.page,
        pages: result.pages,
        prevPage: prevPage,
        nextPage: nextPage,
        offset: result.offset,
      };
    }

    const pokemons = await this.pokemonsService.find(filter, null, options);

    return pokemons.map((pokemon) => pokemon.toJson());
  }
}
