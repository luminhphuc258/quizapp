import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UsersSchema from '../models/user.js';

export const checkUserRoleBeforeLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Ensure both username and password are provided
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }

    // Check if the user exists in the database
    let user = await UsersSchema.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password." });
    } else {
      // Compare hashed password with input
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid username or password." });
      }
    }

    // Assign role dynamically
    const userRole = UsersSchema.role === 1 ? "admin" : "user";

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: userRole },
      process.env.JWT_SECRET || 'happyquzi',
      { expiresIn: '1h' }
    );

    req.user = { username, role: userRole, token };

    console.log("User authenticated:", req.user);
    next();

  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
