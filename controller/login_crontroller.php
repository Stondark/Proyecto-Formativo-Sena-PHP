<?php
    require_once("../model/login_model.php");
    $login = new Login();

    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    if(isset($usuario) && isset($contrasena)){
       $usuario = $login->acesso($usuario,$contrasena);
       if($usuario == 1){
           echo "Es admin";
       }else if($usuario == 2){
           echo "Es vendedor";
       }else{
           echo "usuario no encontrado";
       }
    }
    

    

    
    
               
    // //echo $_POST['nombre'].$_POST['edad'];
    // echo "aljndskjhskjlnfclkws";




?>