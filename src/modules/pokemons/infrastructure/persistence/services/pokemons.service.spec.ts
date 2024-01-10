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
    expect(pokemon.getSpecie()).toBeDefined();
    expect(pokemon.getSpecie().name).toBe('cubone');
    expect(pokemon.getBaseExperience()).toBe(64);
    expect(pokemon.getHeight()).toBe(4);
    expect(pokemon.getWeight()).toBe(65);
    expect(pokemon.getAbilities()).toHaveLength(1);
    expect(pokemon.getAbilities()[0].ability.name).toBe('rock-head');
    expect(pokemon.getSprites()).toBeDefined();
    expect(pokemon.getSprites()).toHaveProperty('frontDefault');
    expect(pokemon.getSprites()).toHaveProperty('backDefault');
    expect(pokemon.getSprites()).toHaveProperty('frontShiny');
    expect(pokemon.getSprites()).toHaveProperty('backShiny');
    expect(pokemon.getSprites()).toHaveProperty('frontFemale');
    expect(pokemon.getSprites()).toHaveProperty('backFemale');
    expect(pokemon.getSprites()).toHaveProperty('frontShinyFemale');
    expect(pokemon.getSprites()).toHaveProperty('backShinyFemale');
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
    expect(charmander.getSpecie()).toBeDefined();
    expect(charmander.getSpecie().name).toBe('charmander');
    expect(charmander.getBaseExperience()).toBe(62);
    expect(charmander.getHeight()).toBe(6);
    expect(charmander.getWeight()).toBe(85);
    expect(charmander.getAbilities()).toHaveLength(2);
    expect(charmander.getAbility('blaze')).toBeTruthy();
    expect(charmander.getAbility('solar-power')).toBeTruthy();
    expect(charmander.getSprites()).toBeDefined();
    expect(charmander.getSprites()).toHaveProperty('frontDefault');
    expect(charmander.getSprites()).toHaveProperty('backDefault');
    expect(charmander.getSprites()).toHaveProperty('frontShiny');
    expect(charmander.getSprites()).toHaveProperty('backShiny');
    expect(charmander.getSprites()).toHaveProperty('frontFemale');
    expect(charmander.getSprites()).toHaveProperty('backFemale');
    expect(charmander.getSprites()).toHaveProperty('frontShinyFemale');
    expect(charmander.getSprites()).toHaveProperty('backShinyFemale');
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
      expect(pokemon.getSpecie()).toBeDefined();
      expect(pokemon.getAbilities()).toBeDefined();
    });
  });

  it('should return a paginated list of pokemons', async () => {
    await pokemonsService.createMany(pokemons);
    const allPokemons = await pokemonsService.paginate(
      {},
      {
        limit: 3,
        skip: 0,
      },
    );
    expect(allPokemons).toBeDefined();
    expect(allPokemons).toHaveProperty('docs');
    expect(allPokemons).toHaveProperty('limit');
    expect(allPokemons).toHaveProperty('page');
    expect(allPokemons).toHaveProperty('pages');
    expect(allPokemons).toHaveProperty('total');
    expect(allPokemons.docs).toHaveLength(3);
    allPokemons.docs.map((pokemon) => {
      expect(pokemon.getId()).toBeGreaterThan(0);
      expect(pokemon.getName()).toBeDefined();
      expect(pokemon.getTypes()).toBeDefined();
      expect(pokemon.getStats()).toBeDefined();
      expect(pokemon.getSpecie()).toBeDefined();
      expect(pokemon.getAbilities()).toBeDefined();
    });
  });

  it('should return a paginated list of fire pokemons', async () => {
    await pokemonsService.createMany(pokemons);
    const allPokemons = await pokemonsService.paginate(
      {
        'types.type.name': 'fire',
      },
      {
        limit: 10,
        skip: 0,
      },
    );
    expect(allPokemons).toBeDefined();
    expect(allPokemons).toHaveProperty('docs');
    expect(allPokemons).toHaveProperty('limit');
    expect(allPokemons).toHaveProperty('page');
    expect(allPokemons).toHaveProperty('pages');
    expect(allPokemons).toHaveProperty('total');
    expect(allPokemons.docs).toHaveLength(3);
    allPokemons.docs.map((pokemon) => {
      expect(pokemon.getId()).toBeGreaterThan(0);
      expect(pokemon.getName()).toBeDefined();
      expect(pokemon.getTypes()).toBeDefined();
      expect(pokemon.getStats()).toBeDefined();
      expect(pokemon.getSpecie()).toBeDefined();
      expect(pokemon.getAbilities()).toBeDefined();
      expect(pokemon.isType('fire')).toBeTruthy();
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
