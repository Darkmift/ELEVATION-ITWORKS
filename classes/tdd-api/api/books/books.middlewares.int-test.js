import { describe } from 'node:test';
import { validateCreateBook, validateUpdateBook, createBookSchema, updateBookSchema } from './books.middlewares';

describe('Books schemas', () => {
  describe('validateCreateBook', () => {
    it('should call next if the book is valid', async () => {
      const req = { body: { name: 'Title', author: 'Author', pages: 100, price: 10, published: new Date() } };
      const next = jest.fn();

      await validateCreateBook(req, null, next);

      expect(next).toHaveBeenCalled();
    });

    it('should return 500 if the book is invalid', async () => {
      const req = { body: { name: 'Title', pages: 100, price: 10, published: new Date() } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await validateCreateBook(req, res, null);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('validateUpdateBook', () => {
    it('should call next if the book is valid', async () => {
      const req = { body: { _id: '1', name: 'Title' } };
      const next = jest.fn();

      await validateUpdateBook(req, null, next);

      expect(next).toHaveBeenCalled();
    });

    it('should return 500 if the book is invalid', async () => {
      const req = { body: { someInvalidkey: 'foo' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await validateUpdateBook(req, res, null);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
