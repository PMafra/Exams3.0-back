import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
class CategoryEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    category: string;
}

export default CategoryEntity;
