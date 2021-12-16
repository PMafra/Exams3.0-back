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

export {
  getSchools,
};
