const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const { name, email, password } = req.body;
    res.status(200).json({ name, email, password });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
