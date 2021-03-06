/* eslint-disable @typescript-eslint/no-explicit-any */
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

    @ManyToOne(() => CategoryEntity, (category: any) => (category.exams), {
      eager: true,
    })
    @JoinColumn({ name: 'category_id' })
      category: CategoryEntity;

    @ManyToOne(
      () => ProfessorSubjectSchoolEntity,
      (professorSubjectSchool: any) => (professorSubjectSchool.exams),
      {
        eager: true,
      },
    )
    @JoinColumn({ name: 'professor_subject_school_id' })
      professorSubjectSchool: ProfessorSubjectSchoolEntity;
  }

export default ExamEntity;
