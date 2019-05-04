import { Router } from 'express';

import BaseRoute from '../common/base_router';
/**
 * / route
 *
 * @class User
 */
export class UserRoutes extends BaseRoute {
  public static path = '/api/user';
  private static instance: UserRoutes;

  /**
   * @class UserRoutes
   * @constructor
   */
  private constructor() {
    super('');
    this.init();
  }

  /**
   * @class UserRoutes
   * @method getRouter
   * @returns {Router}
   */
  public static get router(): Router {
    if (!this.instance) {
      this.instance = new UserRoutes();
    }
    return this.instance.router;
  }

  /**
   * @class UserRoutes
   * @method init
   */
  private init() {
    this.router.get('/', (req, res) => {
      res.status(200).json({
        message: 'khoa dep trai'
      });
    });
  }
}