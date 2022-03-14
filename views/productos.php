<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS -->
    <link rel="stylesheet" href="../css/productos.css" />
    <link rel="stylesheet" href="//cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
    <title>Productos</title>
    <!-- Include nav -->
    <?php include_once("../includes/nav.php");
        
    ?>
</head>

<body>
    <div class="container-productos">
        <h1 class="title">Productos</h1>
        <div class="tabla-productos">
            <table id="lista-productos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUCTO</th>
                        <th>CANTIDAD</th>
                        <th>PRECIO</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- 
                    <tr>
                        <td>1</td>
                        <td>Galletas</td>
                        <td>500</td>
                        <td>700</td>

                        <td>
                            <a href="#">
                                <i class="fa-solid fa-trash"></i>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-pen"></i>
                            </a>
                            <a href="">
                                <i class="fa-solid fa-file-pdf"></i>
                            </a>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Pan</td>
                        <td>500</td>
                        <td>700</td>

                        <td>
                            <a href="#">
                                <i class="fa-solid fa-trash"></i>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-pen"></i>
                            </a>
                            <a href="">
                                <i class="fa-solid fa-file-pdf"></i>
                            </a>
                        </td>

                    </tr>
-->
                </tbody>
            </table>
        </div> 
        <div class="button-new">
            <button>
                <a href="../views/ventas-new.php">
                    Nuevo producto <i class="fa-solid fa-plus"></i>
                </a>
            </button>
        </div>
    </div>
    <!-- Jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- DataTables --->
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/datetime/1.1.2/css/dataTables.dateTime.min.css"></script>
    <!-- Jquery validation lib-->
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>
    <!-- JS -->
    <script src="../js/index.js"></script>
    <script src="../js/productoscript.js"></script>
    <script src="../libs/jqueryvalidation/validation.js"></script>
</body>

</html>