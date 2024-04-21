import { describe } from 'node:test';
import { validateCreateBook, validateUpdateBook, createBookSchema, updateBookSchema } from './books.middlewares';

describe('Books schemas', () => {
  describe('createBookSchema', () => {
    it('should return an error if name is not provided', async () => {
      const book = { author: 'Author', pages: 100, price: 10, published: new Date() };
      try {
        await createBookSchema.validateAsync(book);
      } catch (error) {
        expect(error.message).toBe('"name" is required');
      }
    });

    it('should return an error if author is not provided', async () => {
      const book = { name: 'Title', pages: 100, price: 10, published: new Date() };
      try {
        await createBookSchema.validateAsync(book);
      } catch (error) {
        expect(error.message).toBe('"author" is required');
      }
    });
  });

  describe('updateBookSchema', () => {
    // test schemas
    it('should return an error if _id is not a string', async () => {
      const book = { _id: 1 };
      try {
        await updateBookSchema.validateAsync(book);
      } catch (error) {
        expect(error.message).toBe('"_id" must be a string');
      }
    });

    it('should return an error if _id is not provided', async () => {
      const book = { name: 'Title' };
      try {
        await updateBookSchema.validateAsync(book);
      } catch (error) {
        expect(error.message).toBe('"_id" is required');
      }
    });
  });
});
