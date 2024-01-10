import { Context } from '@/core/domain/interfaces/context.interface';
import { Pagination } from '@/core/domain/pagination';
import { Ctx } from '@/core/infrastructure/decorators/context.decorator';
import { QueryParser } from '@/core/infrastructure/decorators/query-parser.decorator';
import { Json } from '@/core/types/general/json.type';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import { CreatePokemonUseCase } from '@/modules/pokemons/application/use-cases/create-pokemon.use-case';
import { DeletePokemonUseCase } from '@/modules/pokemons/application/use-cases/delete-pokemon.use-case';
import { GetPokemonUseCase } from '@/modules/pokemons/application/use-cases/get-pokemon.use-case';
import { GetPokemonsUseCase } from '@/modules/pokemons/application/use-cases/get-pokemons.use-case';
import { SyncPokemonsUseCase } from '@/modules/pokemons/application/use-cases/sync-pokemons.use-case';
import { UpdatePokemonUseCase } from '@/modules/pokemons/application/use-cases/update-pokemon.use-case';
import { PokemonJson } from '@/modules/pokemons/domain/interfaces/pokemon.json.interface';
import { CreatePokemonDto } from '@/modules/pokemons/infrastructure/http/dtos/create-pokemon.dto';
import { UpdatePokemonDto } from '@/modules/pokemons/infrastructure/http/dtos/update-pokemon.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller({ path: 'pokemons', version: '1' })
export class PokemonsController {
  constructor(
    private readonly createPokemonUseCase: CreatePokemonUseCase,
    private readonly getPokemonUseCase: GetPokemonUseCase,
    private readonly getPokemonsUseCase: GetPokemonsUseCase,
    private readonly updatePokemonUseCase: UpdatePokemonUseCase,
    private readonly deletePokemonUseCase: DeletePokemonUseCase,
    private readonly syncPokemonsUseCase: SyncPokemonsUseCase,
  ) {}

  @Get('/')
  public async getPokemons(
    @Ctx() context: Context,
    @QueryParser('filter') filter: Json,
    @QueryParser('options') options: QueryParsedOptions,
  ): Promise<Pagination<PokemonJson>> {
    return await this.getPokemonsUseCase.execute(context, filter, options);
  }

  @Get('/:uuid')
  public async getPokemon(
    @Ctx() context: Context,
    @Param('uuid') uuid: string,
  ): Promise<PokemonJson> {
    return await this.getPokemonUseCase.execute(context, uuid);
  }

  @Post('/')
  public async createPokemon(
    @Body() pokemon: CreatePokemonDto,
    @Ctx() context: Context,
  ): Promise<PokemonJson> {
    return await this.createPokemonUseCase.execute(context, pokemon);
  }

  @Patch('/:uuid')
  public async updatePokemon(
    @Ctx() context: Context,
    @Param('uuid') uuid: string,
    @Body() data: UpdatePokemonDto,
  ): Promise<PokemonJson> {
    return await this.updatePokemonUseCase.execute(context, uuid, data);
  }

  @Delete('/:uuid')
  public async deletePokemon(
    @Ctx() context: Context,
    @Param('uuid') uuid: string,
  ): Promise<void> {
    return await this.deletePokemonUseCase.execute(context, uuid);
  }

  @Post('/sync')
  public async syncPokemons(@Ctx() context: Context): Promise<void> {
    return this.syncPokemonsUseCase.execute(context);
  }
}
