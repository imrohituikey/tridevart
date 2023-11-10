import express from 'express';
import {signUp,signIn,signingoogle,signOut} from '../controllers/user.auth.js'

const router = express.Router();

router.post("/signup",signUp);
router.post("/signin",signIn);
router.post("/signingoogle",signingoogle);
router.get('/signout', signOut)
export default router;
