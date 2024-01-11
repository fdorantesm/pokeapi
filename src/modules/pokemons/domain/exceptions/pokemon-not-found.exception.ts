import { NotFoundException } from '@nestjs/common';

export class PokemonNotFoundException extends NotFoundException {
  constructor(message) {
    super(message, {
      description: 'pokemon_not_found',
    });
  }
}
