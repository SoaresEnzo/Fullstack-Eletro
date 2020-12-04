<?php
require 'Connection.php';

class Comentario
{
    public $id;
    public $nome;
    public $comentario;
    public $data;

    public static function getComments()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT * FROM comentarios");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}