import { Request, Response } from 'express';

const createPost = async (_req: Request, res: Response): Promise<void> => {
  // TODO
  // validate input schema
  // create post
  res.send('OK');
};

export { createPost };
