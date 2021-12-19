/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import ExamEntity from './exams';

@Entity('categories')
class CategoryEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    category: string;

  @OneToMany(() => ExamEntity, (exam) => exam.category)
    exams: ExamEntity[];
}

export default CategoryEntity;
