const Schema = require('mongoose').Schema;

const tipSchema = new Schema({
  shown: Number,
  likes: Number,
  dislikes: Number
});

module.exports = tipSchema;
