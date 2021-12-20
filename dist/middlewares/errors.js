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
import RequestError from '../errors/requestError';
import NotFoundError from '../errors/notFoundError';
import ConflictError from '../errors/conflictError';
import { HttpStatusCode, HttpStatusMessage } from '../enums/http';
import UnauthorizedError from '../errors/unauthorizedError';
const middlewareError = (err, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let logErrorMessage = `method=${req.method} - url=${req.originalUrl} - ip=${req.ip} - message=${err.message}`;
    if (err instanceof RequestError) {
        logErrorMessage += ' - status=400';
        logger.error(logErrorMessage);
        return res.status(HttpStatusCode.BAD_REQUEST).send(err.message || HttpStatusMessage.BAD_REQUEST);
    }
    if (err instanceof NotFoundError) {
        logErrorMessage += ' - status=404';
        logger.error(logErrorMessage);
        return res.status(HttpStatusCode.NOT_FOUND).send(err.message || HttpStatusMessage.NOT_FOUND);
    }
    if (err instanceof ConflictError) {
        logErrorMessage += ' - status=409';
        logger.error(logErrorMessage);
        return res.status(HttpStatusCode.CONFLICT).send(err.message || HttpStatusMessage.CONFLICT);
    }
    if (err instanceof UnauthorizedError) {
        logErrorMessage += ' - status=401';
        logger.error(logErrorMessage);
        return res.status(HttpStatusCode.UNAUTHORIZED).send(err.message || HttpStatusMessage.UNAUTHORIZED);
    }
    logErrorMessage += ' - status=500';
    logger.error(logErrorMessage);
    return res.status(HttpStatusCode.SERVER_ERROR).send(err.message || HttpStatusMessage.SERVER_ERROR);
});
export default middlewareError;
