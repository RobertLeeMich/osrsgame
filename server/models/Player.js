const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  attack: {
    type: Number,
    default: 1
  },
  hp: {
    type: Number,
    default: 10
  },
  fishing: {
    type: Number,
    default: 1
  },
  cooking: {
    type: Number,
    default: 1
  },
  inventory: {
    type: [String],
    default: []
  }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
