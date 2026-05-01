import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Prevent anyone from signing up with the Admin email
    if (email === process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: "This email is reserved for Admin use only" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role: "user", // Ensure role is always user for signups
    });

    res.status(201).json({
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const email = req.body.email?.trim();
    const password = req.body.password?.trim();

    // Check if it's the Admin logging in
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      let admin = await User.findOne({ email });
      
      // If admin doesn't exist in DB yet, create them
      if (!admin) {
        const hashedPassword = await bcrypt.hash(password, 10);
        admin = await User.create({
          fullName: "System Administrator",
          email: process.env.ADMIN_EMAIL,
          password: hashedPassword,
          role: "admin",
        });
      } else if (admin.role !== "admin") {
        // Ensure the fixed admin always has the admin role
        admin.role = "admin";
        await admin.save();
      }

      return res.json({
        id: admin._id,
        fullName: admin.fullName,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id),
      });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};