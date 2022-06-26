<?php
require_once("../controller/starter_controller.php");
$ics = new Starter();
if(empty($_SESSION['usuario'])){
    $ics->redirect();
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="descripción" content="Un dashboard para negocio">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS -->
    <link rel="stylesheet" href="../css/dashboard.css" lazyload/>

    <title>Dashboard</title>
    <!-- Include nav -->
    <?php include_once("../includes/nav.php"); ?>
    
</head>
<body>
    <div class="container-dashboard">
        <div class="container-cards">
            <div class="card one">
                <div class="card-content">
                    <p><i class="fa-solid fa-cash-register"></i> Recaudo ventas</p>
                    <p class="digits" id="money_ventas">000.000</p>
                    <p>Recaudo total</p>
                </div>
            </div>
            <div class="card two">
                <div class="card-content">
                    <p><i class="fa-solid fa-basket-shopping"></i> Ventas</p>
                    <p class="digits" id="total_ventas">00</p>
                    <p>Ventas totales</p>
                </div>
            </div>
            <div class="card three">
                <div class="card-content">
                    <p><i class="fa-solid fa-box"></i> Productos</p>
                    <p class="digits" id="prod_inv">000</p>
                    <p>Productos en inventario</p>
                </div>
            </div>
        </div>
        <div class="container-graphs">
            <div class="bar-container">
                <canvas id="barChart"></canvas>
            </div>
            <div class="pie-container">
                <canvas id="pieChart"></canvas>
            </div>
        </div>
    </div>
    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script defer src="../js/app.js"></script>
    <script defer src="../js/dashboard.js"></script>
</body>

</html>