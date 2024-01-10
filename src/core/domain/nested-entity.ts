export abstract class NestedDomainEntity<T> {
  protected constructor(protected data: T) {}

  public toJson(): Partial<T> {
    return this.data;
  }

  public toObject(): T {
    return this.data;
  }

  public update(data: Partial<T>): void {
    this.data = { ...this.data, ...data };
  }
}
