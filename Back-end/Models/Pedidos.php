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

    public function registerOrder()
    {
        $conn = Connection::getConnection();
        
        $stmt = $conn->query("INSERT INTO pedidos(nome_cliente,
            estado_endereco,
            bairro_endereco,
            logradouro_endereco,
            numero_endereco,
            cidade_endereco,
            telefone_cliente,
            quantidade,
            data_pedido,
            fk_produto,
            cpf_cliente) 
            VALUES (
                '$this->nomeCliente',
                '$this->estadoEndereco',
                '$this->bairroEndereco',
                '$this->logradouroEndereco',
                '$this->numeroEndereco',
                '$this->cidadeEndereco',
                '$this->telefoneCliente',
                '$this->quantidade',
                NOW(),
                '$this->fkProduto',
                '$this->cpfCliente')"
                );

                
        return $stmt;
    }
}
