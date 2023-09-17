# ususarios-categorias-products
 ususarios-categorias-products

 # Instalacion de paquetes

 npm i init-y
 npm i nodemon
npm i  express morgan sequelize
npm i pg pg-hstore
npm i sequelize-cli -D
npm i dotenv
npm run dev (Añadir en el package.json en scripts  "scripts": {
    "dev": "nodemon src/index.js"
  },)
npm i pino
npm i jsonwebtoken

# Pasos a considear json web token (autenticación)

1.-CREAR UN API login para poder verificar que esten correctos los datos (correo y contrasena)
2.- Una vez verificado, obtenemos el id del Usuario y generamos un jwt(json web token) al cliente  (el cliente lo guarda el jwt, generalmente en las cookies)
3.- header autorizacion bearer: jwt (desencriptar  https://jwt.io/)
4.- bearer (jwt) // verificamos y obtenemos el id (llave), con esa llave le devolvemos si esta o no autorizado

# documentacion oficial sequelize

https://sequelize.org/docs/v6/getting-started/