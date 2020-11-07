<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Contato</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="./scripts/script.js"></script>

</head>

<body>
    <div class="main-container" style="padding-bottom:0;min-height:0vh;">
        <!-- INICIO DO MENU -->
        <?php include('menu.html'); ?>

        <!--FIM DO MENU-->
        <div class="row my-4">
            <div class="col-sm-2"></div>
            <div class="col-sm-8 bg-light border border-dark">
                <form action="insere_pedido.php" method="POST" class="form_pedidos">
                    <h4 class="text-dark ml-3">Dados do pedido</h4>
                    <hr>
                    <div class="form-group">
                        <label for="nomecliente">Seu nome:</label>
                        <input type="text" name="nomecliente" id="" class="form-control" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="endereco">Seu endereço:</label>
                        <input type="text" name="endereco" id="" class="form-control" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="telefone">Seu telefone:</label>
                        <input type="text" name="telefone" id="" class="form-control" placeholder="">
                    </div>

                    <div class="form-group">
                        <label for="nomeproduto">Nome do produto</label>
                        <input type="text" name="nomeproduto" id="" class="form-control" placeholder="" value="<?php echo $_POST['nome']
                                                                                                                ?>" readonly>
                    </div>
                    <div class="form-group">
                        <label for="valunit">Valor Unitário</label>
                        <input type="number" name="valunit" id="valunit" class="form-control" placeholder="" value="<?php echo $_POST['preco']
                                                                                                                    ?>" readonly>
                    </div>

                    <div class="form-group">
                        <label for="qntd">Quantidade</label>
                        <input type="number" name="qntd" id="qntd" class="form-control" placeholder="" onchange="calculoPedido()">
                    </div>
                    <div class="form-group">
                        <label for="val_total">Valor Total</label>
                        <input type="number" name="val_total" id="val_total" class="form-control" placeholder="" disabled>
                    </div>


                    <div class="container justify-content-end align-items-center" style="display:flex">
                        <button type="submit" class="btn btn-primary btn-lg">Enviar Pedido</button>
                    </div>
                </form>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
    <?php include('rodape.html'); ?>
    </div>
</body>

</html>