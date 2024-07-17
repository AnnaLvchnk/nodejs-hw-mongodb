import { Router } from "express";

import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';

import { userSignupSchema, userSigninSchema} from "../validation/user-schema.js";
import { loginController, signupController, refreshController, logoutController } from "../controllers/auth_controllers.js";

const authRouter = Router();

authRouter.post('/register', validateBody(userSignupSchema), ctrlWrapper(signupController));

authRouter.post('/login', validateBody(userSigninSchema), ctrlWrapper(loginController));

authRouter.post('/refresh', ctrlWrapper(refreshController));

authRouter.post('/logout', ctrlWrapper(logoutController));

export default authRouter;