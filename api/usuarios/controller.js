const express = require('express');
const controladorUsuarios = express.Router();
const servicioUsuarios = require('./service');

/**
 * GET -> LOGIN
 * POST -> CREAR EL USUARIO POR EL ID
 * 
 * usuario = {
 * "nombre": "xxxxx",
 * "usuario":"xxxxx", -> ENCRIPTAR CONTRASENA(BCRYPT)
 * "clave":"xxxxx",
 * "roles": ["a","b"]
 * }
 */

/**
 * CREAR USUARIO
 */
controladorUsuarios.get("/crearUsuarios/",async function(req,res){
    let datosUsuario = req.body;
    let resultado = await servicioUsuarios.crearUsuario(datosUsuario);
    res.send(resultado);
});
/**
 * INICIAR SESION
 */
controladorUsuarios.get("/iniciarSesion", async function(req,res){
    let datos = req.query;
    let resultado = await servicioUsuarios.iniciarSesion(datos);
    res.send(resultado);
});

module.exports = controladorUsuarios;