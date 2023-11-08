import express from 'express';
import {signUp} from '../middlewares/user.auth.js'

const router = express.Router();

router.post("/signup",signUp);

export default router;
