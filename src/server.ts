import './setup';
import app, { init } from './app';
import { logger } from './utils/logger';

const port = process.env.PORT || 4000;

init().then(() => {
  app.listen(port, () => {
    logger.info(`Server is listening on port ${port}`);
  });
});
