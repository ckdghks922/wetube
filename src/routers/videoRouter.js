import express from 'express';
import {
  handleWatch,
  handleGetUpload,
  handlePostUpload,
  handleGetEdit,
  handlePostEdit,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.route('/upload').get(handleGetUpload).post(handlePostUpload);
videoRouter.get('/:id', handleWatch);
videoRouter.route('/:id/edit').get(handleGetEdit).post(handlePostEdit);

export default videoRouter;
