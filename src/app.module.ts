import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { ConfigModule } from '@nestjs/config';
import { Redis } from './redis/redis.module';
import { Maria } from './maria/maria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fruit } from './maria/entitys/fruit.entity';
@Module({
  imports: [
    HelloModule,
    Redis,
    Maria,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MARIADB_HOST,
      port: 3306,
      username: process.env.MARIADB_USERNAME,
      password: process.env.MARIADB_PASSWORD,
      database: 'db',
      entities: [Fruit],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
