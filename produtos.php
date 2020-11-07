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


?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Produtos - Full Stack Eletro</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="./scripts/script.js"></script>
    <style></style>
</head>

<body>
    <div class="main-container">
        <!-- INICIO DO MENU -->
        <?php include('menu.html'); ?>
        <!--FIM DO MENU-->

        <header>
            <h2 class="text-dark ml-3">Produtos</h2>
        </header>
        <hr>

        <div class="grid-container row">
            <aside class="categorias col-md-2 container-fluid">
                <h3>
                    Categorias
                </h3>
                <ul class="list-unstyled">
                    <li onclick="mostrarTodos()" class="list-item">Todos (12)</li>

                    <li onclick="mostrarCategoria('geladeira')" class="list-item">
                        Geladeiras (3)
                    </li>
                    <li onclick="mostrarCategoria('fogao')" class="list-item">
                        Fogões (2)
                    </li>
                    <li onclick="mostrarCategoria('microondas')" class="list-item">
                        Microondas (3)
                    </li>
                    <li onclick="mostrarCategoria('lavadora')" class="list-item">
                        Lavadora de roupas (2)
                    </li>
                    <li onclick="mostrarCategoria('lavaloucas')" class="list-item">
                        Lava-louças (2)
                    </li>
                </ul>

                <h3>
                    Preço
                </h3>

                <ul id="filtropreco" class="list-group">
                    <li class="list-item">

                        <div class="form-group">
                            <label for="precoMin">De:</label>
                            <input type="number" name="precoMin" id="precoMin" class="form-control input" placeholder="" aria-describedby="helpId">
                        </div>
                    </li>

                    <li class="list-item">
                    <div class="form-group">
                            <label for="precoMax">Até:</label>
                            <input type="number" name="precoMin" id="precoMax" class="form-control input" placeholder="" aria-describedby="helpId">
                        </div>
                    </li>

                    <li class="list-item">
                        <button class="btn btn-block btn-outline-danger" onclick="filtrarPreco(precoMin.value,precoMax.value,categoria)">Filtrar</button>
                    </li>
                </ul>

            </aside>

            <section class="produtos col-md-10">
                <div class="row">
                    <?php

                    $sql = "select * from produtos";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        while ($rows = $result->fetch_assoc()) {
                    ?>
                            <div class="box_produto container align-self-end mx-3 my-3" id="<?php echo $rows['categoria'] ?>" onclick="destaque(this)" style="width:250px;padding:0px;margin:0px">
                                <img src="<?php echo $rows['imagem'] ?>" style="width:120px">
                                <br>
                                <?php echo $rows['nome_produto'] ?>
                                <hr style="margin:0px">
                                <small class="text-danger">R$ <?php echo $rows['preco_original'] ?></small>
                                <p class="novo text-dark lead">R$ <?php echo $rows['preco'] ?></p>

                                <form action="pedidos.php" method="POST" id="<?php echo $rows['idproduto']; ?>" hidden>
                                    <input type="text" name="nome" value="<?php echo $rows['nome_produto']; ?>">
                                    <input type="number" name="preco" value="<?php echo $rows['preco']; ?>">
                                </form>
                                <button type="submit" class="btn btn-block btn-danger" form="<?php echo $rows['idproduto']; ?>">
                                    Fazer pedido
                                </button>
                            </div>


                    <?php
                        }
                    } else {
                        echo "Nenhum produto cadastrado";
                    }

                    ?>
                </div>
            </section>
        </div>

        <?php include('rodape.html'); ?>
    </div>
</body>

</html>