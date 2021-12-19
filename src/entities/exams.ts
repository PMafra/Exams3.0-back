/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne,
} from 'typeorm';
import CategoryEntity from './categories';
import ProfessorSubjectSchoolEntity from './professorsSubjectsSchools';

  @Entity('exams')
class ExamEntity {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      title: string;

    @Column()
      link: string;

    @ManyToOne(() => CategoryEntity, (category: any) => (category.exams))
    @JoinColumn({ name: 'category_id' })
      category: CategoryEntity;

    @ManyToOne(() => ProfessorSubjectSchoolEntity, (professorSubjectSchool: any) => (professorSubjectSchool.exams))
    @JoinColumn({ name: 'professor_subject_school_id' })
      professorSubjectSchool: ProfessorSubjectSchoolEntity;
  }

export default ExamEntity;
