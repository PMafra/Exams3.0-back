import { getRepository } from 'typeorm';

import CategoryEntity from '../../src/entities/categories';
import ExamsEntity from '../../src/entities/exams';
import ProfessorEntity from '../../src/entities/professors';
import ProfessorSubjectSchoolEntity from '../../src/entities/professorsSubjectsSchools';
import SubjectEntity from '../../src/entities/subjects';
import SchoolEntity from '../../src/entities/schools';

export default async function clearDatabase() {
  await getRepository(ExamsEntity).delete({});
  await getRepository(CategoryEntity).delete({});
  await getRepository(ProfessorSubjectSchoolEntity).delete({});
  await getRepository(ProfessorEntity).delete({});
  await getRepository(SubjectEntity).delete({});
  await getRepository(SchoolEntity).delete({});
}
