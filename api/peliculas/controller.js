const express = require('express');
const controladorPeliculas = express.Router();
const servicioPeliculas = require('./service');

/**
 * BUSCAR TODAS LAS PELICULAS
 */
controladorPeliculas.get("/obtenerPeliculas", async function(req,res){
    let peliculas = await servicioPeliculas.obtenerPeliculas();
    res.send({
        "mensaje" : "Listado de peliculas",
        "data" : peliculas
    })
})

controladorPeliculas.get("/obtenerPelicula/:id", async function(req,res){
    let id = req.params.id;
    let pelicula = await servicioPeliculas.obtenerPelicula(id);
    res.send({
        "mensaje" : "Detalle pelicula",
        "data" : pelicula
    })
})

controladorPeliculas.get("/buscarPeliculasTitulo/:titulo", async function(req,res){
    let titulo = req.params.titulo;
    let peliculas = await servicioPeliculas.buscarPeliculasTitulo(titulo);
    res.send({
        "mensaje" : "Detalle pelicula",
        "busqueda" : titulo,
        "data" : peliculas
    })
})

/**
 * 3 FORMAS PARA CAPTURAR LA INFORMACION DE UNA PETICION
 * PARAMETROS -> GET/POST/PUT/DELETE
 * QUERY STRING -> ?clave=valor&clave=valor /GET/POST/PUT/DELETE
 * CUERPO (BODY)-> POST/PUT 
 */


controladorPeliculas.post("/crearPelicula",async function(req,res){
    let peliculaNueva = req.body;
    let respuesta = await servicioPeliculas.crearPelicula(peliculaNueva);
    res.send(respuesta);
})

/*
http://localhost:3200/api/peliculas/actualizaPelicula/sdslkj999292
      {
          "titulo":"nuevoTitulo",
          "ano" : nuevoAno
      }
*/
controladorPeliculas.put("/actualizarPelicula/:id", async function(req,res){
    console.log("controlador");
    let id = req.params.id;
    let pelicula = req.body;
    let respuesta = await servicioPeliculas.actualizarPelicula(id,pelicula);
    res.send(respuesta);
})

controladorPeliculas.delete("/eliminarPelicula",async function(req,res){
    console.log("Eliminar pelicula");
    let id = req.query.id;
    let respuesta = await servicioPeliculas.eliminarPelicula(id);
    res.send(respuesta);
})

module.exports = controladorPeliculas;