<?php

class Connection
{
    public static function getConnection()
    {
        $conn = new PDO(
                "mysql:host=localhost;dbname=fseletro;charset=utf8",
                "root",
                ""
            );
        if ($conn) {
            return $conn;
        } else {
            return "<h1>Erro na conexão com o banco de dados</h1>";
        }
    }
}
