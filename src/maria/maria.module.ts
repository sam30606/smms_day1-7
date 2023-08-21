import { Module } from '@nestjs/common';
import { MariaController } from './maria.controller';
import { MariaService } from './maria.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fruit } from './entitys/fruit.entity';
@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Fruit])],
  controllers: [MariaController],
  providers: [MariaService],
})
export class Maria {}
