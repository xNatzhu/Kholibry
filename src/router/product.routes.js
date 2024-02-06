import  {Router}  from "express";

import { createProduct, deleteProduct, getProduct, getProductId, updateProduct } from "../controller/product.js";

const router = Router();

router.get('/product', getProduct);
router.get('/product/:id', getProductId);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;