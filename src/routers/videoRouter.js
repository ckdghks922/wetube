import express from 'express';
import {
  handleWatch,
  handleGetEdit,
  handlePostEdit,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id', handleWatch);
videoRouter.get('/:id/edit', handleGetEdit);
videoRouter.post('/:id/edit', handlePostEdit);

export default videoRouter;
