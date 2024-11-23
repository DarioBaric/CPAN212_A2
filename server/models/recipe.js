const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  difficulty: String,
  ingredients: [String],
  steps: [String],
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
