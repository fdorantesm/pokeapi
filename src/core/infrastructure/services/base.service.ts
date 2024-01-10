import { Injectable } from '@nestjs/common';

import { Crud } from '@/core/domain/crud.interface';
import { Entity } from '@/core/domain/entity';
import { BaseProps } from '@/core/domain/interfaces/base-props.interface';

@Injectable()
export class BaseService<I extends BaseProps, E extends Entity<I>> implements Crud<I, E> {
  constructor(private readonly repository: Crud<I, E>) {}

  public findOne(filter: Partial<I>): Promise<E> {
    return this.repository.findOne(filter);
  }

  public find(filter?: Partial<I>): Promise<E[]> {
    return this.repository.find(filter);
  }

  public create(data: I): Promise<E> {
    return this.repository.create(data);
  }

  public async update(filter: Partial<I>, data: Partial<I>): Promise<E> {
    return this.repository.update(filter, data);
  }

  public async delete(filter: Partial<I>): Promise<boolean> {
    return this.repository.delete(filter);
  }

  public async findById(uuid: string): Promise<E> {
    return this.repository.findById(uuid);
  }

  public async findManyByUuids(uuids: string[]): Promise<E[]> {
    return this.repository.findManyByUuids(uuids);
  }

  public async createMany(contract: I[]): Promise<E[]> {
    return this.repository.createMany(contract);
  }

  public async deleteMany(filter: Partial<I>): Promise<boolean> {
    return this.repository.deleteMany(filter);
  }

  public async count(filter: Partial<I>): Promise<number> {
    return this.repository.count(filter);
  }

  public async softDelete(filter: Partial<I>): Promise<boolean> {
    return this.repository.softDelete(filter);
  }

  public async restore(filter: Partial<I>): Promise<E> {
    return this.repository.restore(filter);
  }

  public async restoreMany(filter: Partial<I>): Promise<E[]> {
    return this.repository.restoreMany(filter);
  }

  public async exists(filter: Partial<I>): Promise<boolean> {
    return this.repository.exists(filter);
  }

  public async existsMany(filter: Partial<I>): Promise<string[]> {
    return this.repository.existsMany(filter);
  }

  public async existsByUuids(uuids: string[]): Promise<string[]> {
    return this.repository.existsByUuids(uuids);
  }
}
