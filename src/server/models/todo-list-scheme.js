const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  title: String,
  categoryId: String,
  description: String,
  expirationDate: String,
  isDone: Boolean,
});

module.exports = mongoose.model('TodoList', todoListSchema);
