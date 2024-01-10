export interface Executable {
  execute(...params: unknown[]): Promise<unknown>;
}
