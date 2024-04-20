// express hello world
import logger from './utils/logger.js';
import { PORT } from './config/index.js';
import app from './app.js';

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
