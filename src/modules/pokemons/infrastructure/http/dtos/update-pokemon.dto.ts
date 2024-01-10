import { CreatePokemonDto } from '@/modules/pokemons/infrastructure/http/dtos/create-pokemon.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
