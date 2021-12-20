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
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne, } from 'typeorm';
import SchoolEntity from './schools';
import ProfessorEntity from './professors';
import SubjectEntity from './subjects';
import ExamsEntity from './exams';
let ProfessorSubjectSchoolEntity = class ProfessorSubjectSchoolEntity {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProfessorSubjectSchoolEntity.prototype, "id", void 0);
__decorate([
    OneToMany(() => ExamsEntity, (exam) => (exam.professorSubjectSchool)),
    __metadata("design:type", Array)
], ProfessorSubjectSchoolEntity.prototype, "exams", void 0);
__decorate([
    ManyToOne(() => ProfessorEntity, (professor) => (professor.professorsSubjectsSchools), {
        eager: true,
    }),
    JoinColumn({ name: 'professor_id' }),
    __metadata("design:type", ProfessorEntity)
], ProfessorSubjectSchoolEntity.prototype, "professor", void 0);
__decorate([
    ManyToOne(() => SubjectEntity, (subject) => (subject.professorsSubjectsSchools), {
        eager: true,
    }),
    JoinColumn({ name: 'subject_id' }),
    __metadata("design:type", SubjectEntity)
], ProfessorSubjectSchoolEntity.prototype, "subject", void 0);
__decorate([
    ManyToOne(() => SchoolEntity, (school) => (school.professorsSubjectsSchools), {
        eager: true,
    }),
    JoinColumn({ name: 'school_id' }),
    __metadata("design:type", SchoolEntity)
], ProfessorSubjectSchoolEntity.prototype, "school", void 0);
ProfessorSubjectSchoolEntity = __decorate([
    Entity('professors_subjects_schools')
], ProfessorSubjectSchoolEntity);
export default ProfessorSubjectSchoolEntity;
