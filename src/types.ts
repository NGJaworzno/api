import { NextFunction, Request, Response } from 'express';
import { ObjectID } from 'typeorm-plus';
import Admin from '@entities/Admin.entity';

export type ID = string | number | Date | ObjectID;

export interface UserRequest extends Request {
  user?: Admin;
}

export type Handler = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

export type Method = 'all' | 'get' | 'post' | 'put'| 'delete' | 'patch' | 'options' | 'head';

export type Route = {
  path: string;
  method: Method;
  handler: Handler | Handler[];
};

export enum ParticipantRole {
  Spectator,
  Helper,
  Player,
}
