import { Request, Response } from "express";

export interface TestControllerInterface {
  get(req: Request, res: Response): void;
}
