/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import * as examService from '../services/examService';
import * as validationService from '../services/validationService';
import { newExamSchema, queryFiltersSchema } from '../validations/joiSchemas';

const getFilteredExams = async (req: Request, res: Response, next: NextFunction) => {
  const allFilters = req.query;
  await validationService.validateWithJoi({
    object: allFilters, schema: queryFiltersSchema,
  });
  try {
    const examsList = await examService.obtainFilteredExams(allFilters);
    return res.send(examsList);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

const addNewExam = async (req: Request, res: Response, next: NextFunction) => {
  const newExamInfo = req.body;
  await validationService.validateWithJoi({
    object: newExamInfo, schema: newExamSchema,
  });
  try {
    await examService.insertNewExam(newExamInfo);
    return res.sendStatus(201);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

export {
  getFilteredExams,
  addNewExam,
};
