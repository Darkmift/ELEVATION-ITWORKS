import getDb from './services/db.js';

const db = getDb();

(async () => {
  console.info(await db.getData('/'));
})();
