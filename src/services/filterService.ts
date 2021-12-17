import { getRepository } from 'typeorm';
import SchoolEntity from '../entities/schools';
import CategoryEntity from '../entities/categories';
import ProfessorSubjectSchoolEntity from '../entities/professors';

async function obtainSchools() {
  const schoolsList = await getRepository(SchoolEntity).find();

  return schoolsList;
}

async function obtainCategories() {
  const categoriesList = await getRepository(CategoryEntity).find();

  return categoriesList;
}
async function obtainProfessorsBySchool() {
  const professorsList = await getRepository(ProfessorSubjectSchoolEntity).find({

  });

  return professorsList;
}

export {
  obtainSchools,
  obtainCategories,
  obtainProfessorsBySchool,
};
