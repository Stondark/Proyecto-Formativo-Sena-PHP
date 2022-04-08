<?php

    require_once("../model/login_model.php");
    $login = new Login();
               
    echo $_POST['usuario'].$_POST['contrasena'];

    $datos = $login->acesso($_POST['usuario'],$_POST['contrasena']);




?>