import { Pokemon } from '@/modules/pokemons/domain/interfaces/pokemon.interface';

export const cubone: Pokemon = {
  uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a0a',
  id: 104,
  name: 'cubone',
  height: 4,
  weight: 65,
  baseExperience: 64,
  stats: [
    {
      baseStat: 50,
      effort: 0,
      stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
    },
    {
      baseStat: 50,
      effort: 0,
      stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
    },
    {
      baseStat: 95,
      effort: 1,
      stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
    },
    {
      baseStat: 40,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      baseStat: 50,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      baseStat: 35,
      effort: 0,
      stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'ground',
        url: 'https://pokeapi.co/api/v2/type/5/',
      },
    },
  ],
  species: {
    name: 'cubone',
    url: 'https://pokeapi.co/api/v2/pokemon-species/104/',
  },

  abilities: [
    {
      ability: {
        name: 'rock-head',
        url: 'https://pokeapi.co/api/v2/ability/69/',
      },
      isHidden: false,
      slot: 1,
    },
  ],
};

export const pokemons = [
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a0a',
    id: 1,
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    baseExperience: 64,
    stats: [
      {
        baseStat: 45,
        effort: 0,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 49,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 49,
        effort: 0,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 65,
        effort: 1,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 65,
        effort: 0,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 45,
        effort: 0,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
    types: [
      { slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
      { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } },
    ],
  },
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a0b',
    id: 2,
    name: 'ivysaur',
    height: 10,
    weight: 130,
    baseExperience: 142,
    stats: [
      {
        baseStat: 60,
        effort: 0,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 62,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 63,
        effort: 0,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 80,
        effort: 1,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 80,
        effort: 1,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 60,
        effort: 0,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon-species/2/' },
    types: [
      { slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
      { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } },
    ],
  },
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a0c',
    id: 3,
    name: 'venusaur',
    height: 20,
    weight: 1000,
    baseExperience: 236,
    stats: [
      {
        baseStat: 80,
        effort: 0,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 82,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 83,
        effort: 0,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 100,
        effort: 2,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 100,
        effort: 1,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 80,
        effort: 0,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon-species/3/' },
    types: [
      { slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
      { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } },
    ],
  },
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a0d',
    id: 4,
    name: 'charmander',
    height: 6,
    weight: 85,
    baseExperience: 62,
    stats: [
      {
        baseStat: 39,
        effort: 0,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 52,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 43,
        effort: 0,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 60,
        effort: 0,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 50,
        effort: 0,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 65,
        effort: 1,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'blaze', url: 'https://pokeapi.co/api/v2/ability/66/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'solar-power', url: 'https://pokeapi.co/api/v2/ability/94/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon-species/4/' },
    types: [{ slot: 1, type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' } }],
  },
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a0e',
    id: 5,
    name: 'charmeleon',
    height: 11,
    weight: 190,
    baseExperience: 142,
    stats: [
      {
        baseStat: 58,
        effort: 0,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 64,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 58,
        effort: 0,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 80,
        effort: 1,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 65,
        effort: 0,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 80,
        effort: 1,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'blaze', url: 'https://pokeapi.co/api/v2/ability/66/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'solar-power', url: 'https://pokeapi.co/api/v2/ability/94/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon-species/5/' },
    types: [{ slot: 1, type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' } }],
  },
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a0f',
    id: 6,
    name: 'charizard',
    height: 17,
    weight: 905,
    baseExperience: 240,
    stats: [
      {
        baseStat: 78,
        effort: 0,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 84,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 78,
        effort: 0,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 109,
        effort: 3,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 85,
        effort: 0,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 100,
        effort: 0,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'blaze', url: 'https://pokeapi.co/api/v2/ability/66/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'solar-power', url: 'https://pokeapi.co/api/v2/ability/94/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon-species/6/' },
    types: [
      { slot: 1, type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' } },
      { slot: 2, type: { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' } },
    ],
  },
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a10',
    id: 7,
    name: 'squirtle',
    height: 5,
    weight: 90,
    baseExperience: 63,
    stats: [
      {
        baseStat: 44,
        effort: 0,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 48,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 65,
        effort: 1,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 50,
        effort: 0,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 64,
        effort: 0,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 43,
        effort: 0,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'torrent', url: 'https://pokeapi.co/api/v2/ability/67/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'rain-dish', url: 'https://pokeapi.co/api/v2/ability/44/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon-species/7/' },
    types: [{ slot: 1, type: { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' } }],
  },
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a11',
    id: 8,
    name: 'wartortle',
    height: 10,
    weight: 225,
    baseExperience: 142,
    stats: [
      {
        baseStat: 59,
        effort: 0,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 63,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 80,
        effort: 1,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 65,
        effort: 0,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 80,
        effort: 1,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 58,
        effort: 0,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'torrent', url: 'https://pokeapi.co/api/v2/ability/67/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'rain-dish', url: 'https://pokeapi.co/api/v2/ability/44/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon-species/8/' },
    types: [{ slot: 1, type: { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' } }],
  },
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a12',
    id: 9,
    name: 'blastoise',
    height: 16,
    weight: 855,
    baseExperience: 239,
    stats: [
      {
        baseStat: 79,
        effort: 0,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 83,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 100,
        effort: 3,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 85,
        effort: 0,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 105,
        effort: 0,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 78,
        effort: 0,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'torrent', url: 'https://pokeapi.co/api/v2/ability/67/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'rain-dish', url: 'https://pokeapi.co/api/v2/ability/44/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon-species/9/' },
    types: [{ slot: 1, type: { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' } }],
  },
  {
    uuid: '0a2a0a0a-0a0a-0a0a-0a0a-0a0a0a0a0a13',
    id: 10,
    name: 'caterpie',
    height: 3,
    weight: 29,
    baseExperience: 39,
    stats: [
      {
        baseStat: 45,
        effort: 1,
        stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
      },
      {
        baseStat: 30,
        effort: 0,
        stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
      },
      {
        baseStat: 35,
        effort: 0,
        stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
      },
      {
        baseStat: 20,
        effort: 0,
        stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
      },
      {
        baseStat: 20,
        effort: 0,
        stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
      },
      {
        baseStat: 45,
        effort: 0,
        stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
      },
    ],
    abilities: [
      {
        ability: { name: 'shield-dust', url: 'https://pokeapi.co/api/v2/ability/19/' },
        isHidden: false,
        slot: 1,
      },
      {
        ability: { name: 'run-away', url: 'https://pokeapi.co/api/v2/ability/50/' },
        isHidden: true,
        slot: 3,
      },
    ],
    species: { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon-species/10/' },
    types: [{ slot: 1, type: { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' } }],
  },
];
