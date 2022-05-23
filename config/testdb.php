<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php

    use PHPMailer\PHPMailer\clsMail;

    require("../model/productos_model.php");
    require_once("../model/mail_model.php");

    $mail = new clsMail;
    /*$producto = new Producto;
    $producto->get_producto();*/

    $connect = new Conexion;
    $connect->conectar();


    ?>
</body>

</html>