import { Request, Response } from 'express';

export default [
  {
    path: '/',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      res.send('Hello world!');
    },
  },
];
