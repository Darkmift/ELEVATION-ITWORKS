import express from 'express';
import {
  getById,
  create,
  update,
  remove,
  getPaginated
} from './user.controller';
const userRouter = express.Router();

userRouter
  .get('/', getPaginated)
  .get('/:id', getById)
  .post('/', create)
  .put('/:id', update)
  .delete('/:id', remove);

export default userRouter;