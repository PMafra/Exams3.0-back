import { logger } from '../utils/logger';
const middlewareInfo = (req, res, done) => {
    logger.info(`Made request to REST API. url=${req.originalUrl} - method=${req.method} - ip=${req.ip}`);
    done();
};
export default middlewareInfo;
