import { ResourceEntity } from '@/core/domain/resource-entity';
import { PokemonAbility } from '@/modules/pokemons/domain/interfaces/pokemon-ability';
import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';
import { Specie } from '@/modules/pokemons/domain/interfaces/specie.interface';
import { Stats } from '@/modules/pokemons/domain/interfaces/stats.interface';
import { Types } from '@/modules/pokemons/domain/interfaces/types.interface';

export class PokemonEntity extends ResourceEntity<Pokemon> {
  protected _id: number;
  protected _name: string;
  protected _height: number;
  protected _weight: number;
  protected _baseExperience: number;
  protected _stats: Stats[];
  protected _types: Types[];
  protected _species: Specie[];
  protected _abilities: PokemonAbility[];

  constructor(data: Pokemon) {
    super(data);
    this._id = data.id;
    this._name = data.name;
    this._height = data.height;
    this._weight = data.weight;
    this._baseExperience = data.baseExperience;
    this._stats = data.stats;
    this._types = data.types;
    this._species = data.species;
    this._abilities = data.abilities;
  }

  public static create(data: Pokemon): PokemonEntity {
    return new PokemonEntity(data);
  }

  public getId(): number {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }

  public updateName(name: string): void {
    this._name = name;
  }

  public getHeight(): number {
    return this._height;
  }

  public getWeight(): number {
    return this._weight;
  }

  public getBaseExperience(): number {
    return this._baseExperience;
  }

  public getStats(): Stats[] {
    return this._stats;
  }

  public getStat(name: string): Stats | undefined {
    return this._stats.find((stat) => stat.stat.name === name);
  }

  public getTypes(): Types[] {
    return this._types;
  }

  public isType(name: string): boolean {
    return this._types.some((type) => type.type.name === name);
  }

  public getSpecies(): Specie[] {
    return this._species;
  }

  public getSpecie(name: string): Specie {
    return this._species.find((specie) => specie.name === name);
  }

  public is(name: string): boolean {
    return this._name === name;
  }

  public getAbilities(): PokemonAbility[] {
    return this._abilities;
  }

  public getAbility(name: string): PokemonAbility | undefined {
    return this._abilities.find((ability) => ability.ability.name === name);
  }

  public toJson(): Partial<Pokemon> {
    return {
      id: this._id,
      name: this._name,
      height: this._height,
      weight: this._weight,
      baseExperience: this._baseExperience,
      stats: this._stats,
      types: this._types,
      species: this._species,
      abilities: this._abilities,
    };
  }
}