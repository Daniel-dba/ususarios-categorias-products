import express from 'express';
import morgan from 'morgan';

const app = express();

// Import routes
import UsuarioRoutes from './routes/Usuarios.routes.js';
import CategoriaRoutes from './routes/Categorias.routes.js';
import ProductRoutes from './routes/Products.routes.js';

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/Usuarios', UsuarioRoutes);
app.use('/api/Categorias', CategoriaRoutes);
app.use('/api/Products', ProductRoutes);

export default app;
