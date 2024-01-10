import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SpritesDto {
  @ApiProperty({ type: String })
  @IsString()
  public readonly backDefault: string;

  @ApiProperty({ type: String })
  @IsString()
  public readonly backFemale: string;

  @ApiProperty({ type: String })
  @IsString()
  public readonly backShiny: string;

  @ApiProperty({ type: String })
  @IsString()
  public readonly backShinyFemale: string;

  @ApiProperty({ type: String })
  @IsString()
  public readonly frontDefault: string;

  @ApiProperty({ type: String })
  @IsString()
  public readonly frontFemale: string;

  @ApiProperty({ type: String })
  @IsString()
  public readonly frontShiny: string;

  @ApiProperty({ type: String })
  @IsString()
  public readonly frontShinyFemale: string;
}
