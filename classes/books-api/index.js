// import dotenv
import 'dotenv/config';
import app from './app.js';
import { PORT } from './config/index.js';

app.listen(PORT, () => {
  console.log(`Book api listening at http://localhost:${PORT}`);
});
