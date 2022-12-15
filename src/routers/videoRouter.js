import express from 'express';
import { handleUpload, handleSee, handleEdit, handleDelete } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/upload', handleUpload);
videoRouter.get('/:id', handleSee);
videoRouter.get('/:id/edit', handleEdit);
videoRouter.get('/:id/delete', handleDelete);

export default videoRouter;
