import { Response, Request, NextFunction } from 'express';
// import * as userService from '../services/userService';
import { logger } from '../utils/logger';
import { HttpStatusCode } from '../enums/http';

async function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.sendStatus(HttpStatusCode.UNAUTHORIZED);

  try {
    // const user = await userService.selectUserByToken({ token });

    // if (!user) {
    //   return res.sendStatus(HttpStatusCode.UNAUTHORIZED);
    // }
    // res.locals.user = user;
  } catch (err) {
    logger.error(err);
    return res.sendStatus(HttpStatusCode.UNAUTHORIZED);
  }
  return next();
}

export default auth;
