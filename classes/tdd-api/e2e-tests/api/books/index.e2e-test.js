import request from 'supertest';
import app from '../../../app';

const ENDPOINT = '/api/v1/books';

const newBook = {
  name: 'Book 1',
  author: 'Author 1',
  pages: 100,
  price: 10,
  published: new Date().toISOString(),
};

describe('Books', function () {
  describe('GET all Books', function () {
    it('should return all books', async () => {
      const response = await request(app).get(ENDPOINT);

      expect(response.status).toEqual(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('POST a Book', function () {
    it('should create a book', async () => {
      const response = await request(app).post(ENDPOINT).send(newBook);
      expect(response.status).toEqual(201);
      expect(response.body).toMatchObject(newBook);
    });
  });

  // update book
  describe('PUT a Book', function () {
    it('should update a book', async () => {
      const response = await request(app).post(ENDPOINT).send(newBook);
      const updatedBook = { ...response.body, name: 'Book 2' };

      const updatedResponse = await request(app).put(`${ENDPOINT}/${response.body._id}`).send(updatedBook);
      expect(updatedResponse.status).toEqual(200);
      expect(updatedResponse.body).toMatchObject(updatedBook);
    });
  });

  // get by id
  describe('GET a Book by id', function () {
    it('should return a book by id', async () => {
      const response = await request(app).post(ENDPOINT).send(newBook);
      const bookId = response.body._id;

      const getByIdResponse = await request(app).get(`${ENDPOINT}/${bookId}`);
      expect(getByIdResponse.status).toEqual(200);
      expect(getByIdResponse.body).toMatchObject(newBook);
    });
  });

  // delete book
  describe('DELETE a Book', function () {
    it('should delete a book', async () => {
      const response = await request(app).post(ENDPOINT).send(newBook);
      const bookId = response.body._id;

      const deleteResponse = await request(app).delete(`${ENDPOINT}/${bookId}`);
      expect(deleteResponse.status).toEqual(204);
    });
  });
});
