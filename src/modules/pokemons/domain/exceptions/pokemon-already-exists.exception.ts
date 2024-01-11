import { ConflictException } from '@nestjs/common';

export class PokemonAlreadyExistsException extends ConflictException {
  constructor(message: string) {
    super(message, {
      description: 'pokemon_already_exists',
    });
  }
}
