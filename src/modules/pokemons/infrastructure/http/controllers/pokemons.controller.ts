import { Context } from '@/core/domain/interfaces/context.interface';
import { Ctx } from '@/core/infrastructure/decorators/context.decorator';
import { CreatePokemonUseCase } from '@/modules/pokemons/application/use-cases/create-pokemon.use-case';
import { PokemonJson } from '@/modules/pokemons/domain/interfaces/pokemon.json.interface';
import { CreatePokemonDto } from '@/modules/pokemons/infrastructure/http/dtos/create-pokemon.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller({ path: 'pokemons', version: '1' })
export class PokemonsController {
  constructor(private readonly createPokemonUseCase: CreatePokemonUseCase) {}

  @Post('/')
  public async createPokemon(
    @Body() pokemon: CreatePokemonDto,
    @Ctx() context: Context,
  ): Promise<PokemonJson> {
    return await this.createPokemonUseCase.execute(context, pokemon);
  }
}
