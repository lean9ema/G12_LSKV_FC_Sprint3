const path = require('path');
const mainController = {
    'home': function(req,res){
        res.send('Este es un msj del Controller, hacia el Home.');
    },
    'login': function(req,res){
        res.sendFile( path.join(__dirname, "../views/login.ejs") );
    }

}

module.exports = mainController;