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

async function obtainProfessorsBySchool(school: string) {
  const professorsList = await getManager().query(`
    SELECT professors.professor, schools.school FROM professors_subjects_schools JOIN professors ON professors.id = professors_subjects_schools.professor_id JOIN schools ON schools.id = professors_subjects_schools.school_id WHERE schools.school = $1;
  `, [school]);

  return professorsList;
}

function getUniqueList(arr: any[]) {
  return [...new Map(arr.slice().reverse().map((key: any) => [key.id, key])).values()].reverse();
}

async function obtainSubjectsBySchool(school: string) {
  const subjectsList = await getManager().query(`
    SELECT subjects.subject, subjects.id FROM professors_subjects_schools JOIN subjects ON subjects.id = professors_subjects_schools.subject_id JOIN schools ON schools.id = professors_subjects_schools.school_id WHERE schools.school = $1;
  `, [school]);

  const uniqueSubjectsList = getUniqueList(subjectsList);

  return uniqueSubjectsList;
}

export {
  obtainSchools,
  obtainCategories,
  obtainProfessorsBySchool,
  obtainSubjectsBySchool,
};
