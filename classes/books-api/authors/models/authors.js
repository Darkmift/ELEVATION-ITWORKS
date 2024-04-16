import mongoose from 'mongoose';
const { Schema } = mongoose;

const authorSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  joined: { type: Date, default: new Date() },
});

const AuthorModel = mongoose.model('Author', authorSchema);

export default AuthorModel;
