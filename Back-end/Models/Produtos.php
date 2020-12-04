<?php
require "Connection.php";

class Produto
{
    public static function getProdutos()
    {
        $connection= Connection::getConnection();
        $stmt= $connection->query("SELECT * FROM produtos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function getCategorias()
    {
        $connection= Connection::getConnection();
        $stmt= $connection->query("SELECT COUNT(categoria) AS quantidade,categoria FROM produtos GROUP BY categoria");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    
}
