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

async function crearPelicula(peliculaNueva){
    //let respuesta = await modeloPeliculas.crearPelicula(peliculaNueva);
    let resultado = {}
    if(peliculaNueva && Object.keys(peliculaNueva).length){
        if(peliculaNueva.titulo && peliculaNueva.titulo !== ""){
            let resultadoPelicula = await modeloPeliculas.crearUna(peliculaNueva);
            /**
             * "acknowledge" : true/false
             * "insertedId" : objectId()
             */

            if(resultadoPelicula && resultadoPelicula.acknowledged){
                resultado.mensaje = "Pelicula creada correctamente";
                resultado.datos = resultadoPelicula;
            }else{
                resultado.mensaje = "error al crear pelicula";
                resultado.datos = peliculaNueva;
            }
        }else{
            resultado.mensaje = "El titulo debe existir y no debe ser vacio";
            resultado.datos = peliculaNueva;
        }
    }else{
        resultado.mensaje = "No hay datos";
    }
    
    return resultado;
}

async function actualizarPelicula(id,pelicula){
    let resultado = {}
    /**
     * 1.SU LONGITUD ES DE 24
     * 2.0-9 A-F
     */

    if(id.length == 24 && /^[0-9a-f]+$/i.test(id)){
        if(pelicula && Object.keys(pelicula).length){
            let resultadoPelicula = await modeloPeliculas.actualizarUna(id,pelicula);
            if(resultadoPelicula && resultadoPelicula.acknowledged){
                resultado.mensaje = "Pelicula Actualizada";
                resultado.datos = resultadoPelicula;
            }else{
                resultado.mensaje = "Se presentó un error al actualizar la pelicula";
                resultado.datos = {"id":id,"pelicula":pelicula}
            }
        }else{
            resultado = "No hay datos";
        }        
    }else{
        resultado.mensaje = "ID invalido";
        resultado.datos = id;
    }
    return resultado;
}

async function eliminarPelicula(id){
    let resultado = {};
    if(id && id.length == 24 && /^[0-9a-f]+$/i.test(id)){
        let resultadoEliminar = await modeloPeliculas.eliminarUna(id);
        if(resultadoEliminar && resultadoEliminar.acknowledged){
            resultado.mensaje = "Pelicula eliminada correctamente";
            resultado.datos = resultadoEliminar;            
        }
        else{
            resultado.mensaje = "Error al eliminar la pelicula";
            resultado.datos = id;
        }
    }else{
        resultado.mensaje = "ID invalido";
        resultado.datos = id;
    }
    return resultado;
}


module.exports.obtenerPeliculas = obtenerPeliculas;
module.exports.obtenerPelicula = obtenerPelicula;
module.exports.buscarPeliculasTitulo = buscarPeliculasTitulo;
module.exports.crearPelicula = crearPelicula;
module.exports.actualizarPelicula = actualizarPelicula;
module.exports.eliminarPelicula = eliminarPelicula;