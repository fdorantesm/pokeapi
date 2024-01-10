import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ConnectionString } from 'connection-string';

import { DatabaseConnection } from '@/core/infrastructure/types';
import { MongooseConnectionFactory } from '@/database/infrastructure/mongodb/factories/mongoose-connection.factory';

@Injectable()
export class MongooseFactory implements MongooseOptionsFactory {
  protected config: DatabaseConnection;

  constructor(private readonly configService: ConfigService) {
    this.config = configService.get<DatabaseConnection>('database');
  }

  public createMongooseOptions(): MongooseModuleOptions {
    const uri = new ConnectionString('', {
      user: this.config.username,
      password: this.config.password,
      protocol: this.config.port ? 'mongodb' : 'mongodb+srv',
      hosts: [{ name: this.config.host, port: this.config.port }],
    }).toString();

    const { createForInstance } = MongooseConnectionFactory;

    const environemnt = this.configService.get<string>('environment.nodeEnv');

    if (environemnt === 'development') {
      mongoose.set('debug', (collectionName, method, query) => {
        Logger.log(JSON.stringify(query), `${collectionName}.${method}`);
      });
    }

    return {
      uri,
      dbName: this.config.database,
      connectionFactory: createForInstance,
    };
  }
}
