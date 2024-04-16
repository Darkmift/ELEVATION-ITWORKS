import bookService from './service';

// export a controller method that returns all books
export const getBooks = (req, res) => {
  const books = bookService.getBooks();
  return res.json(books);
};

// export a controller method that returns a book by id
export const getBookById = (req, res) => {
  const { id } = req.params;
  const book = bookService.getBookById(id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  return res.json(book);
};

// export a controller method that returns books by author id
export const getBooksByAuthorId = (req, res) => {
  const { authorId } = req.params;
  const books = bookService.getBooksByAuthorId(authorId);
  if (!books.length) {
    console.log('Books not found for authorId:', authorId);
  }
  return res.json(books);
};

// export a controller method that returns books filtered by {filter:title||description, value}
export const getBooksByFilter = (req, res) => {
  const { type, value } = req.query;
  const books = bookService.getBooksByFilter({ type, value });
  return res.json(books);
};

// export a controller method that creates a book
export const createBook = (req, res) => {
  const book = req.body;
  const newBook = bookService.createBook(book);
  return res.status(201).json(newBook);
};

// export a controller method that updates a book
export const updateBook = (req, res) => {
  const book = req.body;
  const updatedBook = bookService.updateBook(book);
  return res.status(201).json(updatedBook);
};

// export a controller method that deletes a book
export const deleteBook = (req, res) => {
  const { id } = req.params;
  const deleted = bookService.deleteBook(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Book not found' });
  }
  return res.status(204).end();
};
