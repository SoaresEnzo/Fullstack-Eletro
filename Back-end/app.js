var app = require('./config/server')
const connection = require("./config/mongoConn");
const Produtos = require('./models/Comentarios')

var rotaProdutos = require('./routes/getProdutos')(app)
var rotaPedidos = require('./routes/getPedidosJoined')(app)
var rotaCategorias = require('./routes/getCategorias')(app)
var rotaComentarios = require('./routes/comentarios')(app)

