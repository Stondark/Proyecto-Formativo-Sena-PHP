<?php
    require_once("../model/login_model.php");
    $login = new Login();


    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    echo $usuario.$contrasena;

    
    
               
    // //echo $_POST['nombre'].$_POST['edad'];
    // echo "aljndskjhskjlnfclkws";




?>