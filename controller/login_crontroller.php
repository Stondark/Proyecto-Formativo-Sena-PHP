<?php
    require_once("../model/login_model.php");
    $login = new Login();


       $jsonRta = $login->acesso($_POST['usuario'],$_POST['contrasena']);   
        


    

    
    
               
    // //echo $_POST['nombre'].$_POST['edad'];
    // echo "aljndskjhskjlnfclkws";




?>

<!-- 
<input type="type" name="" value=""> -->