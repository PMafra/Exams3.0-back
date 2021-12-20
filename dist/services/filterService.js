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
import SchoolEntity from '../entities/schools';
import CategoryEntity from '../entities/categories';
import { selector } from '../infra/selectors';
import ProfessorSubjectSchoolEntity from '../entities/professorsSubjectsSchools';
function obtainSchools() {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolsList = yield selector(SchoolEntity);
        return schoolsList;
    });
}
function obtainCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        const categoriesList = yield selector(CategoryEntity);
        return categoriesList;
    });
}
function getUniqueListById(arr) {
    return [...new Map(arr === null || arr === void 0 ? void 0 : arr.slice().reverse().map((key) => [key.id, key])).values()].reverse();
}
function obtainProfessorsByFilter(filters) {
    return __awaiter(this, void 0, void 0, function* () {
        const school = filters === null || filters === void 0 ? void 0 : filters.school;
        const subject = filters === null || filters === void 0 ? void 0 : filters.subject;
        let professorsList;
        if (school && !subject) {
            professorsList = yield getRepository(ProfessorSubjectSchoolEntity)
                .createQueryBuilder('professorSubjectSchool')
                .where('school.school = :school', { school })
                .leftJoin('professorSubjectSchool.professor', 'professor')
                .leftJoin('professorSubjectSchool.school', 'school')
                .select(['professor.id AS id', 'professor.professor AS professor'])
                .getRawMany();
        }
        if (school && subject) {
            professorsList = yield getRepository(ProfessorSubjectSchoolEntity)
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
    });
}
function obtainSubjectsByFilter(filters) {
    return __awaiter(this, void 0, void 0, function* () {
        const school = filters === null || filters === void 0 ? void 0 : filters.school;
        let subjectsList;
        if (school) {
            subjectsList = yield getRepository(ProfessorSubjectSchoolEntity)
                .createQueryBuilder('professorSubjectSchool')
                .where('school.school = :school', { school })
                .leftJoin('professorSubjectSchool.subject', 'subject')
                .leftJoin('professorSubjectSchool.school', 'school')
                .select(['subject.id AS id', 'subject.subject AS subject'])
                .getRawMany();
        }
        const uniqueSubjectsList = getUniqueListById(subjectsList);
        return uniqueSubjectsList;
    });
}
export { obtainSchools, obtainCategories, obtainProfessorsByFilter, obtainSubjectsByFilter, };
