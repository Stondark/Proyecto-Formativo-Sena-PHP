<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="descripción" content="Una tabla de productos">
    <!-- CSS -->
    <link rel="stylesheet" href="../css/ventas.css">
    <link rel="stylesheet" href="//cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
    <title>Ventas</title>
    <!-- Include nav -->
    <?php include_once("../includes/nav.php");
        
    ?>
</head>
<body>
    <!-- Contenedor principal -->
    <div class="container-ventas">
        <h1 class="title">Ventas</h1>
        <!-- Inicio tabla --->
        <div class="tabla-ventas">
            <table id="lista-ventas">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CLIENTE</th>
                        <th>NÚMERO</th>
                        <th>DIRECCIÓN</th>
                        <th>PRODUCTO</th>
                        <th>CANTIDAD</th>
                        <th>TIPO ENVIO</th>
                        <th>VENDEDOR</th>
                        <th>ESTADO</th>
                        <th>TOTAL</th>
                        <th><!-- Botones editar y eliminar--></th>
                    </tr>
                </thead>
            </table>
        </div> 
        <!-- Botón de nueva venta --->
        <div class="button-new">
            <button id="abrir-venta">
                <a href="#">
                    Nueva venta <i class="fa-solid fa-plus"></i>
                </a>
            </button>
        </div>

        <!-- Modal nueva venta --->
        
    </div>

    <!-- DataTables --->
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.9/js/dataTables.responsive.min.js"></script>
    <!-- JS -->
    <script src="../js/ventas-script.js"></script>
    <script src="../js/app.js"></script>
</body>

</html>