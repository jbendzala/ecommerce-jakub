import jwt from 'jsonwebtoken';
import { Response } from 'express';
import bcrypt from 'bcrypt';

type User = {
  id: string;
  username: string;
};

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};

export const createJWT = (user: User) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res: Response, next) => {
  const bearer: string = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: 'Not authorized' });
    return;
  }

  const [, token] = bearer.split(' ');

  if (!token) {
    res.status(401);
    res.json({ message: 'Invalid token' });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (e) {
    res.status(401);
    res.json({ message: 'Invalid token' });
    return;
  }
};
