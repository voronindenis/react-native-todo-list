const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoriesListSchema = new Schema({
  text: String,
});

module.exports = mongoose.model('CategoriesList', categoriesListSchema);
