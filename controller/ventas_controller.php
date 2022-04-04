<?php

    //require_once("../config/db.php");
require_once("../model/ventas_model.php");
$venta = new Ventas();

    switch($_GET["op"]){
        case "listar":
            $datos = $venta->get_ventas();
            echo json_encode($datos);
            break;

        case "eliminar":

            if(isset($_POST['id_venta'])){
                $venta->delete_ventas($_POST['id_venta']);
            }
            break;
        
        default:
            break;
    }

?>