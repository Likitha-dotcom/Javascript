const mongoose = require('mongoose');

const Book = mongoose.Schema({
  ISBN: { type: Number,  unique: true  },
  name: { type: String, required: true },
  price: { type: Number  },
  isInStock: {type: Boolean, required:true},
  edition: Number,
  printDate: Date,
});

module.exports = mongoose.model('book', Book);
