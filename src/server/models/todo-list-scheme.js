const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoItemSchema = new Schema(
  {
    title: { type: String },
    categoryId: { type: Schema.Types.ObjectId },
    description: { type: String },
    expirationDate: { type: String },
    isDone: { type: Boolean },
  },
  { collection: 'todo_list' }
);

module.exports = mongoose.model('TodoItem', todoItemSchema);
