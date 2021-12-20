var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, } from 'typeorm';
import CategoryEntity from './categories';
import ProfessorSubjectSchoolEntity from './professorsSubjectsSchools';
let ExamEntity = class ExamEntity {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ExamEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], ExamEntity.prototype, "title", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], ExamEntity.prototype, "link", void 0);
__decorate([
    ManyToOne(() => CategoryEntity, (category) => (category.exams), {
        eager: true,
    }),
    JoinColumn({ name: 'category_id' }),
    __metadata("design:type", CategoryEntity)
], ExamEntity.prototype, "category", void 0);
__decorate([
    ManyToOne(() => ProfessorSubjectSchoolEntity, (professorSubjectSchool) => (professorSubjectSchool.exams), {
        eager: true,
    }),
    JoinColumn({ name: 'professor_subject_school_id' }),
    __metadata("design:type", ProfessorSubjectSchoolEntity)
], ExamEntity.prototype, "professorSubjectSchool", void 0);
ExamEntity = __decorate([
    Entity('exams')
], ExamEntity);
export default ExamEntity;
