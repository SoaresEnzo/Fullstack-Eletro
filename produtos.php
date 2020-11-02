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
    <link rel="stylesheet" href="./css/estilo.css">
    <title>Produtos - Full Stack Eletro</title>
    <script src="./scripts/script.js"></script>
</head>

<body>
    <div class="main-container">
        <!-- INICIO DO MENU -->
        <?php include('menu.html'); ?>
        <!--FIM DO MENU-->

        <header>
            <h2>Produtos</h2>
        </header>
        <hr>

        <div class="grid-container">
            <section class="categorias">
                <h3>
                    Categorias
                </h3>
                <ul>
                    <li onclick="mostrarTodos()">Todos (12)</li>

                    <li onclick="mostrarCategoria('geladeira')">
                        Geladeiras (3)
                    </li>
                    <li onclick="mostrarCategoria('fogao')">
                        Fogões (2)
                    </li>
                    <li onclick="mostrarCategoria('microondas')">
                        Microondas (3)
                    </li>
                    <li onclick="mostrarCategoria('lavadora')">
                        Lavadora de roupas (2)
                    </li>
                    <li onclick="mostrarCategoria('lavaloucas')">
                        Lava-louças (2)
                    </li>
                </ul>

                <h3>
                    Preço
                </h3>

                <ul id="filtropreco">

                    <li>
                        De: <input type="number" id="precoMin">
                    </li>

                    <li>
                        Até: <input type="number" id="precoMax">
                    </li>

                    <li>
                        <button onclick="filtrarPreco(precoMin.value,precoMax.value,categoria)">Filtrar</button>
                    </li>
                </ul>

            </section>

            <section class="produtos">
                <?php

                $sql = "select * from produtos";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while ($rows = $result->fetch_assoc()) {
                ?>
                        <div class="box_produto" id="<?php echo $rows['categoria'] ?>" onclick="destaque(this)">
                            <img src="<?php echo $rows['imagem'] ?>">
                            <br>
                            <?php echo $rows['nome_produto'] ?>
                            <hr>
                            <p class="velho">R$ <?php echo $rows['preco_original'] ?></p>
                            <p class="novo">R$ <?php echo $rows['preco'] ?></p>

                            <form action="pedidos.php" method="POST" id="<?php echo $rows['idproduto']; ?>" hidden>
                                <input type="text" name="nome" value="<?php echo $rows['nome_produto']; ?>">
                                <input type="number" name="preco" value="<?php echo $rows['preco']; ?>">
                            </form>
                            <button type="submit" form="<?php echo $rows['idproduto']; ?>">
                                Fazer pedido
                            </button>
                        </div>


                <?php
                    }
                } else {
                    echo "Nenhum produto cadastrado";
                }

                ?>
            </section>
        </div>


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