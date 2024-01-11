import { Context } from '@/core/domain/interfaces/context.interface';
import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';

export class GeneratePokemonPdfCommand {
  constructor(
    public readonly context: Context,
    public readonly pokemon: Pokemon,
  ) {}
}
