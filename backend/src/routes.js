const { Router }  = require('express');
const DevController = require('./controller/DevController');
const SearchController = require('./controller/SearchController');


const routes = Router();

/*
MÉTODOS HTTP: GET, POST, PUT, DELETE

TIPOS DE PARÂMETROS

QUERY PARAMS: REQUEST.QUERY(FILTROS, ORDENAÇÕES, PAGINAÇÃO, ...)
ROUTE PARAMS: REQUEST.PARAMS(IDENTIFICAR UM RECURSO NA ALTERAÇÃO OU NA REMOÇÃO)
BODY: REQUEST.BODY(DADOS PARA CRIAÇÃO OU ALTERAÇÃO DE UM REGISTRO)
*/
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;