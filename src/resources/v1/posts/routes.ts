import { Router } from 'express';
import { createPost } from './handlers';
import asyncHandler from 'express-async-handler';
import { userMiddleware } from '../../../middlewares/user';

const postRouter = Router({ mergeParams: true });

postRouter.post('/', [asyncHandler(userMiddleware)], asyncHandler(createPost));

export { postRouter };
