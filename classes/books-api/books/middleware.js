import logger from '../utils/logger.js';
import { createBookSchema, updateBookSchema } from './joi/schemas.js';

const options = {
  abortEarly: false, // report all errors, not just the first
  stripUnknown: true, // remove unknown keys
};

// Middleware to validate the request body for creating a new book
export const validateCreateBook = (req, res, next) => {
  logger.info(`Validating create book request body req:${req.uuid}`);
  const { error } = createBookSchema.validate(req.body, options);
  if (error) {
    return res.status(400).json({ error: error.details });
  }
  return next();
};

// Middleware to validate the request body for updating an existing book
export const validateUpdateBook = (req, res, next) => {
  const { error } = updateBookSchema.validate(req.body, options);
  if (error) {
    return res.status(400).json({ error: error.details });
  }
  return next();
};

export default {
  validateCreateBook,
  validateUpdateBook,
};
