// import dotenv
import 'dotenv/config';
import app from './app.js';
import { PORT } from './config/index.js';
import logger from './utils/logger.js';

app.listen(PORT, () => {
  logger.info(`Book api listening at http://localhost:${PORT}`);
  logger.warn(`Book api listening at http://localhost:${PORT}`);
  logger.error(`Book api error test`, new Error('This is an error'));
});
