import { Context } from '@/core/domain/interfaces/context.interface';

export class CleanDispatchedEvent {
  constructor(public readonly context: Context) {}
}
