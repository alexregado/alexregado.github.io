<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

    //PARTILHAR OS DADOS RETIRADOS DO SITE
    header('Access-Control-Allow-Origin: *');
    
    //Ligação à base de dados necessita de 4 elementos: Base de dados, Host, utilizador e password
    $ligacao = "mysql:host=localhost;dbname=madeira";
    $user = 'root';
    $pass = '';
    $conn = new pdo($ligacao, $user, $pass);
    
    //Garantir que a ligação foi realizada - ligacao como boolean se for true vai ligar
    if($ligacao){
        echo "Ligação Realizada com sucesso!";
    } else {
        echo "Ligação Falhou";
    } 
    
    //IMPORTAR AS VARIÁVEIS DO HTML PARA O PHP
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $birth_date = $_POST['birth_date'];
    $gender = $_POST['gender'];
    $like_range = $_POST['like_range'];
    
    //PRINT PARA CONFIRMAR QUE O CÓDIGO ESTÁ A FUNCIONAR
    echo $name, $birth_date, $gender, $like_range;
    
    //INTRODUZIR OS DADOS RETIRADOS DO FORM NA BASE DE DADOS
    $sql = "INSERT INTO dbsite SET name = '$name', number = '$number', email = '$email', birthDate = '$birth_date', gender = '$gender', likeRange = '$like_range' ";
    $sql = $conn->query($sql);

    $sql1 = "SELECT name FROM dbsite by RAND() limit 1";
    $sql1 = $conn->query($sql1);

    



    ?> 

</body>
</html>