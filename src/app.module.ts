import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true, // load modules instead of the entities array.
      synchronize: true, // ensures that typeorm entities will be synched with db, but should be disabled in prod.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
