
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRES_IN || "1d",
  });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, phone, address, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, phone, address and password are required." });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "Email already registered." });
    }

    const user = new User({ name, email, phone, address, password });
    await user.save();

    const token = generateToken({ id: user._id });

    return res.status(201).json({
      message: "User created",
      user: user.toJSON(),
      token,
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password required." });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ message: "Invalid credentials." });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });

    const token = generateToken({ id: user._id });

    return res.json({
      message: "Login successful",
      user: user.toJSON(),
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};


exports.getUsers = async (req, res) => {
  try {
   
    const users = await User.find().select("name email phone address createdAt updatedAt");
    return res.json(users);
  } catch (err) {
    console.error("Get users error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
