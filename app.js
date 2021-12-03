const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static('public'));
app.set('view engine','ejs'); // Para "activar" ejs 
app.set('views',path.resolve(__dirname,'./src/views')); // No hace falta, cuando se tiene a views en la parte principal 

const usersRoutes = require('./src/routers/userRoutes');

app.use('/users', usersRoutes);

app.listen (port, () =>{
    console.log(`Servidor funcionando en el puerto ${port}` )
})
