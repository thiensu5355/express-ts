import * as express from 'express';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).json({
        data: {
            id: '1',
            userName: 'hndkhoa'
        }
    });
});

export default router;