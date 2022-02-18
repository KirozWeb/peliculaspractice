const modeloPeliculas = require('./model');

async function obtenerPeliculas(){
    let peliculas = await modeloPeliculas.buscarTodo();
    return peliculas;
}

async function obtenerPelicula(id){
    let pelicula = await modeloPeliculas.buscarPorId(id);

    /**
     * OPERACIONES ADICIONALES
     */

    return pelicula;
}

async function buscarPeliculasTitulo(titulo){
    let pelicula = await modeloPeliculas.buscarPorTitulo(titulo);

    return pelicula;
}

module.exports.obtenerPeliculas = obtenerPeliculas;
module.exports.obtenerPelicula = obtenerPelicula;
module.exports.buscarPeliculasTitulo = buscarPeliculasTitulo;