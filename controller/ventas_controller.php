<?php

    //require_once("../config/db.php");
require_once("../model/ventas_model.php");
$venta = new Ventas();
require_once("../model/productos_model.php");
$productos = new Producto();

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

        case "add":

            if(isset($_POST['cliente']) & isset($_POST['numero']) & isset($_POST['direccion']) & isset($_POST['producto']) & isset($_POST['cantidad']) & isset($_POST['vendedores']) & isset($_POST['envio']) & isset($_POST['estado']) & isset($_POST['total'])){
                $venta->insert_venta($_POST['cliente'], $_POST['numero'], $_POST['direccion'], $_POST['producto'], $_POST['cantidad'], $_POST['envio'], $_POST['vendedores'], $_POST['estado'], $_POST['total']);
            }
            break;


        case "invoice":
            if(isset($_POST['id_venta'])){
                $datos = $venta->get_invoice($_POST['id_venta']);
                print_r($datos);
            }
            break;
        
        case "info":
            $datos = $productos->get_producto();
            $opciones = "<option value ='0' selected>Seleccione el producto a añadir</option>";
            foreach($datos as $key){
                $opciones .= "<option value=".$key['id'].">".$key['producto']."</option>";
            }
            echo $opciones;
            break;
        
        case "vendedores":
            $datos = $venta->get_vendedores();
            $opciones = "<option value ='0' selected>Seleccione el vendedor</option>";
            foreach($datos as $key){
                $opciones .= "<option value=".$key['id_usuario'].">".$key['nombre']."</option>";
            }
            echo $opciones;
            break;

        default:
            break;
    }

?>