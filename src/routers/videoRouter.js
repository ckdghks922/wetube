import express from 'express';
import { handleWatch, handleDelete } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/watch', handleWatch);
videoRouter.get('/delete', handleDelete);

export default videoRouter;
