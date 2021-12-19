/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { getManager } from 'typeorm';

async function obtainFilteredExams(query: any) {
  const school = query?.school;
  const category = query?.category;
  const professor = query?.professor;
  const subject = query?.subject;

  let examsList;

  if (professor) {
    examsList = await getManager().query(`
        SELECT exams.title, exams.link FROM exams JOIN categories ON categories.id = exams.category_id JOIN professors_subjects_schools ON professors_subjects_schools.id = exams.professor_subject_school_id JOIN schools ON schools.id = professors_subjects_schools.school_id JOIN professors ON professors.id = professors_subjects_schools.professor_id WHERE schools.school = $1 AND categories.category = $2 AND professors.professor = $3;
  `, [school, category, professor]);
  } else {
    examsList = await getManager().query(`
        SELECT exams.title, exams.link FROM exams JOIN categories ON categories.id = exams.category_id JOIN professors_subjects_schools ON professors_subjects_schools.id = exams.professor_subject_school_id JOIN schools ON schools.id = professors_subjects_schools.school_id JOIN subjects ON subjects.id = professors_subjects_schools.subject_id WHERE schools.school = $1 AND categories.category = $2 AND subjects.subject = $3;
  `, [school, category, subject]);
  }
  console.log(examsList);
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
  console.log(newExamInfo);

  const professorsSubjectsSchoolsId = await getManager().query(`
    SELECT professors_subjects_schools.id FROM professors_subjects_schools JOIN subjects ON subjects.id = professors_subjects_schools.subject_id JOIN schools ON schools.id = professors_subjects_schools.school_id JOIN professors ON professors.id = professors_subjects_schools.professor_id WHERE schools.school = $1 AND professors.professor = $2 AND subjects.subject = $3;
`, [chosenSchool, chosenProfessor, chosenSubject]);

  const categoryId = await getManager().query(`
    SELECT categories.id FROM categories WHERE categories.category = $1;
`, [chosenCategory]);
  console.log(categoryId, professorsSubjectsSchoolsId);

  const result = await getManager().query(`
    INSERT INTO exams (title, link, category_id, professor_subject_school_id) VALUES ($1, $2, $3, $4);
`, [newExamTitle, newExamUrl, Number(categoryId[0].id), Number(professorsSubjectsSchoolsId[0].id)]);

  return result;
}

export {
  obtainFilteredExams,
  insertNewExam,
};
