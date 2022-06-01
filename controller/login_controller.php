<?php
    require_once("../model/login_model.php");

    $usuario = $_POST['usuario'];
    $contrasena = $_POST['password'];
    session_start();

    $login = new Login();

    $cargo = $login->acesso($usuario,$contrasena);

    if($cargo == "admin"){
        require '../views/dashboard.php';
    }elseif ($cargo == "usuario"){
        require '../views/usuario.html';
    }

    if($usuario == null || $usuario = ''){
    echo "usuario no ingresado";
    header("location: ../views/login.php");
    }

?>