import express from 'express';
import {contactFormSubmit} from '../controllers/contact.message.js'
const router = express.Router();

router.post('/contactmessage', contactFormSubmit);
export default router;