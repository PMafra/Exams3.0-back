/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { logger } from '../utils/logger';

const middlewareInfo = (req: Request, res: Response, done: any) => {
  logger.info(`Made request to REST API. url=${req.originalUrl} - method=${req.method} - ip=${req.ip}`);
  done();
};

export default middlewareInfo;
