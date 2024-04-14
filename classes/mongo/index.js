import { getUsers } from './service/user.service.js';

getUsers()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
