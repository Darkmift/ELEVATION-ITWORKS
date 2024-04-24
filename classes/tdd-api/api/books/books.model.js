import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  published: {
    type: Date,
    required: true,
  },
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;
