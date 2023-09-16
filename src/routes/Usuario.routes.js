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

const router = Router();

// Routes
router.get('/', getUsuarios);

router.post('/', createUsuario);

router.get('/:id', getUsuario);

router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

router.get('/:id/Categorias', getUsuarioCategorias);

router.get('/all/Categorias/all', getUsuariosCategorias);

export default router;
