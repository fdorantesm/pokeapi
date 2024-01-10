export abstract class Entity<T> {
  protected _data: T;

  protected constructor(data: T) {
    this._data = data;
  }

  public _toJson() {
    return {
      ...this._data,
    };
  }

  public _toObject() {
    return {
      ...this._data,
    };
  }
}
