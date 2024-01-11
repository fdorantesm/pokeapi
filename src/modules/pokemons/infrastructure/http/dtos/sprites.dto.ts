import { cubone } from '#/mocks/pokemons';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';

export class SpritesDto {
  @ApiProperty({ type: String, example: cubone.sprites.backDefault })
  @IsUrl()
  public readonly backDefault: string;

  @ApiPropertyOptional({ type: String, example: cubone.sprites.backFemale })
  @IsUrl()
  @IsOptional()
  public readonly backFemale?: string;

  @ApiPropertyOptional({ type: String, example: cubone.sprites.backShiny })
  @IsUrl()
  @IsOptional()
  public readonly backShiny?: string;

  @ApiPropertyOptional({ type: String, example: cubone.sprites.backShinyFemale })
  @IsUrl()
  @IsOptional()
  public readonly backShinyFemale?: string;

  @ApiProperty({ type: String, example: cubone.sprites.frontDefault })
  @IsUrl()
  public readonly frontDefault: string;

  @ApiPropertyOptional({ type: String, example: cubone.sprites.frontFemale })
  @IsUrl()
  @IsOptional()
  public readonly frontFemale?: string;

  @ApiPropertyOptional({ type: String, example: cubone.sprites.frontShiny })
  @IsUrl()
  @IsOptional()
  public readonly frontShiny?: string;

  @ApiPropertyOptional({ type: String, example: cubone.sprites.frontShinyFemale })
  @IsUrl()
  @IsOptional()
  public readonly frontShinyFemale?: string;
}
