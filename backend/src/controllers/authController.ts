import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import models from '../models';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  const existingUser = await models.User.findOne({ where: { email } });

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await models.User.create({ email, username, password: hashedPassword });

  const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ token, user: newUser }); // Return both token and user
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await models.User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user }); // Return both token and user
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const user = await models.User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { password, ...userInfo } = user.toJSON();
    res.json(userInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
