const { Schema, model } = require("mongoose");

const BoardSchema = new Schema({
  title: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: "users", required: true }],
  lists: [{ type: Schema.Types.ObjectId, ref: "lists" }],
});

module.exports = model("board", BoardSchema);
