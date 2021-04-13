const { Schema, model } = require("mongoose");

const CardSchema = new Schema({
  title: String,
  list: { type: Schema.Types.ObjectId, required: true, ref: "list" },
});

module.exports = Card = model("card", CardSchema);
