import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

const example = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.sendStatus(200);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};

export {
  example,
};
