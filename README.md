# 作業 - 7. 使用 TypeORM 操作 SQL server

## Run Command

```
sudo docker compose up
```

## fruit.entity.ts

```
@Entity()
export class Fruit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'decimal' })
  price: number;
}
```

## maria.service.ts

```
@Injectable()
export class MariaService {
  constructor(
    @InjectRepository(Fruit)
    private fruitRepo: Repository<Fruit>,
  ) {}

  async findAll(): Promise<Fruit[]> {
    return await this.fruitRepo.find();
  }

  async findOne({
    id = null,
    name = null,
    price = null,
  }: {
    id?: number | null;
    name?: string | null;
    price?: number | null;
  }): Promise<Fruit | null> {
    return await this.fruitRepo.findOneBy({
      id: id,
      name: name,
      price: price,
    });
  }

  async delete(id: number): Promise<void> {
    await this.fruitRepo.delete(id);
  }

  async insert(name: string, price: number): Promise<object> {
    if (this.findOne({ name: name }))
      return { status: 'error', msg: 'name exist' };
    else return await this.fruitRepo.insert({ name: name, price: price });
  }
  async update(id: number, name: string, price: number): Promise<object> {
    return await this.fruitRepo.update(id, { name: name, price: price });
  }
}

```

## maria.module.ts

```
@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Fruit])],
  controllers: [MariaController],
  providers: [MariaService],
})
export class Maria {}

```

## app.module.ts

```
@Module({
  imports: [HelloModule, Redis, Maria],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```
