import { ModelInstance } from '@/core/infrastructure/models/instance';
import { ResourceDocument } from '@/core/infrastructure/models/resource-document';
import { Json } from '@/core/infrastructure/types';
import { PokemonAbility } from '@/modules/pokemons/domain/interfaces/pokemon-ability';
import { Specie } from '@/modules/pokemons/domain/interfaces/specie.interface';
import { Stats } from '@/modules/pokemons/domain/interfaces/stats.interface';
import { Types } from '@/modules/pokemons/domain/interfaces/types.interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'pokemons', timestamps: true, autoIndex: true })
export class PokemonModel extends ResourceDocument {
  @Prop({ unique: true, type: Number, index: true })
  public id: number;

  @Prop({ type: String, unique: true, index: true })
  public name: string;

  @Prop({ type: Number })
  public height: number;

  @Prop({ type: Number })
  public weight: number;

  @Prop({ type: Number, index: true })
  public baseExperience: number;

  @Prop({ type: Array })
  public abilities: PokemonAbility[];

  @Prop({ type: Array, index: true })
  public species: Specie[];

  @Prop({ type: Array })
  public stats: Stats[];

  @Prop({ type: Array, index: true })
  public types: Types[];

  @Prop({ type: Object })
  public context: Json;
}

export const PokemonSchema = SchemaFactory.createForClass(PokemonModel);

export const PokemonsModel: ModelInstance = {
  name: PokemonModel.name,
  schema: PokemonSchema,
};
