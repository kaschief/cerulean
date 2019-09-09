const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  hex: {
    type: String
  },
  name: {
    type: String
  },
  rgb: {
    r: Number,
    g: Number,
    b: Number
  },
  meaning: {
    type: String
  },
  family: {
    type: String
  },
  analagous: {
    type: [String],
    default: []
  },
  tetrad: {
    type: [String],
    default: []
  },
  splitcomplement: {
    type: [String],
    default: []
  },
  monochromatic: {
    type: [String],
    default: []
  },
  _owner: { type: Schema.Types.ObjectId, ref: 'User' },
  isFavorite: { type: Boolean, default: true }
});

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;
