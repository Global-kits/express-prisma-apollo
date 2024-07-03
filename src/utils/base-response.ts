import { Response } from "express";

export class BaseResponse {
  /** For success response */
  static susRes<Data>(
    res: Response,
    data: Data,
    msg: string = "Data get by these api.",
    statusCode: number = 200,
  ): Response {
    return res.status(statusCode).json({
      success: true,
      msg,
      data,
    });
  }

  /** For error response */
  static errRes<Data>(
    res: Response,
    error_msg: Data,
    msg: string = "Sorry, Error get by these api.",
    statusCode: number = 400,
  ): Response {
    return res.status(statusCode).json({
      error: true,
      msg,
      error_msg,
    });
  }
}
