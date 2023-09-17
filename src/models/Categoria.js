import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
//import { Usuario } from './Usuario.js';
import { Product } from './Product.js';

export const Categoria = sequelize.define('Categoria', {
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
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Categoria.hasMany(Usuario, {
//   foreignKey: 'UsuarioId',
//   sourceKey: 'id',
// });

// Usuario.belongsTo(Categoria, {
//   foreignKey: 'UsuarioId',
//   targetKey: 'id',
// });

 Categoria.hasMany(Product, {
  foreignKey: 'usuario_id',
  sourceKey: 'id',
 });

// Product.belongsTo(Categoria, {
//   foreignKey: 'UsuarioId',
//   targetKey: 'id',
// });
