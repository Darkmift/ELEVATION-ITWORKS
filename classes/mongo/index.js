import { getUsers, insertUser, updateUserByEmail, deleteUserByEmail } from './service/user.service.js';

async function init() {
  const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'aaa@hhh.com',
    password: '1234',
  };
  const user2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'bbb@hhh.com',
    password: '1234',
  };

  // insert the users into the database
  await insertUser(user1);
  await insertUser(user2);

  // update user1
  await updateUserByEmail('aaa@hhh.com', { firstName: 'Jane', lastName: 'Doe' });

  // delete user2
  await deleteUserByEmail('bbb@hhh.com');
}

init();
