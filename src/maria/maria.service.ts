import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fruit } from './entitys/fruit.entity';
import { Repository } from 'typeorm';
@Injectable()
export class MariaService {
  constructor(
    @InjectRepository(Fruit)
    private fruitRepo: Repository<Fruit>,
  ) {}

  findAll(): Promise<Fruit[]> {
    return this.fruitRepo.find();
  }

  findOne(id: number): Promise<Fruit | null> {
    return this.fruitRepo.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.fruitRepo.delete(id);
  }
  insert(name: string, price: number): any {
    return this.fruitRepo.insert({ name: name, price: price });
  }
  update(id: number, name: string, price: number): any {
    return this.fruitRepo.update(id, { name: name, price: price });
  }
}
