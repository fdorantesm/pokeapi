import { Json } from '@/core/types/general/json.type';

export type QueryParsedOptions = {
  limit?: number;
  skip?: number;
  sort?: Json | string;
};
