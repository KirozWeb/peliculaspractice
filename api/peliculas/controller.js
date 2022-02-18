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

module.exports = controladorPeliculas;