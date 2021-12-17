import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
class Categories {
  @PrimaryGeneratedColumn()

    id: number;

  @Column()
    category: string;
}

export default Categories;
