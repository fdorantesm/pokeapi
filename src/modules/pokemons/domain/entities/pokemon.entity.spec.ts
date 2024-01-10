import { cubone } from '#/mocks/pokemons';
import { PokemonEntity } from '@/modules/pokemons/domain/entities/pokemon.entity';

describe('PokemonEntity', () => {
  const pokemon = PokemonEntity.create(cubone);

  it('should be defined', () => {
    expect(pokemon).toBeDefined();
  });

  it('should be a PokemonEntity', () => {
    expect(pokemon).toBeInstanceOf(PokemonEntity);
  });

  it('should have uuid', () => {
    expect(pokemon).toHaveProperty('uuid');
  });

  it('should have id', () => {
    expect(pokemon.getId()).toBeTruthy();
  });

  it('should be a cubone', () => {
    expect(pokemon.is('cubone')).toBeTruthy();
  });

  it(`shouldn't be pikachu`, () => {
    expect(pokemon.is('pikachu')).toBeFalsy();
  });

  it('should be a ground type', () => {
    expect(pokemon.isType('ground')).toBeTruthy();
  });

  describe('PokemonEntity::getStats', () => {
    it('should be defined', () => {
      expect(pokemon.getStats()).toBeDefined();
    });

    it('should be a array', () => {
      expect(pokemon.getStats()).toBeInstanceOf(Array);
    });

    it('should be a array of Stats', () => {
      expect(pokemon.getStat('hp').baseStat).toBe(50);
    });
  });

  describe('PokemonEntity::getTypes', () => {
    it('should be defined', () => {
      expect(pokemon.getTypes()).toBeDefined();
    });

    it('should be a array', () => {
      expect(pokemon.getTypes()).toBeInstanceOf(Array);
    });

    it('should be a array of Types', () => {
      expect(pokemon.getTypes()[0].type.name).toBe('ground');
    });
  });

  describe('PokemonEntity::getSpecies', () => {
    it('should be defined', () => {
      expect(pokemon.getSpecie()).toBeDefined();
    });

    it('should be an object', () => {
      expect(pokemon.getSpecie()).toBeInstanceOf(Object);
    });

    it('should be a array of Species', () => {
      expect(pokemon.getSpecie().name).toBe('cubone');
    });
  });

  describe('PokemonEntity::getAbilities', () => {
    it('should be defined', () => {
      expect(pokemon.getAbilities()).toBeDefined();
    });

    it('should be a array', () => {
      expect(pokemon.getAbilities()).toBeInstanceOf(Array);
    });

    it('should be a array of Abilities', () => {
      expect(pokemon.getAbilities()[0].ability.name).toBe('rock-head');
    });
  });
});
