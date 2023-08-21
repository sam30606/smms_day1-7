import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fruit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
