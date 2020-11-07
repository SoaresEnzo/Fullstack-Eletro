<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <!--<link rel="stylesheet" href="./css/estilo.css">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <title>Nossas Lojas</title>
</head>

<body>
    <div class="container-fluid p-0">
        <!-- INICIO DO MENU -->
        <?php include('menu.html');?>
        <!--FIM DO MENU-->

        <h2 class="text-dark ml-3">Nossas lojas</h2>
        <hr>
        <section class="lojas row my-5">

            <div class="loja col-sm-4">
                <h3>
                    Rio de Janeiro
                </h3>
                <p>
                    Avenida Presidente Vargas, 5000
                </p>
                <p>
                    10º andar
                </p>
                <p>
                    Centro
                </p>
                <p>
                    (21) 3333-33333
                </p>

            </div>
            <div class="loja col-sm-4">
                <h3>
                    São Paulo
                </h3>
                <p>
                    Avenida Paulista, 985
                </p>
                <p>
                    3º andar
                </p>
                <p>
                    Jardins
                </p>
                <p>
                    (11) 4444-44444
                </p>
            </div>

            <div class="loja col-sm-4">
                <h3>
                    Santa Catarina
                </h3>
                <p>
                    Rua Major Ávila, 370
                </p>
                <p>
                    Vila Mariana
                </p>
                <p>
                    Tijuca
                </p>
                <p>
                    (47) 5555-5555
                </p>
            </div>

            </table>


        </section>
        
        <?php include('rodape.html'); ?>
    </div>
</body>

</html>