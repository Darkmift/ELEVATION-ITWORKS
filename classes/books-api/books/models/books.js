import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
  authorId: { type: mongoose.Schema.ObjectId, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;
