import { AbilityDto } from '@/modules/pokemons/infrastructure/http/dtos/ability.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsObject, IsPositive, ValidateNested } from 'class-validator';

export class PokemonAbilityDto {
  @ApiProperty({ type: AbilityDto })
  @Type(() => AbilityDto)
  @ValidateNested()
  @IsObject()
  public readonly ability: AbilityDto;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  public readonly isHidden: boolean;

  @ApiProperty({ type: Number })
  @IsPositive()
  @IsInt()
  public readonly slot: number;
}
