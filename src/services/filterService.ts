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
    SELECT professors.professor, schools.school, schools.school FROM professors_subjects_schools JOIN professors ON professors.id = professors_subjects_schools.professor_id JOIN schools ON schools.id = professors_subjects_schools.school_id WHERE schools.school = $1;
  `, [school]);

  return professorsList;
}

export {
  obtainSchools,
  obtainCategories,
  obtainProfessorsBySchool,
};
