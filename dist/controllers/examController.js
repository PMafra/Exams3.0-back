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
import * as examService from '../services/examService';
import * as validationService from '../services/validationService';
import { newExamSchema, queryFiltersSchema } from '../validations/joiSchemas';
const getFilteredExams = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allFilters = req.query;
    yield validationService.validateWithJoi({
        object: allFilters, schema: queryFiltersSchema,
    });
    try {
        const examsList = yield examService.obtainFilteredExams(allFilters);
        return res.send(examsList);
    }
    catch (error) {
        logger.error(error);
        return next(error);
    }
});
const addNewExam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newExamInfo = req.body;
    yield validationService.validateWithJoi({
        object: newExamInfo, schema: newExamSchema,
    });
    try {
        yield examService.insertNewExam(newExamInfo);
        return res.sendStatus(201);
    }
    catch (error) {
        logger.error(error);
        return next(error);
    }
});
export { getFilteredExams, addNewExam, };
