import express from 'express'
import { uploadingProduct } from "../controller/product_conroller.js"
import { productUpload } from '../config/productUpload.js';

const router = express.Router();

router.post('/product', productUpload, uploadingProduct)

export default router;