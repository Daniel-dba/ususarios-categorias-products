import express from 'express';
import { v4 } from 'uuid';

const app = express();

const Categoria = [];

// Middlewares
app.use(express.json());

// Routes

app.get('/ping', (req, res) => {
  res.send('Pong');
});

app.get('/Categoria', (req, res) => {
  res.status(200).json(Categoria);
});

app.post('/Categoria', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.sendStatus(400);

  const newCategoria = { ...req.body, id: v4() };
  Categoria.push(newCategoria);
  res.status(200).json(newCategoria);
});

export default app;
