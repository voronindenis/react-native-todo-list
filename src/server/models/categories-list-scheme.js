const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoryItemSchema = new Schema(
  {
    text: { type: String },
  },
  { collection: 'categories_list' }
);

module.exports = mongoose.model('CategoryItem', categoryItemSchema);
