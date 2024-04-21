import BooksService from './books.service';
import BookModel from './books.model';
describe('BooksService', () => {
  describe('create', () => {
    it('should call BookModel.create with the correct arguments', async () => {
      const book = { name: 'Title', author: 'Author', pages: 100, price: 10, published: new Date() };
      const createSpy = jest.spyOn(BookModel, 'create');

      await BooksService.create(book);

      expect(createSpy).toHaveBeenCalledWith(book);
    });
  });

  describe('getOne', () => {
    it('should call BookModel.find with the correct arguments', async () => {
      const findSpy = jest.spyOn(BookModel, 'find');

      await BooksService.getAll();

      expect(findSpy).toHaveBeenCalledWith();
    });
  });

  describe('getById', () => {
    it('should call BookModel.findById with the correct arguments', async () => {
      const books = await BooksService.getAll();
      const id = books[0]._id;
      const findByIdSpy = jest.spyOn(BookModel, 'findById');

      await BooksService.getById(id);
      expect(findByIdSpy).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should call BookModel.findOneAndUpdate with the correct arguments', async () => {
      const book = await BooksService.getAll();
      const id = book[0]._id;
      const bookUpdate = {
        _id: id,
        name: 'Title',
        author: 'Author',
        pages: 100,
        price: 10,
        published: new Date(),
      };
      const findOneAndUpdateSpy = jest.spyOn(BookModel, 'findOneAndUpdate');

      await BooksService.update(id, bookUpdate);
      expect(findOneAndUpdateSpy).toHaveBeenCalledWith({ _id: id }, { $set: bookUpdate }, { new: true });
    });
  });

  describe('remove', () => {
    it('should call BookModel.findByIdAndDelete with the correct arguments', async () => {
      const book = await BooksService.getAll();
      const id = book[0]._id;
      const findOneAndDeleteSpy = jest.spyOn(BookModel, 'findByIdAndDelete');

      await BooksService.remove(id);
      expect(findOneAndDeleteSpy).toHaveBeenCalledWith(id);
    });
  });
});
