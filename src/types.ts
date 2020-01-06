import { NextFunction, Request, Response } from 'express';

export type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

export type Method = 'all' | 'get' | 'post' | 'put'| 'delete' | 'patch' | 'options' | 'head';

export type Route = {
  path: string;
  method: Method;
  handler: Handler | Handler[];
};

export enum UserRole {
  Spectator,
  Helper,
  Player,
}

