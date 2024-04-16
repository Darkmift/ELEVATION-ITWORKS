import booksJson from '../jsons/books.json' assert { type: 'json' };
import { v4 as uuidv4 } from 'uuid';
import BookModel from './models/books.js';
import logger from '../utils/logger.js';

const books = booksJson;

// export a method that returns all books
export const getBooks = async () => {
  try {
    return await BookModel.find({});
  } catch (error) {
    logger.error(error);
    return null;
  }
};

// export a method that returns a book by id
export const getBookById = async (id) => {
  try {
    return await BookModel.findByID(id);
  } catch (error) {
    logger.error(error);
    return null;
  }
};

// export a method that returns books by author id
export const getBooksByAuthorId = async (authorId) => {
  try {
    return await BookModel.find({ authorId });
  } catch (error) {
    logger.error(error);
    return null;
  }
};

// export a method that returns books filtered by {filter:title||description, value}
export const getBooksByFilter = async ({ filter, value }) => {
  // {filter:'title',value:'foo'}
  try {
    return await BookModel.find({
      [filter]: {
        $regex: new RegExp(value, 'i'),
      },
    });
  } catch (error) {
    logger.error(error);
    return null;
  }
};

// https://stackoverflow.com/questions/31544587/search-for-substring-in-several-fields-with-mongodb-and-mongoose

// export a method that creates a book
export const createBook = async (book) => {
  try {
    const newBook = new BookModel(book);
    return await newBook.save();
  } catch (error) {
    logger.error(error);
    return null;
  }
};

// export a method that updates a book
export const updateBook = async (id, book) => {
  try {
    return await BookModel.findByIdAndUpdate(id, book, { new: true });
  } catch (error) {
    logger.error(error);
    return null;
  }
};

// export a method that deletes a book
export const deleteBook = async (id) => {
  try {
    await BookModel.findByIdAndDelete(id);
  } catch (error) {
    logger.error(error);
  }
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
