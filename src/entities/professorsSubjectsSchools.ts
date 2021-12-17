/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne,
} from 'typeorm';
import SchoolEntity from './schools';
import ProfessorEntity from './professors';
import SubjectEntity from './subjects';

@Entity('professors_subjects_schools')
class ProfessorSubjectSchoolEntity {
  @PrimaryGeneratedColumn()

    id: number;

    @ManyToOne(() => SchoolEntity, (school) => school.id, { eager: true })
    @JoinColumn({ name: 'school_id' })
      school: SchoolEntity;

    @ManyToOne(() => ProfessorEntity, (professor) => professor.id, { eager: true })
    @JoinColumn({ name: 'professor_id' })
      professor: ProfessorEntity;

    @ManyToOne(() => SubjectEntity, (subject) => subject.id, { eager: true })
    @JoinColumn({ name: 'subject_id' })
      subject: SubjectEntity;
}

export default ProfessorSubjectSchoolEntity;
