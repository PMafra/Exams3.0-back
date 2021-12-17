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

  const subjectsList = await getManager().query(`
    SELECT subjects.subject, subjects.id FROM professors_subjects_schools JOIN subjects ON subjects.id = professors_subjects_schools.subject_id JOIN schools ON schools.id = professors_subjects_schools.school_id WHERE schools.school = $1;
  `, []);

  const uniqueSubjectsList = getUniqueList(subjectsList);

  return uniqueSubjectsList;
}

export {
  obtainFilteredExams,
};
