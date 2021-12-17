/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

  @Entity('exams')
class ExamEntity {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      title: string;

    @Column()
      link: string;
  }

export default ExamEntity;
