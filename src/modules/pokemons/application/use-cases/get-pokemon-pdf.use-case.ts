import { UseCase } from '@/core/domain/decorators/case.decorator';
import { InjectService } from '@/core/domain/decorators/inject-service.decorator';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Executable } from '@/core/domain/use-case.interface';
import { GeneratePokemonPdfCommand } from '@/modules/pokemons/domain/commands/generate-pokemon-pdf.command';
import { PokemonNotFoundException } from '@/modules/pokemons/domain/exceptions/pokemon-not-found.exception';
import { PokemonsService } from '@/modules/pokemons/domain/interfaces/pokemons.service';
import { CommandBus } from '@nestjs/cqrs';

@UseCase()
export class GetPokemonPdfUseCase implements Executable {
  constructor(
    private readonly commandBus: CommandBus,
    @InjectService('PokemonsService')
    private readonly pokemonsService: PokemonsService,
  ) {}

  public async execute(
    context: Context,
    uuid: string,
  ): Promise<{ buffer: Buffer; filename: string }> {
    const pokemon = await this.pokemonsService.findOne({ uuid });

    if (!pokemon) {
      throw new PokemonNotFoundException(`Pokemon with uuid ${uuid} not found`);
    }

    const buffer = await this.commandBus.execute(
      new GeneratePokemonPdfCommand(context, pokemon.toObject()),
    );

    return {
      buffer,
      filename: `${pokemon.getName()}.pdf`,
    };
  }
}
