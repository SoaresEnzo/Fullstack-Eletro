var app = require('./config/server')

var rotaProdutos = require('./routes/getProdutos')(app)
var rotaComentarios = require('./routes/getComentarios')(app)
var rotaPedidos = require('./routes/getPedidosJoined')(app)
var rotaCategorias = require('./routes/getCategorias')(app)

app.listen(5000,()=>{
    console.log('Back-end rodando')
})