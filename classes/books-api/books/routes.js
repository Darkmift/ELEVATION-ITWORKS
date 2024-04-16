import bookController from './controller';
import bookMiddlewares from './middlewares';
import express from 'express';

const router = express.Router();

router.get('/', bookController.getBooks);
router.get('/single/:id', bookController.getBookById);
router.get('/author/:authorId', bookController.getBooksByAuthorId);
router.get('/filter', bookController.getBooksByFilter);
router.post('/', bookMiddlewares.validateCreateBook, bookController.createBook);
router.put('/', bookMiddlewares.validateUpdateBook, bookController.updateBook);
