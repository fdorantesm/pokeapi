import { Crud } from '@/core/domain/crud.interface';
import { UseCase } from '@/core/domain/decorators/case.decorator';
import { InjectService } from '@/core/domain/decorators/inject-service.decorator';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Executable } from '@/core/domain/use-case.interface';
import { PokemonEntity } from '@/modules/pokemons/domain/entities/pokemon.entity';
import { PokemonAlreadyExistsException } from '@/modules/pokemons/domain/exceptions/pokemon-already-exists.exception';
import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';
import { PokemonJson } from '@/modules/pokemons/domain/interfaces/pokemon.json.interface';
import { PokemonPayload } from '@/modules/pokemons/domain/interfaces/pokemon.payload';
import { Logger } from '@nestjs/common';
import { InjectUuidService, UuidService } from 'nestjs-uuid';

@UseCase()
export class CreatePokemonUseCase implements Executable {
  constructor(
    @InjectService('PokemonsService')
    private readonly pokemonsService: Crud<Pokemon, PokemonEntity>,
    @InjectUuidService()
    private readonly uuidService: UuidService,
  ) {}

  public async execute(context: Context, pokemon: PokemonPayload): Promise<PokemonJson> {
    const uuid = this.uuidService.generate();

    const pokemonExists = await this.pokemonsService.findOne({ name: pokemon.name });

    if (pokemonExists) {
      throw new PokemonAlreadyExistsException(`${pokemonExists.getName()} already exists`);
    }

    const createdPokemon = await this.pokemonsService.create({
      ...pokemon,
      context,
      uuid,
    });

    Logger.log(`Pokemon ${createdPokemon.getName()} created`, context.requestId);

    return createdPokemon.toJson();
  }
}
