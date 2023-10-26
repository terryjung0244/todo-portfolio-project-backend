import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  id: { type: String, required: [true] },
  title: { type: String },
  completed: { type: Boolean },
});

export default mongoose.model('Todo', todoSchema);
