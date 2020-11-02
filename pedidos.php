<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Contato</title>
    <link rel="stylesheet" href="./css/estilo.css">
    <script src="./scripts/script.js"></script>

</head>

<body>
    <div class="main-container" style="padding-bottom:0;min-height:0vh;">
        <!-- INICIO DO MENU -->
        <?php include('menu.html'); ?>
        <!--FIM DO MENU-->
        <form action="insere_pedido.php" method="POST" class="form_pedidos">
            <h4>Dados do pedido</h4>
            <hr>
            <div class="input-block">
                <label for="nomecliente">Seu nome</label>
                <input type="text" name="nomecliente">
            </div>
            <div class="input-block">
                <label for="endereco">Seu endereço</label>
                <input type="text" name="endereco">
            </div>
            <div class="input-block">
                <label for="telefone">Seu telefone</label>
                <input type="text" name="telefone">
            </div>
            <div class="input-block">
                <label for="nomeproduto">Nome do produto</label>
                <input type="text" name="nomeproduto" value="<?php echo $_POST['nome'] ?>" readonly>
            </div>
            <div class="input-block">
                <label for="valunit">Valor Unitário</label>
                <input type="number" name="valunit" id="valunit" value="<?php echo $_POST['preco'] ?>" readonly>
            </div>
            <div class="input-block">
                <label for="qntd">Quantidade</label>
                <input type="number" name="qntd" id="qntd" onchange="calculoPedido()">
            </div>
            <div class="input-block">
                <label for="val_total">Valor Total</label>
                <input type="number" name="val_total" id="val_total"disabled>
            </div>
            <div>
                <button type="submit">
                    Enviar Pedido
                </button>
            </div>
        </form>
    </div>
    <footer id="rodape" style="position:relative;">
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