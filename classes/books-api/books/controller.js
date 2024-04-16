import logger from '../utils/logger.js';
import bookService from './service.js';

// export a controller method that returns all books
export const getBooks = async (req, res) => {
  const books = await bookService.getBooks();
  if (!books) {
    return res.status(404).json({ error: 'Books not found' });
  }
  return res.json(books);
};

// export a controller method that returns a book by id
export const getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getBookById(id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  return res.json(book);
};

// export a controller method that returns books by author id
export const getBooksByAuthorId = async (req, res) => {
  const { authorId } = req.params;
  const books = await bookService.getBooksByAuthorId(authorId);
  if (!books.length) {
    console.log('Books not found for authorId:', authorId);
  }
  return res.json(books);
};

// export a controller method that returns books filtered by {filter:title||description, value}
export const getBooksByFilter = async (req, res) => {
  const { type, value } = req.query;
  const books = await bookService.getBooksByFilter({ type, value });
  return res.json(books);
};

// export a controller method that creates a book
export const createBook = async (req, res) => {
  const book = req.body;
  const newBook = await bookService.createBook(book);
  logger.info(`Book created: ${JSON.stringify(newBook)} req: ${req.uuid}`);
  return res.status(201).json(newBook);
};

// export a controller method that updates a book
export const updateBook = async (req, res) => {
  const book = req.body;
  const id = req.params.id;
  const updatedBook = await bookService.updateBook(id, book);
  return res.status(201).json(updatedBook);
};

// export a controller method that deletes a book
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const deleted = await bookService.deleteBook(id);
  return res.status(204).end();
};

export default {
  getBooks,
  getBookById,
  getBooksByAuthorId,
  getBooksByFilter,
  createBook,
  updateBook,
  deleteBook,
};
