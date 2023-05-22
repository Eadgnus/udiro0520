import express from "express";
import * as authController from "../controller/auth.js"
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.get('/');

router.get('/map');

router.get('/culture');

router.get('/me', isAuth, authController.me);

export default router;