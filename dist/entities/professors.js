var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, } from 'typeorm';
import ProfessorSubjectSchoolEntity from './professorsSubjectsSchools';
let ProfessorEntity = class ProfessorEntity {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProfessorEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], ProfessorEntity.prototype, "professor", void 0);
__decorate([
    OneToMany(() => ProfessorSubjectSchoolEntity, (professorSubjectSchool) => professorSubjectSchool.professor),
    __metadata("design:type", Array)
], ProfessorEntity.prototype, "professorsSubjectsSchools", void 0);
ProfessorEntity = __decorate([
    Entity('professors')
], ProfessorEntity);
export default ProfessorEntity;
