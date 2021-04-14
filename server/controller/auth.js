const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_KEY, JWT_EXPIRES_IN } = require("../config");
const User = require("../model/User");

// need field validation

const signin = async (req, res) => {
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

    const token = generateAccessToken({ id: user._id, name: user.name, email: user.email });

    res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: `sign in error.` });
  }
};

const signup = async (req, res) => {
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
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "sign up error." });
  }
};

const generateAccessToken = ({ id, name, email }) => {
  const payload = {
    id,
    name,
    email,
  };
  return jwt.sign(payload, JWT_KEY, { expiresIn: JWT_EXPIRES_IN });
};

module.exports = { signin, signup };
