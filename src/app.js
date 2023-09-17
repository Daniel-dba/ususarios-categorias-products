import express from 'express';
import morgan from 'morgan';

// Import routes
import UsuarioRoutes from './routes/Usuarios.routes.js';
import CategoriaRoutes from './routes/Categoria.routes.js';
import ProductRoutes from './routes/Products.routes.js';
import  JsonWebToken  from 'jsonwebtoken';

const app = express();



// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/Usuarios', UsuarioRoutes);
app.use('/api/Categorias', CategoriaRoutes);
app.use('/api/Products', ProductRoutes);

export default app;


app.post('/api/login' , async (req, res) => {
    //revisar en la database
         const user = await Usuario.findOne ({
        where: { contrasena: req.body.contrasena , correo: req.body.correo }})
    const jwt = JsonWebToken
    jwt.sign({ user }, 'secretkey', {expiresIn: '50s'} , (err, token) =>{
        res.json({token});
    });
})


export function verifyToken (req, res, next){
    const bearerHeader = req.headers['authorization'];
    console.log('bearerHeader' , bearerHeader)
    // bearer sakfndsfluidsf38hf8ashf8
    // [bearer, sakfndsfluidsf38hf8ashf8]
    if(typeof bearerHeader !== 'undefined'){
        const token = bearerHeader.split(' ')[1] 
        console.log('token' , token);
        jwt.verify(token, 'secretkey' , (error, usuario) => {
            if(error)res.sendStatus(403);
            else{
                req.usuario = usuario;
                next();
            }
        });      
    }else  res.sendStatus(403);
}


app.listen(3000)
console.log('listening on port 3000')