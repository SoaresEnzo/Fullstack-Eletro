module.exports = () => {
    this.getComentarios = (connection, callback) => {
        connection.query("SELECT * FROM comentarios;", callback)
    }

    this.registerComentarios = (conteudo, connection, callback) => {
        connection.query(`INSERT INTO comentarios(nome,comentario) VALUES('${conteudo.nomemsg}','${conteudo.mensagemmsg}')`, callback)
    }

    this.getPedidosJoined = (connection, callback) => {
        connection.query("SELECT id_pedido,nome_cliente,bairro_endereco,logradouro_endereco,numero_endereco,cidade_endereco,telefone_cliente,quantidade,data_pedido,cpf_cliente,nome_produto,preco,nome_estado FROM fseletro.pedidos INNER JOIN produtos ON fk_produto = idproduto INNER JOIN estados ON estado_endereco = idestado;", callback)
    }

    this.registerOrder = (conteudo, connection, callback) => {
        connection.query(`INSERT INTO pedidos(nome_cliente,estado_endereco,bairro_endereco,logradouro_endereco,numero_endereco,cidade_endereco,telefone_cliente,quantidade,fk_produto,cpf_cliente) VALUES ('${conteudo.nomecliente}','${conteudo.estado}','${conteudo.bairro}','${conteudo.rua}','${conteudo.numero}','${conteudo.cidade}','${conteudo.telefone}',${conteudo.qntd},${conteudo.idproduto},'${conteudo.cpf}');`, callback)
        console.log(conteudo)
    }

    this.getProdutos = (connection, callback) => {
        connection.query("SELECT * FROM produtos", callback)
    }

    this.getCategorias = (connection, callback) => {
        connection.query("SELECT COUNT(idproduto) as quantidade, 'Todos' as categoria from produtos UNION SELECT COUNT(categoria),categoria FROM produtos GROUP BY categoria;", callback)
    }

    return this;
}