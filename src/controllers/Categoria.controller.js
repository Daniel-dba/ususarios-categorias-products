import { Categoria } from '../models/Categoria.js';

export async function getCategorias(req, res) {
  try {
    const Categorias = await Categoria.findAll({
      attributes: ['id', 'UsuarioId', 'name', ],
      order: [['id', 'DESC']],
    });

    res.json(Categorias);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCategoria(req, res) {
  const { name, UsuarioId } = req.body;
  try {
    const newCategoria = await Categoria.create({
      UsuarioId,
      name,
    });
    res.json(newCategoria);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getCategoria(req, res) {
  const { id } = req.params;
  try {
    const Categoria = await Categoria.fi({
      where: { id },
    });
    return res.json(Categoria);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateCategoria(req, res) {
  const { id } = req.params;

  try {
    const Categoria = await Categoria.fi({
      attributes: ['name', 'UsuarioId',  'id'],
      where: { id },
    });

    Categoria.set(req.body);

    await Categoria.save();

    return res.json(Categoria);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteCategoria(req, res) {
  const { id } = req.params;
  try {
    await Categoria.destroy({
      where: { UsuarioId: id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
