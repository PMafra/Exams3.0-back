/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { getManager } from 'typeorm';

function getUniqueList(arr: any[]) {
  return [...new Map(arr.slice().reverse().map((key: any) => [key.id, key])).values()].reverse();
}

async function obtainFilteredExams(filters: any) {
  const {
    chosenSchool,
    chosenCategory,
    chosenProfessor,
    chosenSubject,
  } = filters;
  console.log(filters);

  let examsList;

  if (chosenProfessor) {
    examsList = await getManager().query(`
        SELECT exams.title, exams.link FROM exams JOIN categories ON categories.id = exams.category_id JOIN professors_subjects_schools ON professors_subjects_schools.id = exams.professor_subject_school_id JOIN schools ON schools.id = professors_subjects_schools.school_id JOIN professors ON professors.id = professors_subjects_schools.professor_id WHERE schools.school = $1 AND categories.category = $2 AND professors.professor = $3;
  `, [chosenSchool, chosenCategory, chosenProfessor]);
  } else {
    examsList = await getManager().query(`
        SELECT exams.title, exams.link FROM exams JOIN categories ON categories.id = exams.category_id JOIN professors_subjects_schools ON professors_subjects_schools.id = exams.professor_subject_school_id JOIN schools ON schools.id = professors_subjects_schools.school_id JOIN subjects ON subjects.id = professors_subjects_schools.subject_id WHERE schools.school = $1 AND categories.category = $2 AND subjects.subject = $3;
  `, [chosenSchool, chosenCategory, chosenSubject]);
  }
  console.log(examsList);
  return examsList;
}

export {
  obtainFilteredExams,
};
