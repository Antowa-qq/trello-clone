const express = require("express");
const Board = require("../model/Board");
const User = require("../model/User");
const List = require("../model/List");
const router = express.Router();

// get all boards
router.get("/", async (req, res) => {
  try {
    const boards = await Board.find({});
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});


//create news boards
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    // get user id

    const userId = "6074ee1f6959a73678245e7d";

    const board = new Board({ title, users: [userId] });

    await board.save();

    res.status(200).json({ message: "Board save." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    const { id } = req.body;

    await Board.deleteOne({ _id: id });

    res.status(200).json({ message: "Board delete." });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;


//получить все доски
// получить 
