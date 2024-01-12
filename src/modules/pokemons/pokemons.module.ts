import { GeneratePdfCommandHandler } from '@/modules/pokemons/application/commands/generate-pokemon-pdf.command';
import { pokeApiConfigLoader } from '@/modules/pokemons/application/config/pokeapi.config';
import { CleanDispatchedHandler } from '@/modules/pokemons/application/events/clean-dispatched.handler';
import { SyncDispatchedHandler } from '@/modules/pokemons/application/events/sync-dispatched.handler';
import { CreatePokemonUseCase } from '@/modules/pokemons/application/use-cases/create-pokemon.use-case';
import { DeleteAllPokemonsUseCase } from '@/modules/pokemons/application/use-cases/delete-all-pokemons.use-case';
import { DeletePokemonUseCase } from '@/modules/pokemons/application/use-cases/delete-pokemon.use-case';
import { GetPokemonPdfUseCase } from '@/modules/pokemons/application/use-cases/get-pokemon-pdf.use-case';
import { GetPokemonUseCase } from '@/modules/pokemons/application/use-cases/get-pokemon.use-case';
import { GetPokemonsUseCase } from '@/modules/pokemons/application/use-cases/get-pokemons.use-case';
import { SyncPokemonsUseCase } from '@/modules/pokemons/application/use-cases/sync-pokemons.use-case';
import { UpdatePokemonUseCase } from '@/modules/pokemons/application/use-cases/update-pokemon.use-case';
import { PokemonsController } from '@/modules/pokemons/infrastructure/http/controllers/pokemons.controller';
import { PokemonsModel } from '@/modules/pokemons/infrastructure/persistence/mongodb/models/pokemon.model';
import { PokemonsRepository } from '@/modules/pokemons/infrastructure/persistence/mongodb/repositories/pokemon.repository';
import { PokemonsService } from '@/modules/pokemons/infrastructure/persistence/services/pokemons.service';
import { SharedModule } from '@/modules/shared/shared.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { UuidModule } from 'nestjs-uuid';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([PokemonsModel]),
    HttpModule.registerAsync({
      imports: [ConfigModule.forFeature(pokeApiConfigLoader)],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const baseURL = configService.get<string>('pokeApi.baseUrl');
        return {
          baseURL,
        };
      },
    }),
    UuidModule,
    SharedModule,
  ],
  providers: [
    {
      provide: 'PokemonsRepository',
      useClass: PokemonsRepository,
    },
    {
      provide: 'PokemonsService',
      useClass: PokemonsService,
    },
    CreatePokemonUseCase,
    GetPokemonUseCase,
    GetPokemonsUseCase,
    UpdatePokemonUseCase,
    DeletePokemonUseCase,
    SyncPokemonsUseCase,
    DeleteAllPokemonsUseCase,
    SyncDispatchedHandler,
    CleanDispatchedHandler,
    GeneratePdfCommandHandler,
    GetPokemonPdfUseCase,
  ],
  controllers: [PokemonsController],
})
export class PokemonsModule {}
