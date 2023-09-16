import { Router } from 'express';
import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/Product.controller.js';

const router = Router();

// Routes
router.get('/', getProducts);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.get('/:id', getProduct);

export default router;
