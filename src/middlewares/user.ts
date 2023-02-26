import { NextFunction, Request, Response } from 'express';
import { IUser, User } from '../db/models/User';

declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser;
  }
}

const userMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.header('x-community-user-id');
  if (userId == null) {
    res.status(400).send('User Id not provided');
    return;
  }
  // fetch user
  const user = await User.findById(userId);
  if (user == null) {
    res.status(404).send('User not found');
    return;
  }
  req.user = user;
  next();
};

export { userMiddleware };
