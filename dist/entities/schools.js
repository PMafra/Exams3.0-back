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
let SchoolEntity = class SchoolEntity {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SchoolEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], SchoolEntity.prototype, "school", void 0);
__decorate([
    OneToMany(() => ProfessorSubjectSchoolEntity, (professorSubjectSchool) => professorSubjectSchool.school),
    __metadata("design:type", Array)
], SchoolEntity.prototype, "professorsSubjectsSchools", void 0);
SchoolEntity = __decorate([
    Entity('schools')
], SchoolEntity);
export default SchoolEntity;
