import * as express from 'express';
const router = express.Router();

export default class BaseRouter {
    constructor(
        protected URI:string
    ) {}
}