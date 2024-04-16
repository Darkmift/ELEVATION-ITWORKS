import express from 'express';
import { createUser, getAllUSers, getById, patchUser, removeUser, updateUser } from './controller.js';

const userRouter = express.Router();

userRouter
  .get('/', getAllUSers)
  .get('/:id', getById)
  .post(
    '/',
    (req, res, next) => {
      console.log('this is the middleware');
      next();
    },
    (req, res, next) => {
      console.log('this is also a middleware');
      next();
    },
    createUser
  )
  .put('/:id', updateUser)
  .patch('/:id', patchUser)
  .delete('/:id', removeUser);
// .use('/:id/posts', postRouter);

export default userRouter;
