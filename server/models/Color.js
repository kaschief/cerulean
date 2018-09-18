const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name: {
    type: String
  },
  hex: {
    type: String,
    unique: true
  },
  rgb: {
    r: Number,
    g: Number,
    b: Number
  },
  related: {
    type: [String],
    default: []
  },
  _owner: { type: Schema.Types.ObjectId, ref: 'User' },
  isFavorite: { type: Boolean, default: false }
});

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;
