/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import ProfessorSubjectSchoolEntity from './professorsSubjectsSchools';

@Entity('professors')
class ProfessorEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    professor: string;

  @OneToMany(
    () => ProfessorSubjectSchoolEntity,
    (professorSubjectSchool) => professorSubjectSchool.professor,
  )
    professorsSubjectsSchools: ProfessorSubjectSchoolEntity[];
}

export default ProfessorEntity;
