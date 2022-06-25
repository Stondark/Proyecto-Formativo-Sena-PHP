<?php
require_once("starter_controller.php");
$ics = new Starter();
if(empty($_SESSION['usuario'])){
    $ics->redirect();
}
require_once("../model/productos_model.php");
require_once("../model/ventas_model.php");


$producto = new Producto(); // Instancia de la clase Producto
$ventas = new Ventas();






    $cantidad_productos = $producto->count_productos();
    $cantidad_ventas = $ventas->count_venta();
    $total_ventas = $ventas->total_ventas();
    $datos = array("count_prod"=> $cantidad_productos, "count_ventas"=> $cantidad_ventas, "total_ventas"=>$total_ventas);
    echo json_encode($datos);




?>