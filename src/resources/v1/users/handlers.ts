import { Request, Response } from 'express';
import { UserInput, UserInputSchema } from '../../../types/inputSchemas';
import { createUser } from './providers';

const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userPayload = req.body as UserInput;
  UserInputSchema.parse(userPayload);
  const user = await createUser(userPayload);
  res.send(user);
};

export { createUserController };
