import express from 'express';
import {
  getUsers,
  addUsers,
  updateUser,
  deleteUser,
} from '../controller/userController.js';

const userRoutes = express.Router();

userRoutes.get('/', getUsers);
userRoutes.post('/', addUsers);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
