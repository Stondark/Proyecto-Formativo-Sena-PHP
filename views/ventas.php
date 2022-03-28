<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ventas</title>
    <!-- CSS -->
    <link rel="stylesheet" href="../css/ventas.css" />
    <!-- Include nav-->
    <?php include_once("../includes/nav.php"); ?>
</head>
<body>

<div class="container-productos">
        <h1 class="title">Ventas</h1>
        <div class="tabla-productos">
          <!-- Inicio tabla -->
            <table id="tabla-ventas">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CLIENTE</th>
                        <th>NÚMERO</th>
                        <th>DIRECCIÓN</th>
                        <th>PRODUCTOS</th>
                        <th>CANTIDAD</th>
                        <th>TIPO ENVÍO</th>
                        <th>VENDEDOR</th>
                        <th>ESTADO</th>
                        <th>TOTAL</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
            </table>
            <!-- Fin tabla -->
        </div>
        <div class="button-new">
            <button id="abrir-ventas">
                <a href="../views/ventas-new.php">
                    Nueva venta <i class="fa-solid fa-plus"></i>
                </a>
            </button>
        </div>
        <!-- Modal -->
        <div class="modal-container" id="modal-container-ventas">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Nueva venta</h2>
                    <a class="close" id="close">X</a>
                </div>
                <div class="modal-form">
                    <form action="" method="post" id="form-new-producto">
                        <label for="">PRODUCTO</label>
                        <input type="text" id="producto" name="producto">
                        <label for="">CANTIDAD</label>
                        <input type="text" id="cantidad" name="cantidad">
                        <label for="">PRECIO</label>
                        <input type="text" id="precio" name="precio">
                        <button>Añadir</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- Fin modal -->

    </div>
    <!-- Jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- DataTables --->
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.9/js/dataTables.responsive.min.js"></script>
    <!-- Jquery validation lib-->
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>
    <!-- Sweet Alert-->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- JS -->
    <script src="../js/index.js"></script>
    <script src="../js/ventasscript.js"></script>
    <script src="../libs/jqueryvalidation/validation.js"></script>
</body>
</html>
