/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { getRepository } from 'typeorm';
import SchoolEntity from '../entities/schools';
import CategoryEntity from '../entities/categories';
import { selector } from '../infra/selectors';
import ProfessorSubjectSchoolEntity from '../entities/professorsSubjectsSchools';

async function obtainSchools() {
  const schoolsList = await selector(SchoolEntity);

  return schoolsList;
}

async function obtainCategories() {
  const categoriesList = await selector(CategoryEntity);

  return categoriesList;
}

function getUniqueListById(arr: any[]) {
  return [...new Map(arr?.slice().reverse().map((key: any) => [key.id, key])).values()].reverse();
}

async function obtainProfessorsByFilter(filters: any) {
  const school = filters?.school;
  const subject = filters?.subject;
  let professorsList;

  if (school && !subject) {
    professorsList = await getRepository(ProfessorSubjectSchoolEntity)
      .createQueryBuilder('professorSubjectSchool')
      .where('school.school = :school', { school })
      .leftJoin('professorSubjectSchool.professor', 'professor')
      .leftJoin('professorSubjectSchool.school', 'school')
      .select(['professor.id AS id', 'professor.professor AS professor'])
      .getRawMany();
  }
  if (school && subject) {
    professorsList = await getRepository(ProfessorSubjectSchoolEntity)
      .createQueryBuilder('professorSubjectSchool')
      .where('school.school = :school', { school })
      .andWhere('subject.subject = :subject', { subject })
      .leftJoin('professorSubjectSchool.professor', 'professor')
      .leftJoin('professorSubjectSchool.school', 'school')
      .leftJoin('professorSubjectSchool.subject', 'subject')
      .select(['professor.id AS id', 'professor.professor AS professor'])
      .getRawMany();
  }

  const uniqueProfessorsList = getUniqueListById(professorsList);

  return uniqueProfessorsList;
}

async function obtainSubjectsByFilter(filters: any) {
  const school = filters?.school;
  let subjectsList;

  if (school) {
    subjectsList = await getRepository(ProfessorSubjectSchoolEntity)
      .createQueryBuilder('professorSubjectSchool')
      .where('school.school = :school', { school })
      .leftJoin('professorSubjectSchool.subject', 'subject')
      .leftJoin('professorSubjectSchool.school', 'school')
      .select(['subject.id AS id', 'subject.subject AS subject'])
      .getRawMany();
  }

  const uniqueSubjectsList = getUniqueListById(subjectsList);

  return uniqueSubjectsList;
}

export {
  obtainSchools,
  obtainCategories,
  obtainProfessorsByFilter,
  obtainSubjectsByFilter,
};
