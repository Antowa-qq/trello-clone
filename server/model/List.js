const { Schema, model } = require("mongoose");

const ListSchema = new Schema({
  title: String,
  cards: [{ type: Schema.Types.ObjectId, ref: "cards" }],
  board: { type: Schema.Types.ObjectId, required: true, ref: "board" },
});

module.exports = List = model("list", ListSchema);
