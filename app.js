//IMPORTAR MODULOS REQUERIDOS
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const controladorPeliculas = require('./api/peliculas/controller');
const controladorUsuarios = require('./api/usuarios/controller');
const basedatos = require('./database/conection')

require('dotenv').config();




/**
  * INICIAR EXPRESS
  */
 const app = express();

/**
 * INICIAR LA CONFIGURACION
 */
 const puerto = process.env.PORT;

app.use(bodyParser.json()); //TRANSFORMA LA PETICION EN JSON AUTOMATICAMENTE
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan(process.env.MORGAN_MODE));

/**
 * INICIAR RUTAS/CONTROLADORES
 */
//localhost:3200

app.use("/api/peliculas",controladorPeliculas);
app.use("/api/usuarios",controladorUsuarios);

basedatos.conectar()
    .then(function(){
        app.listen(puerto,function(){
            console.log("API Ejecutandose en el puerto " + puerto);
            console.log(basedatos.obtenerConexion());
        });
    })
    .catch(function(error){
        console.log(error);
    });
/*
app.listen(puerto, ()=>{
    console.log(`API listening at http://localhost:${puerto}`)
});*/