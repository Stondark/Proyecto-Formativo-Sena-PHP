<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="descripción" content="Una tabla de productos">
    <!-- CSS -->
    <link rel="stylesheet" href="../css/table-design.css">
    <link rel="stylesheet" href="//cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/1.0.0/css/dataTables.responsive.css">

    <title>Productos</title>
    <!-- Include nav -->
    <?php include_once("../includes/nav.php");
        
    ?>
</head>
<body>
    <!-- Contenedor principal -->
    <div class="container-principal">
        <div class="container-title">
            <h1 class="title">Clientes</h1>
        </div>
        <!-- Inicio tabla --->
        <div class="tabla-productos">
            <div class="button-new">
                <button id="abrir-nuevo">
                    <i class="fa-solid fa-plus"></i> Nuevo cliente
                </button>
            </div>
            <table id="lista-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>CÉDULA</th>
                        <th>DIRECCIÓN</th> 
                        <th>CORREO</th>
                        <th>NÚMERO</th>
                        <th><!-- Botones editar y eliminar--></th>
                    </tr>
                </thead>
            </table>
        </div> 
    </div>
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="Dependencies/datatables-responsive/js/dataTables.responsive.js"></script>
    <!-- JS -->
    <script src="../js/productos-script.js"></script>
    <script src="../js/app.js"></script>
</body>

</html>