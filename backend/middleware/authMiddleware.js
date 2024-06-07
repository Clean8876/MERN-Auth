
import jwt from 'jsonwebtoken';
import asyncHandler from "express-async-handler"
 export const authenticateToken = asyncHandler(async(req, res, next) => {
    try {
  const token = req.cookies.JWT;
  if (!token) {
    return res.status(403).json({ message: 'A token is required for authentication' });
  }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user =    decoded.userId ;
    next(); 
  } catch(err) {
    return res.status(401).json({ message: 'Invalid Token'});
  }
});

