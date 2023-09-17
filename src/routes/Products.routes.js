import { Router } from 'express';
import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/Product.controller.js';
import { verifyToken } from '../app.js';
const router = Router();

// Routes
router.get('/',verifyToken, getProducts);

router.post('/',verifyToken, createProduct);

router.put('/:id',verifyToken, updateProduct);

router.delete('/:id',verifyToken, deleteProduct);

router.get('/:id',verifyToken, getProduct);

export default router;
