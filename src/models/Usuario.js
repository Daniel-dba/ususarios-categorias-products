import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Categoria } from './Categoria.js';
import { Product } from './Product.js';

export const Usuario = sequelize.define(
  'Usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      //autoIncrement: false,
      //defaultValue: () => { }
      allowNull: false
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
  // {
  //   timestamps: false,
  // }
);

Usuario.hasMany(Categoria, {
  foreignKey: 'usuario_id',
  sourceKey: 'id',
});

// Categoria.belongsTo(Usuario, {
//   foreignKey: 'usuario_id',
//   targetKey: 'id',
// });

Usuario.hasMany(Product, {
  foreignKey: 'usuario_id',
  sourceKey: 'id',
});

// Product.belongsTo(Usuario, {
//   foreignKey: 'usuario_id',
//   targetKey: 'id',
// });
