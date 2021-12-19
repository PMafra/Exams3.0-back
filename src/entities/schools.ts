/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import ProfessorSubjectSchoolEntity from './professorsSubjectsSchools';

@Entity('schools')
class SchoolEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    school: string;

  @OneToMany(() => ProfessorSubjectSchoolEntity, (professorSubjectSchool) => professorSubjectSchool.school)
    professorsSubjectsSchools: ProfessorSubjectSchoolEntity[];
}

export default SchoolEntity;
