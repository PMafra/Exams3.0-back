/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { getRepository, getManager } from 'typeorm';
import SchoolEntity from '../entities/schools';
import CategoryEntity from '../entities/categories';

async function obtainSchools() {
  const schoolsList = await getRepository(SchoolEntity).find();

  return schoolsList;
}

async function obtainCategories() {
  const categoriesList = await getRepository(CategoryEntity).find();

  return categoriesList;
}

function getUniqueList(arr: any[]) {
  return [...new Map(arr.slice().reverse().map((key: any) => [key.id, key])).values()].reverse();
}

async function obtainProfessorsByFilter(body: any) {
  const school = body?.chosenSchool;
  const subject = body?.chosenSubject;
  let professorsList;
  if (school && !subject) {
    professorsList = await getManager().query(`
    SELECT professors.professor, schools.school FROM professors_subjects_schools JOIN professors ON professors.id = professors_subjects_schools.professor_id JOIN schools ON schools.id = professors_subjects_schools.school_id WHERE schools.school = $1;
  `, [school]);
  }
  if (school && subject) {
    professorsList = await getManager().query(`
    SELECT professors.professor, professors.id FROM professors_subjects_schools JOIN professors ON professors.id = professors_subjects_schools.professor_id JOIN schools ON schools.id = professors_subjects_schools.school_id JOIN subjects ON subjects.id = professors_subjects_schools.subject_id WHERE schools.school = $1 AND subjects.subject = $2;
  `, [school, subject]);
  }

  const uniqueProfessorsList = getUniqueList(professorsList);

  return uniqueProfessorsList;
}

async function obtainSubjectsByFilter(body: any) {
  const school = body?.chosenSchool;
  let subjectsList;

  if (school) {
    subjectsList = await getManager().query(`
    SELECT subjects.subject, subjects.id FROM professors_subjects_schools JOIN subjects ON subjects.id = professors_subjects_schools.subject_id JOIN schools ON schools.id = professors_subjects_schools.school_id WHERE schools.school = $1;
  `, [school]);
  }

  const uniqueSubjectsList = getUniqueList(subjectsList);

  return uniqueSubjectsList;
}

export {
  obtainSchools,
  obtainCategories,
  obtainProfessorsByFilter,
  obtainSubjectsByFilter,
};
