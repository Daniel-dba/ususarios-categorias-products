import { Router } from 'express';
import {
  getCategorias,
   createCategoria,
   getCategoria,
   updateCategoria,
   deleteCategoria,
} from '../controllers/Categoria.controller.js';
import { verifyToken } from '../app.js';
const router = Router();

// Routes
router.get('/',verifyToken, getCategorias);

router.post('/',verifyToken, createCategoria);

 router.put('/:id',verifyToken, updateCategoria);

router.delete('/:id',verifyToken, deleteCategoria);

 router.get('/:id',verifyToken, getCategoria);

export default router;
