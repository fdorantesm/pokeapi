import { UseCase } from '@/core/domain/decorators/case.decorator';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Executable } from '@/core/domain/use-case.interface';
import { CleanDispatchedEvent } from '@/modules/pokemons/domain/events/clean-dispatched.event';
import { EventBus } from '@nestjs/cqrs';

@UseCase()
export class DeleteAllPokemonsUseCase implements Executable {
  constructor(private readonly eventBus: EventBus) {}
  public async execute(context: Context): Promise<void> {
    this.eventBus.publish(new CleanDispatchedEvent(context));
  }
}
