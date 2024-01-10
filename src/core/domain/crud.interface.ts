export interface Crud<I, E> {
  create(role: I): Promise<E>;
  find(filter?: Partial<I>): Promise<E[]>;
  findOne(filter?: Partial<I>): Promise<E>;
  findById(uuid: string): Promise<E>;
  trash?(filter?: Partial<I>): Promise<E[]>;
  all?(filter?: Partial<I>): Promise<E[]>;
  scan?(filter?: Partial<I>): Promise<E>;
  update(filter: Partial<I>, payload: Partial<I>): Promise<E>;
  delete(filter: Partial<I>): Promise<boolean>;
  findManyByUuids?(uuids: string[]): Promise<E[]>;
  createMany?(contract: I[]): Promise<E[]>;
  deleteMany?(filter: Partial<I>): Promise<boolean>;
  count?(filter: Partial<I>): Promise<number>;
  softDelete?(filter: Partial<I>): Promise<boolean>;
  restore?(filter: Partial<I>): Promise<E>;
  restoreMany?(filter: Partial<I>): Promise<E[]>;
  exists?(filter: Partial<I>): Promise<boolean>;
  existsMany?(filter: Partial<I>): Promise<string[]>;
  existsByUuids?(uuids: string[]): Promise<string[]>;
}
