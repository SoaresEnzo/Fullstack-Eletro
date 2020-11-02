<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "fseletro";

$conn = mysqli_connect($servername, $username, $password, $database);
mysqli_set_charset($conn, "utf8");
if (!$conn) {
    die("A conexão falhou: " . mysqli_connect_error());
};

if(isset($_POST['nomemsg'])&& isset($_POST['mensagemmsg'])){
    $nome = $_POST['nomemsg'];
    $msg = $_POST['mensagemmsg'];

    $sql="insert into comentarios(nome,comentario) values ('$nome','$msg')";
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Sua mensagem foi enviada.')</script>";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
};

?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./css/estilo.css">
    <title>Contato</title>
    <script src="./scripts/script.js"></script>
</head>

<body>
    <div class="main-container">
        <!-- INICIO DO MENU -->
        <?php include('menu.html'); ?>
        <!--FIM DO MENU-->

        <main>
            <h2>Contato</h2>
            <hr>
            <section class="contatos">
                <div class="contato">
                    <img src="./imagens/email render.png">
                    <h3>contato@fullstackeletro.com</h3>
                </div>


                <div class="contato">
                    <img src="./imagens/WhatsApp-icone.png">
                    <h3>(11) 9999-99999</h3>
                </div>
            </section>

            <form id="msg" action="" method="POST">
                <h4>Nome:</h4>
                <input type="text" id="nomemsg" name="nomemsg">
                <h4>Mensagem:</h4>
                <textarea id="mensagem" name="mensagemmsg"></textarea>
                <input type="submit" value="Enviar" id="submit" onclick="enviar()">
            </form>

            <div class="comentario">
            <?php

$sql = "select * from comentarios";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($rows = $result->fetch_assoc()) {
?>
        <div class="comment">
            <div class="commflex">
            <h3><?php echo $rows['nome'];?></h3>
            <span class="data"><?php echo $rows['data']?></span>
            </div>
            <hr>
            <p><?php echo $rows['comentario']?></p>
        </div>
<?php
    }
} else {
    echo "Nenhum comentário ainda!";
}

?>
</div>
        </main>
        <footer id="rodape">
            <hr>
            <p id="formas_pagamento">
                <b>Formas de pagamento:</b>
            </p>
            <img src="./imagens/forma-de-pagamento.png" alt="Formas de pagamento">
            <p>&copy; 2020 RecodePro</p>
        </footer>
    </div>
</body>

</html>