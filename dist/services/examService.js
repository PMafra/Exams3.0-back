var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRepository } from 'typeorm';
import ExamEntity from '../entities/exams';
import CategoryEntity from '../entities/categories';
import ProfessorSubjectSchoolEntity from '../entities/professorsSubjectsSchools';
function obtainFilteredExams(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const school = query === null || query === void 0 ? void 0 : query.school;
        const category = query === null || query === void 0 ? void 0 : query.category;
        const professor = query === null || query === void 0 ? void 0 : query.professor;
        const subject = query === null || query === void 0 ? void 0 : query.subject;
        let examsList;
        if (professor && !subject) {
            examsList = yield getRepository(ExamEntity)
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
            examsList = yield getRepository(ExamEntity)
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
    });
}
function insertNewExam(newExamInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const { newExamTitle, newExamUrl, chosenCategory, chosenProfessor, chosenSubject, chosenSchool, } = newExamInfo;
        const { id: professorsSubjectsSchoolsId, } = yield getRepository(ProfessorSubjectSchoolEntity).findOne({
            where: {
                school: { school: chosenSchool },
                professor: { professor: chosenProfessor },
                subject: { subject: chosenSubject },
            },
            relations: ['school', 'professor', 'subject'],
        });
        const { id: categoryId, } = yield getRepository(CategoryEntity).findOne({ category: chosenCategory });
        const result = yield getRepository(ExamEntity)
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
    });
}
export { obtainFilteredExams, insertNewExam, };
