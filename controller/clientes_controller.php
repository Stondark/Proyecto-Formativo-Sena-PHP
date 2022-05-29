<?php

require_once("../model/clientes_model.php");
$cliente = new Clientes(); // Instancia de la clase Clientes

    switch($_GET["op"]){
        case "listar":
            $datos = $cliente->get_clientes();
            echo json_encode($datos);
            break;
        
        case "eliminar":

            if(isset($_POST['id'])){
                $cliente->delete_cliente($_POST['id']);
            }
            break;
        
        case "add":

            if(isset($_POST['nombre']) & isset($_POST['cedula']) & isset($_POST['direccion']) & isset($_POST['correo']) & isset($_POST['numero'])){
                $cliente->insert_cliente($_POST['nombre'], $_POST['cedula'], $_POST['direccion'], $_POST['correo'], $_POST['numero']);
            }
            break;

        case "edit":
            if(isset($_POST['id']) & isset($_POST['nombre']) & isset($_POST['cedula']) & isset($_POST['direccion']) & isset($_POST['correo']) & isset($_POST['numero'])){
                $cliente->update_cliente($_POST['id'], $_POST['nombre'], $_POST['cedula'], $_POST['direccion'], $_POST['correo'], $_POST['numero']);
            }
            break;      

        default:
            break;
    }


?>