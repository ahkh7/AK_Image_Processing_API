import express from 'express';
import resizeTool from './api/imgs';
import { queryValid } from '../middlewares/queryValidation';

const routes = express.Router();

routes.get('/error', (req: express.Request, res: express.Response): void => {
  res.send('Erorr : try fix your inputs and try again');
});

routes.use('/images', queryValid, resizeTool);

export default routes;
