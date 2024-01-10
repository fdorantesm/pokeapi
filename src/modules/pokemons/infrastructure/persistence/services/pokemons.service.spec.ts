import { cubone, pokemons } from '#/mocks/pokemons';
import { PokemonsMemoryRepository } from '@/modules/pokemons/infrastructure/persistence/memory/repositories/pokemons.repository';
import { PokemonsService } from '@/modules/pokemons/infrastructure/persistence/services/pokemons.service';
import { Test } from '@nestjs/testing';

describe('PokemonsService', () => {
  let pokemonsService: PokemonsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PokemonsService,
        {
          provide: 'PokemonsRepository',
          useClass: PokemonsMemoryRepository,
        },
      ],
    }).compile();

    pokemonsService = moduleRef.get<PokemonsService>(PokemonsService);
  });

  it('should create a cubone', async () => {
    const pokemon = await pokemonsService.create(cubone);
    expect(pokemon).toBeDefined();
    expect(pokemon.getId()).toBe(104);
    expect(pokemon.getName()).toBe('cubone');
    expect(pokemon.getTypes()).toHaveLength(1);
    expect(pokemon.isType('ground')).toBeTruthy();
    expect(pokemon.getStat('hp').baseStat).toBe(50);
    expect(pokemon.getStat('attack').baseStat).toBe(50);
    expect(pokemon.getStat('defense').baseStat).toBe(95);
    expect(pokemon.getStat('special-attack').baseStat).toBe(40);
    expect(pokemon.getStat('special-defense').baseStat).toBe(50);
    expect(pokemon.getStat('speed').baseStat).toBe(35);
    expect(pokemon.getSpecies()).toBeDefined();
    expect(pokemon.getSpecies()).toHaveLength(1);
    expect(pokemon.getSpecie('cubone')).toBeTruthy();
    expect(pokemon.getBaseExperience()).toBe(64);
    expect(pokemon.getHeight()).toBe(4);
    expect(pokemon.getWeight()).toBe(65);
    expect(pokemon.getAbilities()).toHaveLength(1);
    expect(pokemon.getAbilities()[0].ability.name).toBe('rock-head');
  });

  it('should find a charmander', async () => {
    await pokemonsService.create(pokemons[3]);
    const charmander = await pokemonsService.findOne({ id: 4 });
    expect(charmander).toBeDefined();
    expect(charmander.getId()).toBe(4);
    expect(charmander.getName()).toBe('charmander');
    expect(charmander.getTypes()).toHaveLength(1);
    expect(charmander.isType('fire')).toBeTruthy();
    expect(charmander.getStat('hp').baseStat).toBe(39);
    expect(charmander.getStat('attack').baseStat).toBe(52);
    expect(charmander.getStat('defense').baseStat).toBe(43);
    expect(charmander.getStat('special-attack').baseStat).toBe(60);
    expect(charmander.getStat('special-defense').baseStat).toBe(50);
    expect(charmander.getStat('speed').baseStat).toBe(65);
    expect(charmander.getSpecies()).toBeDefined();
    expect(charmander.getSpecies()).toHaveLength(1);
    expect(charmander.getSpecie('charmander')).toBeTruthy();
    expect(charmander.getBaseExperience()).toBe(62);
    expect(charmander.getHeight()).toBe(6);
    expect(charmander.getWeight()).toBe(85);
    expect(charmander.getAbilities()).toHaveLength(2);
    expect(charmander.getAbility('blaze')).toBeTruthy();
    expect(charmander.getAbility('solar-power')).toBeTruthy();
  });

  it('should return undefined when not found a psyduck', async () => {
    const psyduck = await pokemonsService.findOne({ id: 54 });
    expect(psyduck).toBeUndefined();
  });

  it('should return all pokemons', async () => {
    await pokemonsService.createMany(pokemons);
    const allPokemons = await pokemonsService.find();
    expect(allPokemons).toBeDefined();
    expect(allPokemons).toHaveLength(10);
    allPokemons.map((pokemon) => {
      expect(pokemon.getId()).toBeGreaterThan(0);
      expect(pokemon.getName()).toBeDefined();
      expect(pokemon.getTypes()).toBeDefined();
      expect(pokemon.getStats()).toBeDefined();
      expect(pokemon.getSpecies()).toBeDefined();
      expect(pokemon.getAbilities()).toBeDefined();
    });
  });

  it('should remove ivisaur', async () => {
    await pokemonsService.createMany(pokemons);

    const ivisaur = await pokemonsService.findOne({ id: 2 });
    expect(ivisaur).toBeDefined();

    await pokemonsService.delete({ id: 2 });

    const deletedIvisaur = await pokemonsService.findOne({ id: 2 });
    expect(deletedIvisaur).toBeUndefined();
  });

  it('should update a pokemon', async () => {
    const newName = 'vamo a calmarno';
    await pokemonsService.createMany(pokemons);

    const squirtle = await pokemonsService.findOne({ id: 7 });
    expect(squirtle).toBeDefined();
    expect(squirtle.getName()).toBe('squirtle');

    squirtle.updateName(newName);

    const updatedSquirtle = await pokemonsService.update({ id: 7 }, squirtle.toJson());

    expect(updatedSquirtle).toBeDefined();
    expect(updatedSquirtle.getName()).toBe(newName);
  });
});
