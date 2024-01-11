import { cubone } from '#/mocks/pokemons';
import { AbilityDto } from '@/modules/pokemons/infrastructure/http/dtos/ability.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsObject, IsPositive, ValidateNested } from 'class-validator';

export class PokemonAbilityDto {
  @ApiProperty({ type: AbilityDto, example: cubone.abilities.at(0).ability })
  @Type(() => AbilityDto)
  @ValidateNested()
  @IsObject()
  public readonly ability: AbilityDto;

  @ApiProperty({ type: Boolean, example: cubone.abilities.at(0).isHidden })
  @IsBoolean()
  public readonly isHidden: boolean;

  @ApiProperty({ type: Number, example: cubone.abilities.at(0).slot })
  @IsPositive()
  @IsInt()
  public readonly slot: number;
}
