const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VoteSchema = require('./voteSchema');
const TipSchema = require('./tipSchema');

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  avatarURL: String,
  sleep: [ VoteSchema ],
  food: [ VoteSchema ],
  fitness: [ VoteSchema ],
  social: [ VoteSchema ],
  relaxing: [ VoteSchema ],
  likedTips: [ TipSchema ]
});

module.exports = UserSchema;
