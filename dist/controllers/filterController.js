var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { logger } from '../utils/logger';
import * as filterService from '../services/filterService';
import { queryFiltersSchema } from '../validations/joiSchemas';
import * as validationService from '../services/validationService';
const getSchools = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schoolsList = yield filterService.obtainSchools();
        return res.send(schoolsList);
    }
    catch (error) {
        logger.error(error);
        return next(error);
    }
});
const getCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriesList = yield filterService.obtainCategories();
        return res.send(categoriesList);
    }
    catch (error) {
        logger.error(error);
        return next(error);
    }
});
const getProfessorsByFilter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allFilters = req.query;
    yield validationService.validateWithJoi({
        object: allFilters, schema: queryFiltersSchema,
    });
    try {
        const professorsList = yield filterService.obtainProfessorsByFilter(allFilters);
        return res.send(professorsList);
    }
    catch (error) {
        logger.error(error);
        return next(error);
    }
});
const getSubjectsByFilter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allFilters = req.query;
    yield validationService.validateWithJoi({
        object: allFilters, schema: queryFiltersSchema,
    });
    try {
        const subjectsList = yield filterService.obtainSubjectsByFilter(allFilters);
        return res.send(subjectsList);
    }
    catch (error) {
        logger.error(error);
        return next(error);
    }
});
export { getSchools, getCategories, getProfessorsByFilter, getSubjectsByFilter, };
