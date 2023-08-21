import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { Redis } from './redis/redis.module';
import { Maria } from './maria/maria.module';

@Module({
  imports: [HelloModule, Redis, Maria],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
