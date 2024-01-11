import { cubone } from '#/mocks/pokemons';
import { PokemonAbilityDto } from '@/modules/pokemons/infrastructure/http/dtos/pokemon-ability.dto';
import { SpecieDto } from '@/modules/pokemons/infrastructure/http/dtos/specie.dto';
import { SpritesDto } from '@/modules/pokemons/infrastructure/http/dtos/sprites.dto';
import { StatsDto } from '@/modules/pokemons/infrastructure/http/dtos/stats.dto';
import { TypesDto } from '@/modules/pokemons/infrastructure/http/dtos/types.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsObject,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CreatePokemonDto {
  @ApiProperty({ example: cubone.id })
  @IsPositive()
  public readonly id: number;

  @ApiProperty({ example: cubone.name })
  @IsString()
  @MaxLength(64)
  public readonly name: string;

  @ApiProperty({ example: cubone.height })
  @IsPositive()
  public readonly height: number;

  @ApiProperty({ example: cubone.weight })
  @IsPositive()
  public readonly weight: number;

  @ApiProperty({ example: cubone.baseExperience })
  @IsPositive()
  public readonly baseExperience: number;

  @ApiProperty({ type: [PokemonAbilityDto], isArray: true, example: cubone.abilities })
  @Type(() => PokemonAbilityDto)
  @ValidateNested({ each: true })
  public readonly abilities: PokemonAbilityDto[];

  @ApiProperty({ type: SpecieDto, example: cubone.species })
  @Type(() => SpecieDto)
  @ValidateNested()
  @IsObject()
  public readonly species: SpecieDto;

  @ApiProperty({ type: [StatsDto], isArray: true, example: cubone.stats })
  @Type(() => StatsDto)
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  public readonly stats: StatsDto[];

  @ApiProperty({ type: [TypesDto], isArray: true, example: cubone.types })
  @Type(() => TypesDto)
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  public readonly types: TypesDto[];

  @ApiProperty({ type: SpritesDto, example: cubone.sprites })
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => SpritesDto)
  public readonly sprites: SpritesDto;

  @ApiProperty({ example: cubone.order })
  @IsPositive()
  @IsInt()
  public readonly order: number;
}
