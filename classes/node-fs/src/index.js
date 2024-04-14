import getDb from './services/db.js';
import { add } from './services/contacts.js';

const db = getDb();

(async () => {
  console.info(await db.getData('/'));

  // add({
  //   name: 'Jhon Doe',
  //   email: 'jhon@doe.com', // must be unique
  // });
})();
