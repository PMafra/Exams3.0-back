/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import * as examService from '../services/examService';

const getFilteredExams = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { filters } = req.body;
    const examsList = await examService.obtainFilteredExams(filters);
    return res.send(examsList);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

const addNewExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await examService.insertNewExam(req.body);
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
