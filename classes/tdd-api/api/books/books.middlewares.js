import Joi from 'joi';
import mapJoiErrorsToObj from '../../utils/mapJoiErrorsToObj.js';

const options = {
  abortEarly: false, // report all errors, not just the first
  stripUnknown: true, // remove unknown keys
};

export const createBookSchema = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  pages: Joi.number().required(),
  price: Joi.number().required(),
  published: Joi.date().required(),
});

export const validateCreateBook = async (req, res, next) => {
  try {
    await createBookSchema.validateAsync(req.body, options);
    return next();
  } catch (error) {
    return res.status(500).json({ error: mapJoiErrorsToObj(error.details) });
  }
};

// an update schema
export const updateBookSchema = Joi.object({
  _id: Joi.string().optional(),
  name: Joi.string().optional(),
  author: Joi.string().optional(),
  pages: Joi.number().optional(),
  price: Joi.number().optional(),
  published: Joi.date().optional(),
}).min(1);

export const validateUpdateBook = async (req, res, next) => {
  try {
    await updateBookSchema.validateAsync(req.body, options);
    return next();
  } catch (error) {
    console.log('🚀 ~ validateUpdateBook ~ error:', error);
    return res.status(500).json({ error: mapJoiErrorsToObj(error.details) });
  }
};
