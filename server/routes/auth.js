const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../model/User");

// need field validation

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.status(400).json({ message: `A user with this email already exists.` });
    }

    const user = new User({ name, email, password });
    user.password = await bcrypt.hash(password, 7);

    await user.save();
    res.status(200).json({ message: "User created." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This user does not exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password." });
    }

    res.status(200).json({ message: "Successful login." });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
