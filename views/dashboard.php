<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="descripción" content="Un dashboard para negocio">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/dashboard.css" />
    <title>Dashboard</title>
    <!-- Include nav -->
    <?php include_once("../includes/nav.php");

    ?>
    
</head>

<body>
    <div class="container-dashboard">
        <h1>Dashboard</h1>
        <div class="div-total-ventas">
            <span>Total ventas</span>
            <h1>$ 300000</h1>
            <i class="fas fa-wallet"></i>
        </div>
        <div class="div-total-compradores">
            <span>Compradores</span>
            <h1>25</h1>
            <i class="fas fa-user"></i>
        </div>
        <div class="div-total-productos">
            <span>Productos en inventario</span>
            <h1>15</h1>
            <i class="fas fa-shopping-cart"></i>
        </div>
    </div>
    <!-- JS -->
    <script src="../js/app.js"></script>
</body>

</html>