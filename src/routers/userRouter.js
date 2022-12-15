import express from 'express';
import { handleLogout, handleEdit, handleDelete, handleSee } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/logout', handleLogout);
userRouter.get('/edit', handleEdit);
userRouter.get('/delete', handleDelete);
userRouter.get('/:id', handleSee);

export default userRouter;
