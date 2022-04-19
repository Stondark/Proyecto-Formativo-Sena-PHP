<?php
    require_once("../model/login_model.php");
    $login = new Login();

    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    echo $usuario . $contrasena;

    $login = new Login();
    if(isset($usuario) && isset($contrasena)){
        $usuario = $login->acesso($usuario,$contrasena);

    }
?>