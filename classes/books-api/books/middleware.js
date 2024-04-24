import logger from '../utils/logger.js';
import { createBookSchema, updateBookSchema } from './joi/schemas.js';

const options = {
  abortEarly: false, // report all errors, not just the first
  stripUnknown: true, // remove unknown keys
};

function mapErrorDetailsToObj(details) {
  return details.reduce((acc, err) => {
    acc[err.path] = err.message;
    return acc;
  }, {});
}

// Middleware to validate the request body for creating a new book
export const validateCreateBook = async (req, res, next) => {
  logger.info(`Validating create book request body req:${req.uuid}`);
  try {
    const result = await createBookSchema.validateAsync(req.body, options);
    return next();
  } catch (error) {
    return res.status(500).json({ error: mapErrorDetailsToObj(error.details) });
  }
};

// Middleware to validate the request body for updating an existing book
export const validateUpdateBook = async (req, res, next) => {
  const { error } = await updateBookSchema.validateAsync(req.body, options);
  if (error) {
    return res.status(400).json({ error: mapErrorDetailsToObj(error.details) });
  }
  return next();
};

export default {
  validateCreateBook,
  validateUpdateBook,
};
