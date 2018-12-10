const Schema = require('mongoose').Schema;
const TipSchema = require('./tipSchema');

const TipsSchema = new Schema({
  sleep: [ TipSchema ],
  food: [ TipSchema ],
  relaxing: [ TipSchema ],
  fitness: [ TipSchema ],
  social: [ TipSchema ]
});

module.exports = TipsSchema;
