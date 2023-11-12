import express from 'express';
const router = express.Router();
import {createProduct,getProduct,deleteProduct,updateProduct} from '../controllers/product.controller.js';
import {verifyToken} from '../utils/verifyUser.js';

router.post('/createproduct', createProduct);
router.get('/getproduct', getProduct);
router.get('/deleteproduct', deleteProduct);
router.post('/updateproduct', updateProduct);

export default router;