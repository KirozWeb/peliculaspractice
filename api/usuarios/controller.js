const express = require('express');
const controladorUsuarios = express.Router();

/**
 * POST -> LOGIN
 * GET -> OBTENER EL USUARIO POR EL ID
 */

controladorUsuarios.get("/obtenerUsuario/:id",function(req,res){
    let id = req.params.id;
    res.send("id del usuario: " + id);
});

module.exports = controladorUsuarios;