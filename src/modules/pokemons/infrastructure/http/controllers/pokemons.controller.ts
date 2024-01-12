import { Context } from '@/core/domain/interfaces/context.interface';
import { Pagination } from '@/core/domain/pagination';
import { Ctx } from '@/core/infrastructure/decorators/context.decorator';
import { QueryParser } from '@/core/infrastructure/decorators/query-parser.decorator';
import { Json } from '@/core/types/general/json.type';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import { CreatePokemonUseCase } from '@/modules/pokemons/application/use-cases/create-pokemon.use-case';
import { DeleteAllPokemonsUseCase } from '@/modules/pokemons/application/use-cases/delete-all-pokemons.use-case';
import { DeletePokemonUseCase } from '@/modules/pokemons/application/use-cases/delete-pokemon.use-case';
import { GetPokemonUseCase } from '@/modules/pokemons/application/use-cases/get-pokemon.use-case';
import { GetPokemonsUseCase } from '@/modules/pokemons/application/use-cases/get-pokemons.use-case';
import { SyncPokemonsUseCase } from '@/modules/pokemons/application/use-cases/sync-pokemons.use-case';
import { UpdatePokemonUseCase } from '@/modules/pokemons/application/use-cases/update-pokemon.use-case';
import { PokemonJson } from '@/modules/pokemons/domain/interfaces/pokemon.json.interface';
import { CreatePokemonDto } from '@/modules/pokemons/infrastructure/http/dtos/create-pokemon.dto';
import { UpdatePokemonDto } from '@/modules/pokemons/infrastructure/http/dtos/update-pokemon.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Pokemons')
@Controller({ path: 'pokemons', version: '1' })
export class PokemonsController {
  constructor(
    private readonly createPokemonUseCase: CreatePokemonUseCase,
    private readonly getPokemonUseCase: GetPokemonUseCase,
    private readonly getPokemonsUseCase: GetPokemonsUseCase,
    private readonly updatePokemonUseCase: UpdatePokemonUseCase,
    private readonly deletePokemonUseCase: DeletePokemonUseCase,
    private readonly syncPokemonsUseCase: SyncPokemonsUseCase,
    private readonly deleteAllPokemonsUseCase: DeleteAllPokemonsUseCase,
  ) {}

  @ApiOperation({
    summary: 'Get pokemons',
    description: 'Returns a list with all pokemons or paginated list',
  })
  @ApiQuery({ name: 'search', type: 'string', example: 'pikachu', required: false })
  @ApiQuery({ name: 'limit', type: 'number', example: 10, required: false })
  @ApiQuery({ name: 'page', type: 'number', example: 1, required: false })
  @ApiQuery({ name: 'sort', type: 'string', example: 'name', required: false })
  @ApiQuery({
    name: 'types.type.name',
    type: 'string',
    example: 'fire,ground',
    required: false,
  })
  @Get('/')
  public async getPokemons(
    @Ctx() context: Context,
    @QueryParser('search') search: string,
    @QueryParser('filter') filter: Json,
    @QueryParser('options') options: QueryParsedOptions,
  ): Promise<Pagination<PokemonJson> | PokemonJson[]> {
    return await this.getPokemonsUseCase.execute(context, search, filter, options);
  }

  @ApiOperation({ summary: 'Get pokemon by uuid' })
  @ApiParam({ name: 'uuid', type: 'string', example: 'b8265dc6-f551-423e-8032-f33fc180f03e' })
  @ApiOkResponse({ type: Object })
  @ApiNotFoundResponse({ description: 'Pokemon not found' })
  @Get('/:uuid')
  public async getPokemon(
    @Ctx() context: Context,
    @Param('uuid') uuid: string,
  ): Promise<PokemonJson> {
    return await this.getPokemonUseCase.execute(context, uuid);
  }

  @ApiOperation({ summary: 'Create pokemon' })
  @ApiBody({ type: CreatePokemonDto })
  @ApiCreatedResponse({ type: Object })
  @ApiBadRequestResponse({ description: 'Invalid or missing data' })
  @ApiConflictResponse({ description: 'Pokemon already exists' })
  @Post('/')
  public async createPokemon(
    @Body() pokemon: CreatePokemonDto,
    @Ctx() context: Context,
  ): Promise<PokemonJson> {
    return await this.createPokemonUseCase.execute(context, pokemon);
  }

  @ApiOperation({ summary: 'Update pokemon' })
  @ApiParam({ name: 'uuid', type: 'string', example: 'b8265dc6-f551-423e-8032-f33fc180f03e' })
  @ApiBody({ type: UpdatePokemonDto })
  @ApiOkResponse({ type: Object })
  @ApiNotFoundResponse({ description: 'Pokemon not found' })
  @Patch('/:uuid')
  public async updatePokemon(
    @Ctx() context: Context,
    @Param('uuid') uuid: string,
    @Body() data: UpdatePokemonDto,
  ): Promise<PokemonJson> {
    return await this.updatePokemonUseCase.execute(context, uuid, data);
  }

  @ApiOperation({ summary: 'Delete pokemon' })
  @ApiParam({ name: 'uuid', type: 'string', example: 'b8265dc6-f551-423e-8032-f33fc180f03e' })
  @ApiNoContentResponse({ description: 'Pokemon deleted' })
  @ApiNotFoundResponse({ description: 'Pokemon not found' })
  @Delete('/:uuid')
  public async deletePokemon(
    @Ctx() context: Context,
    @Param('uuid') uuid: string,
  ): Promise<void> {
    return await this.deletePokemonUseCase.execute(context, uuid);
  }

  @ApiOperation({ summary: 'Fetch pokemons from pokeapi and save in our database' })
  @ApiNoContentResponse({ description: 'Sync process started' })
  @Post('/sync')
  public async syncPokemons(@Ctx() context: Context): Promise<void> {
    return this.syncPokemonsUseCase.execute(context);
  }

  @ApiOperation({ summary: 'Clean pokemons database' })
  @ApiNoContentResponse({ description: 'Clean process started' })
  @Post('/clean')
  public async clearPokemons(@Ctx() context: Context): Promise<void> {
    return this.deleteAllPokemonsUseCase.execute(context);
  }
}
