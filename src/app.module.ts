import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './modules/user/model/types';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [UserModel],
      synchronize: false,
    }),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '/.env' }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'src/schema.gql',
      sortSchema: true,
      driver: ApolloDriver,
    }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
