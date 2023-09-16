import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Categoria } from './Categoria.js';
import { Product } from './Product.js';

export const Usuario = sequelize.define(
  'Usuarios',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      //autoIncrement: false,
      //defaultValue: () => { }
      //allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'nombre del producto',
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'correo electronico',
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'contrseña',
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

Usuario.hasMany(Categoria, {
  foreignKey: 'UsuarioId',
  sourceKey: 'id',
});

Categoria.belongsTo(Usuario, {
  foreignKey: 'UsuarioId',
  targetKey: 'id',
});

Usuario.hasMany(Product, {
  foreignKey: 'UsuarioId',
  sourceKey: 'id',
});

Product.belongsTo(Usuario, {
  foreignKey: 'UsuarioId',
  targetKey: 'id',
});
