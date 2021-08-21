const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cource = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cources", Cource);
