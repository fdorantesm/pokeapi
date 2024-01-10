import { Stat } from '@/modules/pokemons/domain/interfaces/stat.interface';

export interface Stats {
  baseStat: number;
  effort: number;
  stat: Stat;
}
