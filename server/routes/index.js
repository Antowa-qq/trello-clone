const express = require("express");
const router = express.Router();
const auth = require("./auth");
const board = require("./board");

router.use("/", auth);
router.use("/", board);

module.exports = router;
