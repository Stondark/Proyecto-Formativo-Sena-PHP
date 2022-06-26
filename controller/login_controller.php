<?php
    require_once("../model/login_model.php");
    require_once ("starter_controller.php");


    $usuario = $_POST['usuario'];
    $contrasena = $_POST['password'];
    //instancia de controlador de sesiones


    $login = new Login();

    $cargo = $login->acesso($usuario,$contrasena);
    $_SESSION['usuario'] = $login->getUsuario();
    $_SESSION['contrasena'] = $login->getContrasena();
    $_SESSION['cargo'] = $login->getCargo();



    if($_SESSION['cargo'] == "1"){
        require '../views/dashboard.php';
    }elseif ($cargo == "2") {
        require '../views/usuario.html';
    }








?>