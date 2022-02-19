const jwt = require('jsonwebtoken');
require('dotenv').config();

function crearToken(usuario){
    /**
     * id,
     * nombre,
     * roles
     */

    const payload = {
        "id": usuario._id,
        "nombre": usuario.nombre,
        "roles" : usuario.roles
    }

    const token = jwt.sign(payload, process.env.JWT_CLAVE, {expiresIn: process.env.JWT_EXPIRES});
    return token;
}
module.exports.crearToken = crearToken;