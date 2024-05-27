// src/types/types.ts
import { Request, Response, NextFunction } from 'express';

export interface ControllerMethod<T = void> {
  (req: Request, res: Response, next: NextFunction): T | Promise<T>;
}
