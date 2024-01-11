import { UseCase } from '@/core/domain/decorators/case.decorator';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Executable } from '@/core/domain/use-case.interface';
import { SyncDispatchedEvent } from '@/modules/pokemons/domain/events/sync-dispatched.event';
import { Logger } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

@UseCase()
export class SyncPokemonsUseCase implements Executable {
  constructor(private readonly eventBus: EventBus) {}

  public async execute(context: Context): Promise<void> {
    this.eventBus.publish(new SyncDispatchedEvent(context));
    Logger.log(`Sync dispatched`, context.requestId);
    return undefined;
  }
}
