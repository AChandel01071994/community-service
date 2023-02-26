import { Router } from 'express';
import { postRouter } from './posts/routes';
import { userRouter } from './users/routes';

const v1Router = Router();

v1Router.use('/post', postRouter);
v1Router.use('/user', userRouter);

export { v1Router };
