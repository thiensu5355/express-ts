import { Response, Router } from 'express';
import * as statusCode from 'http-status-codes';

export default class BaseRouter {
  protected router = Router();

  constructor(
    protected URI: string
  ) { }

  protected replay(response: Response, handle: any): void {
    try {
      if (handle instanceof Error) {
        response.status(statusCode.BAD_REQUEST).json(handle);
      } else if (handle instanceof Object) {
        response.status(statusCode.OK).json(handle);
      }
    } catch (error) {
      response.status(statusCode.INSUFFICIENT_STORAGE).json(handle);
    }
  }
}