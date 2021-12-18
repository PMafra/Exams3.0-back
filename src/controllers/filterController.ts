/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import * as filterService from '../services/filterService';

const getSchools = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schoolsList = await filterService.obtainSchools();
    return res.send(schoolsList);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoriesList = await filterService.obtainCategories();
    return res.send(categoriesList);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

const getProfessorsByFilter = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const professorsList = await filterService.obtainProfessorsByFilter(req.body);
    return res.send(professorsList);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

const getSubjectsByFilter = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subjectsList = await filterService.obtainSubjectsByFilter(req.body);
    return res.send(subjectsList);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

export {
  getSchools,
  getCategories,
  getProfessorsByFilter,
  getSubjectsByFilter,
};
