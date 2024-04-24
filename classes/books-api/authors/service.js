import logger from '../utils/logger.js';
import AuthorModel from './models/authors.js';
// export a method that returns all authors
export const getAuthors = async () => {
  try {
    return await AuthorModel.find({});
  } catch (error) {
    logger.error(error);
    return null;
  }
};

// export a method that returns an author by id
export const getAuthorById = async (id) => {
  try {
    return await AuthorModel.findById(id);
  } catch (error) {
    logger.error(error);
    return null;
  }
};
