const express = require('express');
const path = require('path');
const app = express();

var mainRutas = require("./routers/main");

app.use('/', (req,res)=>{
    res.sendFile();
});

app.listen (3000, () =>{
    console.log('Servidor funcionando en el puerto 3000')
})