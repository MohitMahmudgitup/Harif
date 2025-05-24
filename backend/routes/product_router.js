import express from 'express'
import { uploadingProduct, getProduct, editProduct,deleteProduct } from "../controller/product_conroller.js"
import { productUpload } from '../config/productUpload.js';

const router = express.Router();

router.post('/product', productUpload, uploadingProduct)
router.get('/getproduct', getProduct)
router.put('/product/:id',productUpload, editProduct);
router.delete('/product/:id',deleteProduct);

export default router;