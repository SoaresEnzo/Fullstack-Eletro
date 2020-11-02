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

$nome = $_POST['nomecliente'];
$endereco = $_POST['endereco'];
$telefone = $_POST['telefone'];
$produto = $_POST['nomeproduto'];
$unidade = $_POST['valunit'];
$quantidade = $_POST['qntd'];
$total = $quantidade * $unidade;

if (strlen($nome)>1 && strlen($endereco)>1 && strlen($telefone)>1 && strlen($produto)>1 && strlen($unidade)>1 && strlen($quantidade)>=1) {
    $sql = "select * from produtos where nome_produto = '$produto' and preco = '$unidade';";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $sql = "insert into pedidos
    (nome_cliente,endereco_cliente,telefone_cliente,nome_produto,valor_unitario,quantidade,valor_total) 
    values
    ('$nome','$endereco','$telefone','$produto','$unidade','$quantidade','$total');";

        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Pedido inserido com sucesso.');window.location.href = 'produtos.php';</script>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "<script>alert('O produto digitado não existe')</script>";
    }
} else if (strlen($endereco)<1) {
    echo "<script>alert('Insira um endereço válido!');window.location.href = 'produtos.php';</script>";
} else if (strlen($telefone)<1) {
    echo "<script>alert('Insira um telefone válido!');window.location.href = 'produtos.php';</script>";
} else if (strlen($produto)<1) {
    echo "<script>alert('Insira um produto válido!');window.location.href = 'produtos.php';</script>";
} else if (strlen($unidade)<1) {
    echo "<script>alert('Insira um preço  válido!');window.location.href = 'produtos.php';</script>";
} else if (strlen($quantidade)<1) {
    echo "<script>alert('Insira uma quantidade válida!');window.location.href = 'produtos.php';</script>";
} else if (strlen($nome)<1) {
    echo "<script>alert('Insira um nome válido!');window.location.href = 'produtos.php';</script>";
};
