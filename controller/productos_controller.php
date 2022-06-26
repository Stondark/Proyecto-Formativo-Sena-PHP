<?php


require_once("../model/productos_model.php");




$producto = new Producto(); // Instancia de la clase Producto


    switch($_GET["op"]){
        case "listar":
            $datos = $producto->get_producto();
            echo json_encode($datos);
            break;
        
        case "eliminar":

            if(isset($_POST['id'])){
                $producto->delete_producto($_POST['id']);
            }
            break;
        
        case "add":

            if(isset($_POST['producto']) & isset($_POST['cantidad']) & isset($_POST['precio_venta'])){
                $producto->insert_producto($_POST['producto'], $_POST['cantidad'], $_POST['precio_venta']);
            }
            break;

        case "edit":
            if(isset($_POST['producto']) & isset($_POST['cantidad']) & isset($_POST['precio_venta']) & isset($_POST['id'])){
                $producto->update_producto($_POST['id'], $_POST['producto'], $_POST['cantidad'], $_POST['precio_venta']);
            }   
            break;         

        case "count":
            $cantidad = $producto->count_productos();
            $datos = array("count"=> $cantidad);
            echo json_encode($datos);
            break;


        default:
            break;
    }





?>