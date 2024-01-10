import type DataStore = require('nedb-promises');
import { Injectable } from '@nestjs/common';

import { Crud } from '@/core/domain/crud.interface';
import { Entity } from '@/core/domain/entity';
import { BaseRepositoryOptions } from '@/core/infrastructure/repositories/base.repository.options';

@Injectable()
export class BaseMemoryRepository<I, E extends Entity<I>> implements Crud<I, E> {
  constructor(
    private readonly store: DataStore<I>,
    private readonly entityClass: new (data: I) => E,
    private options?: BaseRepositoryOptions,
  ) {
    if (!options || options.softDelete === false) {
      this.options = {
        softDelete: undefined,
      };
    } else if (options.softDelete === true) {
      this.options = {
        softDelete: false,
      };
    }
  }

  public async create(contract: I): Promise<E> {
    const document = await this.store.insert(contract);
    if (document) {
      return this.mapToEntity(document);
    }
  }

  public find(filter?: Partial<I>): Promise<E[]> {
    const q = { ...filter } as any;

    if (this.options?.softDelete !== undefined) {
      q.isDeleted = this.options.softDelete;
    }

    return this.store
      .find(q)
      .then((documents) => documents.map((document) => this.mapToEntity(document)));
  }

  public async findOne(filter?: Partial<I>): Promise<E> {
    const q = { ...filter } as any;

    if (this.options?.softDelete !== undefined) {
      q.isDeleted = this.options.softDelete;
    }

    const doc = await this.store.findOne(q);

    if (doc) {
      return this.mapToEntity(doc);
    }

    return undefined;
  }

  public findById(uuid: string): Promise<E> {
    return this.store
      .findOne({ uuid, isDeleted: false })
      .then((document) => this.mapToEntity(document));
  }

  public trash(filter?: Partial<I>): Promise<E[]> {
    const q = { ...filter } as any;

    if (this.options?.softDelete !== undefined) {
      q.isDeleted = this.options.softDelete;
    }

    return this.store
      .find(q)
      .then((documents) => documents.map((document) => this.mapToEntity(document)));
  }

  public all(filter?: Partial<I>): Promise<E[]> {
    return this.store
      .find(filter)
      .then((documents) => documents.map((document) => this.mapToEntity(document)));
  }

  public scan(filter?: Partial<I>): Promise<E> {
    return this.store.find(filter).then((document) => this.mapToEntity(document as I));
  }

  public update(filter: Partial<I>, payload: Partial<I>): Promise<E> {
    return this.store
      .update(filter, payload, { returnUpdatedDocs: true, multi: false })
      .then((document) => this.mapToEntity(document as I));
  }

  public delete(filter: Partial<I>): Promise<boolean> {
    return this.store.remove(filter, { multi: false }).then((document) => !!document);
  }

  public findManyByUuids(uuids: string[]): Promise<E[]> {
    return this.store
      .find({ uuid: { $in: uuids }, isDeleted: false })
      .then((documents) => documents.map((document) => this.mapToEntity(document)));
  }

  public createMany(contract: I[]): Promise<E[]> {
    return this.store
      .insertMany(contract)
      .then((documents) => documents.map((document) => this.mapToEntity(document)));
  }

  public deleteMany(filter: Partial<I>): Promise<boolean> {
    return this.store.remove(filter, { multi: true }).then((document) => !!document);
  }

  public count(filter: Partial<I>): Promise<number> {
    return this.store.count(filter);
  }

  public softDelete(filter: Partial<I>): Promise<boolean> {
    return this.store.update(filter, { isDeleted: true }).then((document) => !!document);
  }

  public restore(filter: Partial<I>): Promise<E> {
    return this.store
      .updateOne(filter, { isDeleted: false })
      .then((document) => this.mapToEntity(document as I));
  }

  public restoreMany(filter: Partial<I>): Promise<E[]> {
    return this.store
      .updateMany(filter, { isDeleted: false }, { returnUpdatedDocs: true, multi: true })
      .then((documents) => {
        return documents.map((document) => this.mapToEntity(document as I));
      });
  }

  public exists(filter: Partial<I>): Promise<boolean> {
    return this.store.count(filter).then((count) => count > 0);
  }

  public async existsMany(filter: Partial<I>): Promise<string[]> {
    const rows = await this.store.find(filter as I, { uuid: 1 }).exec();

    if (rows.length > 0) {
      return rows.map((row) => row.uuid as string);
    }

    return undefined;
  }

  public async existsByUuids(uuids: string[]): Promise<string[]> {
    const rows = await this.store
      .find(
        {
          uuid: { $in: uuids },
        } as I,
        { uuid: 1 },
      )
      .exec();

    if (rows.length > 0) {
      return rows.map((row) => row.uuid as string);
    }

    return undefined;
  }

  private mapToEntity(data: any): E {
    return new this.entityClass(data);
  }
}
