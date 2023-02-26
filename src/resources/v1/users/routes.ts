import { Router } from 'express';
import { createUserController } from './handlers';
import asyncHandler from 'express-async-handler';

const userRouter = Router({ mergeParams: true });

userRouter.post('/', asyncHandler(createUserController));

export { userRouter };
