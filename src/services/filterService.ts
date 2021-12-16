import { getRepository } from 'typeorm';
import School from '../entities/schools';

async function obtainSchools() {
  const schoolsList = await getRepository(School).find();

  return schoolsList;
}

export {
  obtainSchools,
};
