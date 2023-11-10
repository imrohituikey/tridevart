import express from 'express';
import {signUp,signIn,signingoogle} from '../controllers/user.auth.js'

const router = express.Router();

router.post("/signup",signUp);
router.post("/signin",signIn);
router.post("/signingoogle",signingoogle);

export default router;
