import ServerExpress from '../app';

export const express: ServerExpress = ServerExpress.bootstrap();
const server = express.server;

server.listen(process.env.PORT || 8080, () => {
    // tslint:disable-next-line:max-line-length
    console.log(`Server Listen in port ${process.env.PORT || 8080}`);
});