<?php
    require_once("../model/login_model.php");

    $usuario = $_POST['usuario'];
    $contrasena = $_POST['password'];

    $login = new Login();


    $jsonRta = $login->acesso($usuario,$contrasena);
    echo $jsonRta;
?>