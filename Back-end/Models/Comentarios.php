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

    public function registerComment()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("INSERT INTO comentarios(nome,comentario,data) VALUES ('$this->nome','$this->comentario',NOW())");
        if($stmt->rowCount()>0){
            return true;
        } else {
            return false;
        }
    }


}