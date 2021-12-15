import './setup';
import app, { init } from './app';
import { logger } from './utils/logger';

init().then(() => {
  app.listen(4000, () => {
    logger.info('Server is listening on port 4000');
  });
});
