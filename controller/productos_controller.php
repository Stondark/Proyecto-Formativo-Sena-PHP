<?php

require_once("../model/productos_model.php");
$producto = new Producto(); // Instancia de la clase Producto

    switch($_GET["op"]){
        case "listar":
            $datos = $producto->get_producto();

            echo json_encode($datos);

            break;
        
        case "eliminar":

            if(isset($_POST['id']))
                $producto->delete_producto($_POST['id']);

            break;
    }


?>