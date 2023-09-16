import { Usuario } from '../models/Usuario.js';
import { Categoria } from '../models/Categoria.js';

export async function getUsuarios(req, res) {
  try {
    const Usuarios = await Usuario.findAll({
      attributes: ['id', 'name', 'correo', 'contrasena' , 'estado'],
    });

    res.json(Usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUsuario(req, res) {
  console.log('Creating Usuario', req.body);
  const { name, correo, contrasena, estado } = req.body;
  try {
    const newUsuario = await Usuario.create(
      {
        name,
        correo,
        contrasena,
        estado,
      },
      {
        fields: ['name', 'correo', 'contrasena' , 'estado'],
      }
    );
    return res.json(newUsuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuario(req, res) {
  const { id } = req.params;
  try {
    const Usuario = await Usuario.findOne({
      where: { id },
    });
    return res.json(Usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateUsuario(req, res) {
  const { id } = req.params;
  const { name, correo, contrasena, estado } = req.body;

  try {
    const Usuario = await Usuario.findByPk(id);
    Usuario.name = name;
    Usuario.correo = correo;
    Usuario.contrasena = contrasena;
    Usuario.estado = estado;

    await Usuario.save();

    return res.json(Usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    await Categoria.destroy({
      where: { UsuarioId: id },
    });
    await Usuario.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuarioCategorias(req, res) {
  const { id } = req.params;
  try {
    const Categorias = await Categoria.findAll({
      attributes: ['id', 'UsuarioId', 'name', 'done'],
      where: { UsuarioId: id },
    });
    return res.json(Categorias);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuariosCategorias(req, res) {
  try {
    const Usuarios = await Usuario.findAll({
      attributes: ['id', 'name', 'correo', 'contrasena' , 'estado'],
      include: [
        {
          model: Categoria,
          attributes: ['id', 'name'],
          required: true,
        },
      ],
    });
    res.json(Usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
