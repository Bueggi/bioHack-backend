const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  date: { type: Date, default: Date.now },
  value: Number
});

module.exports = VoteSchema;
