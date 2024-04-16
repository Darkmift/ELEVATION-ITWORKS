import booksJson from '../jsons/books.json' assert { type: 'json' };
import { v4 as uuidv4 } from 'uuid';

const books = booksJson;

// export a method that returns all books
export const getBooks = () => books;

// export a method that returns a book by id
export const getBookById = (id) => books.find((book) => book.id === id);

// export a method that returns books by author id
export const getBooksByAuthorId = (authorId) => books.filter((book) => book.authorId === authorId);

// export a method that returns books filtered by {filter:title||description, value}
export const getBooksByFilter = (filter) =>
  books.filter((book) => book[filter.type].toLowerCase().includes(filter.value.toLowerCase()));

// export a method that creates a book
export const createBook = (book) => {
  book.id = uuidv4();
  books.push(book);
  return book;
};

// export a method that updates a book
export const updateBook = (book) => {
  const index = books.findIndex((b) => b.id === book.id);
  books[index] = book;
  return book;
};

// export a method that deletes a book
export const deleteBook = (id) => {
  const index = books.findIndex((book) => book.id === id);
  books.splice(index, 1);
  return true;
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
