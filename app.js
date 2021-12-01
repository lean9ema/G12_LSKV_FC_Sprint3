const express = require('express');
const app = express();

const mainRutas = require('./routers/main ');

app.use('/', (req,res)=>{
    res.sendFile();
});

app.listen (3000, () =>{
    console.log('Servidor funcionando en el puerto 3000')
})