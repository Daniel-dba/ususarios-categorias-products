import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Usuario } from './Usuario.js';
import { Categoria } from './Categoria.js';


export const Product = sequelize.define(
  'Products',
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
    precio_unitario: {
        type: DataTypes.NUMBER,
        allowNull: false,
        comment: 'precio del producto',
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    categoria_id: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'categoria_id del producto',
    },
    Usuario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
         comment: 'categoria_id del producto',
    },
   
  },
  {
    timestamps: false,
  }
);

Product.hasMany(Usuario, {
  foreignKey: 'UsuarioId',
  sourceKey: 'id',
});

Usuario.belongsTo(Product, {
  foreignKey: 'UsuarioId',
  targetKey: 'id',
});

Product.hasMany(Categoria, {
  foreignKey: 'UsuarioId',
  sourceKey: 'id',
});

Categoria.belongsTo(Product, {
  foreignKey: 'UsuarioId',
  targetKey: 'id',
});
