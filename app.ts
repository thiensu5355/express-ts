import * as express from 'express';
import { createServer, Server } from 'http';
import { ApiRoutes } from './routes/api_router';
import { UserRoutes }  from './routes/user_router';

export default class ServerExpress {
    public app: express.Application;
    public server: Server;

    public static bootstrap(): ServerExpress {
        return new ServerExpress();
    }

    constructor() {
        this.app = express();
        this.server = createServer(this.app);
        this.routes();
    }

    private routes = (): void => {
        this.app.use(ApiRoutes.path, ApiRoutes.router);
        this.app.use(UserRoutes.path, UserRoutes.router);
    }
}