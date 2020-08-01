/**
 * GET: buscar dados do back-end
 * POST: Criar uma afirmação do back-end
 * PUT: Alterando
 * DELETE: Deletando
 * 
 *  Query params: Parametros enviados na rota após o ponto de ? (filtros, paginação)
 *  route params: Parametros utilizados para identificar recursos
 *  request body: corpo da requisição
 * 
 * nodemom servidor
 * 
 * sql: sqlite knexjs
 * 
 */

const express = require('express');
const cors = require('cors')
const routes = require('./routes')
const app = express();

app.use(cors());

app.use(express.json())

app.use(routes)
app.listen(3333);