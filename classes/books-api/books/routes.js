import bookController from './controller.js';
import bookMiddlewares from './middleware.js';
import express from 'express';

const router = express.Router();

router.get('/', bookController.getBooks);
router.get('/single/:id', bookController.getBookById);
router.get('/author/:authorId', bookController.getBooksByAuthorId);
router.get('/filter', bookController.getBooksByFilter);
router.post(
  '/',
  bookMiddlewares.validateCreateBook,
  bookController.createBook
);
router.put(
  '/:id',
  bookMiddlewares.validateUpdateBook,
  bookController.updateBook
);
router.delete('/:id', bookController.deleteBook);

export default router;
