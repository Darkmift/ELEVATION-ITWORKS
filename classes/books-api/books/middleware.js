import { createBookSchema, updateBookSchema } from './joi/schemas';

// Middleware to validate the request body for creating a new book
export const validateCreateBook = (req, res, next) => {
  const { error } = createBookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  return next();
};

// Middleware to validate the request body for updating an existing book
export const validateUpdateBook = (req, res, next) => {
  const { error } = updateBookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  return next();
};
