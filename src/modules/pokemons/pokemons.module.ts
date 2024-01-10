import { CreatePokemonUseCase } from '@/modules/pokemons/application/use-cases/create-pokemon.use-case';
import { GetPokemonUseCase } from '@/modules/pokemons/application/use-cases/get-pokemon.use-case';
import { GetPokemonsUseCase } from '@/modules/pokemons/application/use-cases/get-pokemons.use-case';
import { UpdatePokemonUseCase } from '@/modules/pokemons/application/use-cases/update-pokemon.use-case';
import { PokemonsController } from '@/modules/pokemons/infrastructure/http/controllers/pokemons.controller';
import { PokemonsModel } from '@/modules/pokemons/infrastructure/persistence/mongodb/models/pokemon.model';
import { PokemonsRepository } from '@/modules/pokemons/infrastructure/persistence/mongodb/repositories/pokemon.repository';
import { PokemonsService } from '@/modules/pokemons/infrastructure/persistence/services/pokemons.service';
import { SharedModule } from '@/modules/shared/shared.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UuidModule } from 'nestjs-uuid';

@Module({
  imports: [MongooseModule.forFeature([PokemonsModel]), UuidModule, SharedModule],
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
  ],
  controllers: [PokemonsController],
})
export class PokemonsModule {}
