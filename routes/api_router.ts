import { Router } from 'express';

import BaseRoute from '../common/base_router';
/**
 * / route
 *
 * @class Api
 */
export class ApiRoutes extends BaseRoute {
    public static path = '/api';
    private static instance: ApiRoutes;

    /**
     * @class ApiRoutes
     * @constructor
     */
    private constructor() {
        super('');
        this.init();
    }

    /**
     * @class ApiRoute
     * @method getRouter
     * @returns {Router}
     */
    public static get router(): Router {
        if (!this.instance) {
            this.instance = new ApiRoutes();
        }
        return this.instance.router;
    }

    /**
   * @class ApiRoute
   * @method init
   */
    private init() {
        this.router.get('/', (req, res) => {
            res.status(200).json({
                message: 'khoa sieu dep trai'
            });
        });
    }
}