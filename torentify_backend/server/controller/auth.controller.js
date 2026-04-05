import db from "../models/index.js"; // ✅ Default import
const { Admin } = db;               // ✅ Destructure Admin from db

import bcrypt from "bcryptjs";
import { generateToken } from "../services/token.services.js";

export const signup = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    const user = await Admin.create({ ...req.body, password: hashed });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Admin.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = generateToken(user);

    res.json({
      message: "Login successful",
      id: user.id,
      email: user.email,
      fullname: user.fullName,
      role: user.role,
      token
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


