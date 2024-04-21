import BooksService from './books.service';

export default class BooksController {
  // get books
  static async getBooks(req, res) {
    try {
      const books = await BooksService.getAll();
      return res.status(200).json(books);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // get book by id
  static async getBookById(req, res) {
    try {
      const book = await BooksService.getById(req.params.id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // create book
  static async createBook(req, res) {
    try {
      const book = await BooksService.create(req.body);
      return res.status(201).json(book);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // update book
  static async updateBook(req, res) {
    try {
      const book = await BooksService.update(req.params.id, req.body);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // delete book
  static async deleteBook(req, res) {
    try {
      const book = await BooksService.remove(req.params.id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
