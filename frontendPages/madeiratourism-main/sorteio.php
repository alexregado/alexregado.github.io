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
    


    $sql1 = "SELECT * FROM dbsite ORDER BY RAND() LIMIT 1;";
    $data = $conn->query($sql1);


    $row = $data->fetch(PDO::FETCH_ASSOC);

    $rand_name = $row["name"];
    ?> 

    <style>
        body{
            background-color: rgba(194, 55, 55);
            width: 100%;
            max-height: 90%;
        }

        .alex{
        width: 900px;
        height: 297px;
        font-size: 45px;
        text-align: center;
        background-color: aquamarine;
        margin: auto;
        margin-top: 15%;
        border-radius: 50px;
        background-color: #ffffff, 0.5; /* ÚLTIMO VALOR É RELATIVO A TRANSPARÊNCIA */
        text-align: center;
        font-weight: 600;
        color: #000000;
        text-shadow: 3px white;
        font-family: 'Cabin', sans-serif;
        background-color: #ffffff;
        background: linear-gradient(90deg, rgba(156,156,156,0.3393732492997199) 0%, rgba(178,218,223,0.7259278711484594) 100%); 
        z-index: 9999;
        padding: 10px 10px 10px 10px;
        }
        .winner{
            color: white;
            font-size: 50px;
        }
    </style>






    <div class="alex" style="">
        <p>O vencedor do sorteio é:<br>
    <span class="winner"><?php echo $rand_name ?></span><br><br>
    Obrigado pela sua participação!</p>
    </div>


    
</body>
</html>