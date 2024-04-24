import { Router } from 'express';
import BooksController from './books.controller';
import { validateCreateBook, validateUpdateBook } from './books.middlewares';

const booksRouter = Router();

booksRouter.get('/', BooksController.getBooks);
booksRouter.get('/:id', BooksController.getBookById);
booksRouter.post('/', validateCreateBook, BooksController.createBook);
booksRouter.put('/:id', validateUpdateBook, BooksController.updateBook);
booksRouter.delete('/:id', BooksController.deleteBook);

export default booksRouter;
