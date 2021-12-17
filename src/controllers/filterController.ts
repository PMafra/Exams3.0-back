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

const getProfessorsBySchool = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      chosenSchool: school,
    } = req.body;

    const professorsList = await filterService.obtainProfessorsBySchool(school);
    return res.send(professorsList);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

export {
  getSchools,
  getCategories,
  getProfessorsBySchool,
};
