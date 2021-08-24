const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const Cource = new Schema(
  {
    _id: { type: Number },
    name: { type: String, maxLength: 255 },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    _id: false,
    timestamps: true,
  }
);

// Add plugin
mongoose.plugin(slug);
Cource.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

// Gíup làm tăng id tự động
Cource.plugin(AutoIncrement);
module.exports = mongoose.model("Cources", Cource);
