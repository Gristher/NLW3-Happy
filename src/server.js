//import dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// starting Express
const server = express();
server

//utilizar body da requisição
.use(express.urlencoded({extended: true}))
//utilizando os arquivos estáticos
.use(express.static('public'))

//config template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//creating routes
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//starting server
server.listen(5500)