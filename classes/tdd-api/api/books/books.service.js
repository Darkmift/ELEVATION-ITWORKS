import BookModel from './books.model';

export default class BooksService {
  static async create(book) {
    return BookModel.create(book);
  }

  static async getAll() {
    return BookModel.find();
  }

  static async getById(id) {
    return BookModel.findById(id);
  }

  static async update(id, book) {
    return BookModel.findOneAndUpdate({ _id: id }, { $set: book }, { new: true });
  }

  static async remove(id) {
    return BookModel.findByIdAndDelete(id);
  }
}
