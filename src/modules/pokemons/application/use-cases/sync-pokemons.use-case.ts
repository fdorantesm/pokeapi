import { UseCase } from '@/core/domain/decorators/case.decorator';
import { InjectService } from '@/core/domain/decorators/inject-service.decorator';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Executable } from '@/core/domain/use-case.interface';
import { Json } from '@/core/types/general/json.type';
import { PokemonsService } from '@/modules/pokemons/domain/interfaces/pokemons.service';
// eslint-disable-next-line hexagonal-architecture/enforce
import { PokemonsList } from '@/modules/pokemons/infrastructure/vendors/pokeapi/types/pokemons.list.type';
import { HttpService } from '@nestjs/axios';
import { Logger } from '@nestjs/common';
import PromisePool from '@supercharge/promise-pool';
import { InjectUuidService, UuidService } from 'nestjs-uuid';
import { firstValueFrom } from 'rxjs';

@UseCase()
export class SyncPokemonsUseCase implements Executable {
  constructor(
    @InjectService('PokemonsService')
    private readonly pokemonsService: PokemonsService,
    @InjectUuidService()
    private readonly uuidService: UuidService,
    private readonly pokeApi: HttpService,
  ) {}

  public async execute(context: Context): Promise<void> {
    let nextUrl = '/pokemon';
    let syncedPokemons = 0;
    let syncedErrors = 0;

    while (nextUrl) {
      const req = this.pokeApi.get<PokemonsList>(nextUrl);
      const response = await firstValueFrom(req);

      const { results, errors } = await PromisePool.withConcurrency(5)
        .for(response.data.results)
        .process(async (row) => {
          const pokemon = await this.pokemonsService.findOne({ name: row.name });
          if (!pokemon) {
            const { data } = await firstValueFrom(this.pokeApi.get<Json>(row.url));
            const uuid = this.uuidService.generate();
            await this.pokemonsService.create({
              uuid,
              id: data.id,
              name: data.name,
              height: data.height,
              weight: data.weight,
              baseExperience: data.base_experience,
              abilities: data.abilities.map((ability) => ({
                ability: {
                  name: ability.ability.name,
                  url: ability.ability.url,
                },
                hidden: ability.is_hidden,
                slot: ability.slot,
              })),
              stats: data.stats.map((stat) => ({
                baseStat: stat.base_stat,
                effort: stat.effort,
                stat: {
                  name: stat.stat.name,
                  url: stat.stat.url,
                },
              })),
              types: data.types.map((type) => ({
                slot: type.slot,
                type: {
                  name: type.type.name,
                  url: type.type.url,
                },
              })),
              species: data.species,
              sprites: {
                backDefault: data.sprites.back_default,
                backShiny: data.sprites.back_shiny,
                frontDefault: data.sprites.front_default,
                frontShiny: data.sprites.front_shiny,
                backFemale: data.sprites.back_female,
                backShinyFemale: data.sprites.back_shiny_female,
                frontFemale: data.sprites.front_female,
                frontShinyFemale: data.sprites.front_shiny_female,
              },
            });
            syncedPokemons += results.length;
          }
        });

      syncedErrors += errors.length;

      nextUrl = response.data.next;
    }

    Logger.log(
      `Synced ${syncedPokemons} pokemon(s) with ${syncedErrors} error(s)`,
      context.requestId,
    );
  }
}
