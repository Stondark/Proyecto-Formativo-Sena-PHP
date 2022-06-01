<?php
    require_once("../model/login_model.php");

    $usuario = $_POST['usuario'];
    $contrasena = $_POST['password'];

    $login = new Login();

    $cargo = $login->acesso($usuario,$contrasena);

    if($cargo == "admin"){
        require '../views/dashboard.php';
    }elseif ($cargo == "usuario"){
        require '../views/usuario.html';
    }

?>