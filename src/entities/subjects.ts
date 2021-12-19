/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import ProfessorSubjectSchoolEntity from './professorsSubjectsSchools';

@Entity('subjects')
class SubjectEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    subject: string;

  @OneToMany(() => ProfessorSubjectSchoolEntity, (professorSubjectSchool) => professorSubjectSchool.subject)
    professorsSubjectsSchools: ProfessorSubjectSchoolEntity[];
}

export default SubjectEntity;
