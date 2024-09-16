import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secretKey = 'your-secret-key'; // Replace with your own secret key

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    // Attach the decoded payload to the request object
    req.user = decoded;
    next();
  });
};