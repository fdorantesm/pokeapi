import { BaseEntity } from '@/core/domain/base-entity';
import { ResourceProps } from '@/core/domain/interfaces/resource-props.interface';

export abstract class ResourceEntity<T extends ResourceProps> extends BaseEntity<T> {
  protected _isActive: boolean;
  protected _isDeleted: boolean;
  protected _deletedAt: Date;
  protected _createdAt?: Date;
  protected _updatedAt?: Date;

  protected constructor(data: T) {
    super(data);
    this._data = data;
    this._uuid = data.uuid;
    this._isActive = data.isActive;
    this._isDeleted = data.isDeleted;
    this._deletedAt = data.deletedAt;
    this._createdAt = data.createdAt;
    this._updatedAt = data.updatedAt;
  }

  public get uuid(): string {
    return this._uuid;
  }

  public get isActive(): boolean {
    return this._isActive;
  }

  public get isDeleted(): boolean {
    return this._isDeleted;
  }

  public get deletedAt(): Date {
    return this._deletedAt;
  }

  public getTimestamps() {
    return {
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }
}

export type PayloadResourceProps = Pick<ResourceProps, 'uuid'>;
