import { getRepository } from 'typeorm';
import School from '../entities/schools';
import Categories from '../entities/categories';

async function obtainSchools() {
  const schoolsList = await getRepository(School).find();

  return schoolsList;
}

async function obtainCategories() {
  const categoriesList = await getRepository(Categories).find();

  return categoriesList;
}

export {
  obtainSchools,
  obtainCategories,
};
