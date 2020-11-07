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

if (isset($_POST['nomemsg']) && isset($_POST['mensagemmsg'])) {
    $nome = $_POST['nomemsg'];
    $msg = $_POST['mensagemmsg'];

    $sql = "insert into comentarios(nome,comentario) values ('$nome','$msg')";
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
    <!--<link rel="stylesheet" href="./css/estilo.css">-->
    <title>Contato</title>
    <script src="./scripts/script.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>
    <div class="container-fluid p-0">
        <!-- INICIO DO MENU -->
        <?php include('menu.html'); ?>
        <!--FIM DO MENU-->

        <main>
            <h2 class="text-dark ml-3">Contato</h2>
            <hr>
            <div class="row">
                <div class="col-md-6 justify-content-center">
                    <section class="contatos container-fluid ">
                        <div class="contato container justify-content-center d-flex">
                            <img src="./imagens/email render.png" class="img img-fluid" style="width:35px">
                            <h3 class="text-dark">contato@fullstackeletro.com</h3>
                        </div>
                </div>
                <div class="col-md-6 justify-content-center">

                    <div class="contato container justify-content-center d-flex">
                        <img src="./imagens/WhatsApp-icone.png" class="img img-fluid" style="width:35px">
                        <h3 class="text-dark">(11) 9999-99999</h3>
                    </div>
                </div>
                </section>
            </div>

            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">
                    <div class="container-fluid">
                        <form id="msg" action="" method="POST">
                            <div class="form-group">
                                <label for="">Nome:</label>
                                <input type="text" name="nomemsg" id="nomemsg" class="form-control" placeholder="" aria-describedby="helpId">
                            </div>


                            <div class="form-group">
                                <label for="">Mensagem:</label>
                                <textarea class="form-control" name="mensagemmsg" id="mensagem" rows="3"></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
                <div class="col-sm-2"></div>
            </div>



            <div class="comentario container-fluid">
                <?php

                $sql = "select * from comentarios";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while ($rows = $result->fetch_assoc()) {
                ?>
                        <div class="comment container bg-light border border-dark text-dark my-2">
                            <div class="commflex d-flex justify-content-between">
                                <h3 class="text-dark"><?php echo $rows['nome']; ?></h3>
                                <p class="data m-0 p-0 align-self-end d-flex"><?php echo $rows['data'] ?></p>
                            </div>
                            <hr>
                            <p><?php echo $rows['comentario'] ?></p>
                        </div>
                <?php
                    }
                } else {
                    echo "Nenhum comentário ainda!";
                }

                ?>
            </div>
        </main>
        <?php include('rodape.html'); ?>
    </div>
</body>

</html>