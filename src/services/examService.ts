/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRepository } from 'typeorm';
import ExamEntity from '../entities/exams';
import CategoryEntity from '../entities/categories';
import ProfessorSubjectSchoolEntity from '../entities/professorsSubjectsSchools';

async function obtainFilteredExams(query: any) {
  const school = query?.school;
  const category = query?.category;
  const professor = query?.professor;
  const subject = query?.subject;
  let examsList;

  if (professor && !subject) {
    examsList = await getRepository(ExamEntity)
      .createQueryBuilder('exam')
      .where('school.school = :school', { school })
      .andWhere('category.category = :category', { category })
      .andWhere('professor.professor = :professor', { professor })
      .leftJoin('exam.professorSubjectSchool', 'professorSubjectSchool')
      .leftJoin('professorSubjectSchool.professor', 'professor')
      .leftJoin('professorSubjectSchool.school', 'school')
      .leftJoin('exam.category', 'category')
      .select(['exam.id AS id', 'exam.title AS title', 'exam.link AS link'])
      .getRawMany();
  }
  if (subject && !professor) {
    examsList = await getRepository(ExamEntity)
      .createQueryBuilder('exam')
      .where('school.school = :school', { school })
      .andWhere('category.category = :category', { category })
      .andWhere('subject.subject = :subject', { subject })
      .leftJoin('exam.professorSubjectSchool', 'professorSubjectSchool')
      .leftJoin('professorSubjectSchool.subject', 'subject')
      .leftJoin('professorSubjectSchool.school', 'school')
      .leftJoin('exam.category', 'category')
      .select(['exam.id AS id', 'exam.title AS title', 'exam.link AS link'])
      .getRawMany();
  }

  return examsList;
}

async function insertNewExam(newExamInfo: any) {
  const {
    newExamTitle,
    newExamUrl,
    chosenCategory,
    chosenProfessor,
    chosenSubject,
    chosenSchool,
  } = newExamInfo;

  const {
    id: professorsSubjectsSchoolsId,
  } = await getRepository(ProfessorSubjectSchoolEntity).findOne({
    where: {
      school: { school: chosenSchool },
      professor: { professor: chosenProfessor },
      subject: { subject: chosenSubject },
    },
    relations: ['school', 'professor', 'subject'],
  });

  const {
    id: categoryId,
  } = await getRepository(CategoryEntity).findOne({ category: chosenCategory });

  const result = await getRepository(ExamEntity)
    .insert({
      title: newExamTitle,
      link: newExamUrl,
      category: {
        id: categoryId,
        category: chosenCategory,
      },
      professorSubjectSchool: {
        id: professorsSubjectsSchoolsId,
        professor: chosenProfessor,
        subject: chosenSubject,
        school: chosenSchool,
      },
    });

  return result;
}

export {
  obtainFilteredExams,
  insertNewExam,
};
