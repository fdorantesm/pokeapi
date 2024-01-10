import { PokemonsModel } from '@/modules/pokemons/infrastructure/persistence/mongodb/models/pokemon.model';
import { PokemonsRepository } from '@/modules/pokemons/infrastructure/persistence/mongodb/repositories/pokemon.repository';
import { PokemonsService } from '@/modules/pokemons/infrastructure/persistence/services/pokemons.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([PokemonsModel])],
  providers: [
    {
      provide: 'PokemonsRepository',
      useClass: PokemonsRepository,
    },
    {
      provide: 'PokemonsService',
      useClass: PokemonsService,
    },
  ],
})
export class PokemonsModule {}
