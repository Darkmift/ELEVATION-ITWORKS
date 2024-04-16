import { getAuthorById } from '../../authors/service';
import { getBookById } from '../service';

// Custom validation for authorId
function validateAuthorId(value, helpers) {
  return getAuthorById(value).then((isValid) => {
    if (!isValid) {
      return helpers.error('any.invalid', 'Author ID is not valid or does not exist');
    }
    return value; // Return the validated value
  });
}

// Custom validation for bookId
function validateBookId(value, helpers) {
  return getBookById(value).then((exists) => {
    if (!exists) {
      return helpers.error('any.invalid', 'Book ID is not valid or does not exist');
    }
    return value; // Return the validated value
  });
}

// Schema to create a new book
export const createBookSchema = Joi.object({
  authorId: Joi.string().required().custom(validateAuthorId, 'Author ID validation'),
  price: Joi.number().integer().min(0).required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});

// Schema to update an existing book
export const updateBookSchema = Joi.object({
  id: Joi.string().required().custom(validateBookId, 'Book ID validation'),
  authorId: Joi.string().custom(validateAuthorId, 'Author ID validation').optional(),
  price: Joi.number().precision(2).min(0).optional(),
  title: Joi.string().min(3).max(100).optional(),
  description: Joi.string().min(50).max(1000).optional(),
}).min(1); // Ensure at least one optional field is provided
