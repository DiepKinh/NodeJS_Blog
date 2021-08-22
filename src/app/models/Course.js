const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Cource = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

// Add plugin
mongoose.plugin(slug);
Cource.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Cources", Cource);
