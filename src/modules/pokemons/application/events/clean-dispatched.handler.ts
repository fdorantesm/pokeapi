import { InjectService } from '@/core/domain/decorators/inject-service.decorator';
import { CleanDispatchedEvent } from '@/modules/pokemons/domain/events/clean-dispatched.event';
import { PokemonsService } from '@/modules/pokemons/domain/interfaces/pokemons.service';
import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CleanDispatchedEvent)
export class CleanDispatchedHandler implements IEventHandler<CleanDispatchedEvent> {
  constructor(
    @InjectService('PokemonsService')
    private readonly service: PokemonsService,
  ) {}

  public async handle(event: CleanDispatchedEvent): Promise<void> {
    await this.service.deleteMany({});
    Logger.log(`Pokemons deleted`, event.context.requestId);
  }
}
