<?php

    //require_once("../config/db.php");
require_once("../model/productos_model.php");
$producto = new Producto();

    switch($_GET["op"]){
        case "listar":
            $datos = $producto->get_producto();

            echo json_encode($datos);

            break;

        
    }


?>