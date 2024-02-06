import  {Router}  from "express";
import { getCategory, createCategory } from "../controller/category.js";

const router = Router();

router.get('/category', getCategory);
router.post('/category', createCategory);

export default router;