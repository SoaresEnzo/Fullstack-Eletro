<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require './Models/Pedidos.php';

$pedido = new Pedido;
$pedido->nomeCliente = $_POST['nomecliente'];
$pedido->estadoEndereco = $_POST['estado'];
$pedido->bairroEndereco = $_POST['bairro'];
$pedido->logradouroEndereco = $_POST['rua'];
$pedido->numeroEndereco = $_POST['numero'];
$pedido->cidadeEndereco = $_POST['cidade'];
$pedido->telefoneCliente = $_POST['telefone'];
$pedido->quantidade = $_POST['qntd'];
$pedido->fkProduto = $_POST['idproduto'];
$pedido->cpfCliente = $_POST['cpf'];


$validate = $pedido->registerOrder();

if ($validate == true) {
    print_r(json_encode(true));
} else {
    print_r(json_encode(false));
}
