//import dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// starting Express
const server = express();
server

//utilizando os arquivos estáticos
.use(express.static('public'))

//config template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//creating routes
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)

//starting server
server.listen(5500)