import { Router } from 'express';
import {
  getUsuarios,
  createUsuario,
  getUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioCategorias,
  getUsuariosCategorias,
} from '../controllers/Usuario.controller.js';
import { verifyToken } from '../app.js';

const router = Router();

// Routes
router.get('/',verifyToken, getUsuarios);

router.post('/',verifyToken, createUsuario);

router.get('/:id',verifyToken, getUsuario);

router.put('/:id',verifyToken, updateUsuario);

router.delete('/:id',verifyToken, deleteUsuario);

router.get('/:id/Categorias',verifyToken, getUsuarioCategorias);

router.get('/all/Categorias/all',verifyToken, getUsuariosCategorias);

export default router;

