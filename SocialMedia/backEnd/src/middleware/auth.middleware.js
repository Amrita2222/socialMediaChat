import jwt from 'jsonwebtoken';
import User from "../models/Users.js";

export const protectRoute = async (req, res, next) => {
  try {
    console.log(req.cookies)
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded || !decoded.id) {
      return res.status(401).json({ message: "Unauthorized access - Invalid token" });
    }

    const user = await User.findById(decoded.id).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
