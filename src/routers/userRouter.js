import express from 'express';
import { login, signup } from '../Controllers/authController.js';
import { protect } from '../middlewares/authMiddlewares.js';
import {
  getUser,
  updateUser,
  deleteUser,
  updatePassword,
} from '../Controllers/userController.js';
import {
  joiUserCreateValidator,
  joiUserUpdateValidator,
} from '../validators/joiValidators/joiUserValidator.js';
import { profilePicUploadParserer } from '../utils/parserers/imageUploadParserer.js';
import { resizeProfilePic } from '../utils/resizePic.js';

const userRouter = express.Router();

userRouter.post('/login', login);

userRouter.post(
  '/signup',
  profilePicUploadParserer,
  joiUserCreateValidator,
  resizeProfilePic,
  signup
);

userRouter.patch('/updatePassword', protect, updatePassword);

userRouter
  .route('/:userID')
  .get(protect, getUser)
  .patch(
    protect,
    profilePicUploadParserer,
    joiUserUpdateValidator,
    resizeProfilePic,
    updateUser
  )
  .delete(protect, deleteUser);

export default userRouter;
