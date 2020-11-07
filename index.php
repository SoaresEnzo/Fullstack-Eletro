<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./css/estilo.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <title>Full Stack Eletro</title>
</head>

<body>
    <div class="main-container">
        <!-- INICIO DO MENU -->
    <?php include('menu.html');?>
        <!--FIM DO MENU-->


        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-3">Sejam bem vindo(as)</h1>
                <p class="lead">Aqui em nossa loja, <em>programadores tem desconto</em> nos produtos para sua casa!</p>
                <hr class="my-2">
                <p>Veja nossa seleção de eletrodomésticos</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="produtos.php" role="button">Comprar</a>
                </p>
            </div>
        </div>
    </div>

    <?php include('rodape.html'); ?>
</body>

</html>