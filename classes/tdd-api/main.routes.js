import { Router } from 'express';
import booksRouter from './api/books/index.routes';

const mainRouter = Router();

mainRouter.use('/books', booksRouter);

export default mainRouter;
