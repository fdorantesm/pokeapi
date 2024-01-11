import { Context } from '@/core/domain/interfaces/context.interface';
import { ModelInstance } from '@/core/infrastructure/models/instance';
import { ResourceDocument } from '@/core/infrastructure/models/resource-document';
import { PokemonAbility } from '@/modules/pokemons/domain/interfaces/pokemon-ability';
import { Specie } from '@/modules/pokemons/domain/interfaces/specie.interface';
import { Sprites } from '@/modules/pokemons/domain/interfaces/sprites.interface';
import { Stats } from '@/modules/pokemons/domain/interfaces/stats.interface';
import { Types } from '@/modules/pokemons/domain/interfaces/types.interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'pokemons', timestamps: true, autoIndex: true })
export class PokemonModel extends ResourceDocument {
  @Prop({ unique: true, type: Number, index: true, required: true })
  public id: number;

  @Prop({ type: String, unique: true, index: true, required: true })
  public name: string;

  @Prop({ type: Number, required: true })
  public height: number;

  @Prop({ type: Number, required: true })
  public weight: number;

  @Prop({ type: Number, index: true, required: true })
  public baseExperience: number;

  @Prop({ type: Array, required: true })
  public abilities: PokemonAbility[];

  @Prop({ type: Array, index: true, required: true })
  public species: Specie[];

  @Prop({ type: Array, required: true })
  public stats: Stats[];

  @Prop({ type: Array, index: true, required: true })
  public types: Types[];

  @Prop({ type: Object, required: true })
  public sprites: Sprites;

  @Prop({ type: Object, index: true })
  public context: Context;

  @Prop({ type: Number, index: true, required: true })
  public order: number;
}

export const PokemonSchema = SchemaFactory.createForClass(PokemonModel);

export const PokemonsModel: ModelInstance = {
  name: PokemonModel.name,
  schema: PokemonSchema,
};
