import express from 'express'
import { uploadingProduct } from "../controller/product_conroller.js"
import { imageUpload } from '../config/imageupload.js';

const router = express.Router();

router.post('/product', imageUpload, uploadingProduct)

export default router;