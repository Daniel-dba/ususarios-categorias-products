import { Product } from '../models/Product.js';

export async function getProducts(req, res) {
  try {
    const Products = await Product.findAll({
      attributes: ['id', 'UsuarioId', 'categoria_id', 'estado' , 'precio_unitario' , 'name'],
      order: [['id', 'DESC']],
    });

    res.json(Products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createProduct(req, res) {
  const { name, precio_unitario , estado, categoria_id, UsuarioId } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      precio_unitario,
      estado,
      categoria_id,
      UsuarioId,
    });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getProduct(req, res) {
  const { id } = req.params;
  try {
    const Product = await Product.fi({
      where: { id },
    });
    return res.json(Product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;

  try {
    const Product = await Product.fi({
      attributes: ['UsuarioId', 'categoria_id', 'estado' , 'precio_unitario' , 'name',  'id'],
      where: { id },
    });

    Product.set(req.body);

    await Product.save();

    return res.json(Product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: { UsuarioId: id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
