import Joi from 'joi';
import { getAuthorById } from '../../authors/service.js';
import { getBookById } from '../service.js';

// Custom validation for authorId
async function validateAuthorId(value, helpers) {
  const author = await getAuthorById(value);

  if (!author?.id) {
    // Corrected error reporting
    return helpers.error('any.invalid', { message: 'Author ID is not valid or does not exist' });
  }
  return value; // Return the validated value
}

// Custom validation for bookId
async function validateBookId(value, helpers) {
  const book = await getBookById(value);

  if (!book?.id) {
    // Corrected error reporting
    return helpers.error('any.invalid', { message: 'Book ID is not valid or does not exist' });
  }
  return value; // Return the validated value
}

// Schema to create a new book
export const createBookSchema = Joi.object({
  authorId: Joi.string().required().external(validateAuthorId, 'Author ID validation'),
  price: Joi.number().integer().min(0).required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});

// Schema to update an existing book
export const updateBookSchema = Joi.object({
  id: Joi.string().required().external(validateBookId, 'Book ID validation'),
  authorId: Joi.string().external(validateAuthorId, 'Author ID validation').optional(),
  price: Joi.number().precision(2).min(0).optional(),
  title: Joi.string().min(3).max(100).optional(),
  description: Joi.string().min(50).max(1000).optional(),
}).min(2); // Ensure at least one optional field is provided
