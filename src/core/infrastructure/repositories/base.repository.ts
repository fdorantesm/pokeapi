import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Crud } from '@/core/domain/crud.interface';
import { Entity } from '@/core/domain/entity';
import { BaseRepositoryOptions } from '@/core/infrastructure/repositories/base.repository.options';

@Injectable()
export class BaseRepository<I, E extends Entity<I>> implements Crud<I, E> {
  constructor(
    private readonly model: Model<any>,
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

  private mapToEntity(data: I): E {
    return new this.entityClass(data);
  }

  public async findById(uuid: string): Promise<E> {
    const row = await this.model.findOne({ uuid }).exec();
    if (row) {
      return this.mapToEntity(row.toJSON() as I);
    }
  }

  public async findManyByUuids?(uuids: string[]): Promise<E[]> {
    const rows = await this.model.find({ uuid: { $in: uuids } }).exec();
    return rows.map((row) => this.mapToEntity(row.toJSON() as I));
  }

  public async createMany?(contract: I[]): Promise<E[]> {
    const rows = await this.model.create(contract);
    return rows.map((row) => this.mapToEntity(row.toJSON() as I));
  }

  public async findOne(filter: Partial<I>): Promise<E> {
    const q = { ...filter } as any;

    if (this.options?.softDelete !== undefined) {
      q.isDeleted = this.options.softDelete;
    }

    const row = await this.model.findOne(q).exec();

    if (row) {
      return this.mapToEntity(row.toJSON() as I);
    }

    return undefined;
  }

  public async scan(filter: Partial<I>): Promise<E> {
    const row = await this.model.findOne({ ...filter } as I).exec();
    if (row) {
      return this.mapToEntity(row.toJSON() as I);
    }

    return undefined;
  }

  public async trash(filter: Partial<I>): Promise<E[]> {
    const q = { ...filter } as any;

    if (this.options?.softDelete !== undefined) {
      q.isDeleted = this.options.softDelete;
    }

    const rows = await this.model.find(q as I).exec();
    return rows.map((row) => this.mapToEntity(row.toJSON() as I));
  }

  public async all(filter?: Partial<I>): Promise<E[]> {
    const rows = await this.model.find(filter as I).exec();
    return rows.map((row) => this.mapToEntity(row.toJSON() as I));
  }

  public async find(filter?: Partial<I>): Promise<E[]> {
    const q = { ...filter } as any;

    if (this.options?.softDelete !== undefined) {
      q.isDeleted = this.options.softDelete;
    }

    const rows = await this.model.find(q as I).exec();
    return rows.map((row) => this.mapToEntity(row.toJSON() as I));
  }

  public async create(data: I): Promise<E> {
    const row = await this.model.create(data);
    if (row) {
      return this.mapToEntity(row.toJSON() as I);
    }
  }

  public async update(filter: Partial<I>, data: I): Promise<E> {
    const updated = await this.model
      .updateOne(filter as I, data)
      .exec()
      .then(() => this.findOne(filter));

    if (updated) {
      return updated;
    }

    return undefined;
  }

  public async delete(filter: Partial<I>): Promise<boolean> {
    const deleted = await this.model.deleteOne(filter as I).exec();
    return deleted.deletedCount > 0;
  }

  public async deleteMany(filter: Partial<I>): Promise<boolean> {
    const deleted = await this.model.deleteMany(filter as I).exec();
    return deleted.deletedCount > 0;
  }

  public async count(filter: Partial<I>): Promise<number> {
    return this.model.countDocuments(filter as I).exec();
  }

  public async softDelete(filter: Partial<I>): Promise<boolean> {
    const deleted = await this.model
      .updateOne(filter as I, { deletedAt: new Date(), isDeleted: true })
      .exec();

    return deleted.modifiedCount > 0;
  }

  public async restore(filter: Partial<I>): Promise<E> {
    const deleted = await this.model
      .updateOne(filter as I, { deletedAt: undefined, isDeleted: false })
      .exec();

    if (deleted.modifiedCount > 0) {
      return this.findOne(filter);
    }

    return undefined;
  }

  public async restoreMany(filter: Partial<I>): Promise<E[]> {
    const deleted = await this.model
      .updateMany(filter as I, { deletedAt: undefined, isDeleted: false })
      .exec();

    if (deleted.modifiedCount > 0) {
      return this.find(filter);
    }

    return undefined;
  }

  public async exists(filter: Partial<I>): Promise<boolean> {
    const row = await this.model
      .findOne(filter as I)
      .select('uuid')
      .exec();
    return Boolean(row);
  }

  public async existsMany(filter: Partial<I>): Promise<string[]> {
    const rows = await this.model
      .find(filter as I)
      .select('uuid')
      .exec();

    if (rows.length > 0) {
      return rows.map((row) => row.uuid);
    }

    return undefined;
  }

  public async existsByUuids(uuids: string[]): Promise<string[]> {
    const rows = await this.model
      .find({ uuid: { $in: uuids } })
      .select('uuid')
      .exec();

    if (rows.length > 0) {
      return rows.map((row) => row.uuid);
    }

    return undefined;
  }
}
