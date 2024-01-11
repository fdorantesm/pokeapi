import { Context } from '@/core/domain/interfaces/context.interface';

export class SyncDispatchedEvent {
  constructor(public readonly context: Context) {}
}
