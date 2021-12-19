/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne,
} from 'typeorm';
import SchoolEntity from './schools';
import ProfessorEntity from './professors';
import SubjectEntity from './subjects';
import ExamsEntity from './exams';

@Entity('professors_subjects_schools')
class ProfessorSubjectSchoolEntity {
  @PrimaryGeneratedColumn()

    id: number;

  @OneToMany(() => ExamsEntity, (exam: any) => (exam.professorSubjectSchool))
    exams: ExamsEntity[];

  @ManyToOne(() => ProfessorEntity, (professor: any) => (professor.professorsSubjectsSchools), {
    eager: true,
  })
  @JoinColumn({ name: 'professor_id' })
    professor: ProfessorEntity;

  @ManyToOne(() => SubjectEntity, (subject: any) => (subject.professorsSubjectsSchools), {
    eager: true,
  })
  @JoinColumn({ name: 'subject_id' })
    subject: SubjectEntity;

  @ManyToOne(() => SchoolEntity, (school: any) => (school.professorsSubjectsSchools), {
    eager: true,
  })
  @JoinColumn({ name: 'school_id' })
    school: SchoolEntity;
}

export default ProfessorSubjectSchoolEntity;
