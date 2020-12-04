<?php

require 'Connection.php';

class Pedido
{
    public $idpedido;
    public $nomeCliente;
    public $estadoEndereco;
    public $bairroEndereco;
    public $logradouroEndereco;
    public $numeroEndereco;
    public $cidadeEndereco;
    public $telefoneCliente;
    public $quantidade;
    public $dataPedido;
    public $fkProduto;
    public $cpfCliente;

    public static function getPedidosJoined()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT id_pedido,
        nome_cliente,
        bairro_endereco,
        logradouro_endereco,
        numero_endereco,
        cidade_endereco,
        telefone_cliente,
        quantidade,
        data_pedido,
        cpf_cliente,
        nome_produto,
        preco,
        nome_estado
        FROM fseletro.pedidos 
        INNER JOIN produtos 
        ON fk_produto = idproduto 
        INNER JOIN estados 
        ON estado_endereco = idestado;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}