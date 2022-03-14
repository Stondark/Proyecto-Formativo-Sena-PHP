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
        <div class="search-container">
            <input type="text" placeholder="Escribe para buscar" class="search-text">
            <a href="#" class="search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
        <h1 class="title">Ventas</h1>
        <div class="tabla-productos">
            <table>
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>David</td>
                        <td>3124945351</td>
                        <td>Cra 78L #42B sur - 85</td>
                        <td>Galletas</td>
                        <td>3</td>
                        <td>Contraentrega</td>
                        <td>Juanito</td>
                        <td> <span class="status">Entregado</span> </td>
                        <td>2100</td>
                        <td>
                            <a href="#">
                                <i class="fa-solid fa-trash"></i>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-pen"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="button-new">
            <button>
                <a href="../views/ventas-new.php">
                    Nueva venta <i class="fa-solid fa-plus"></i>
                </a>
            </button>
        </div>
    </div>
    <!-- JS Front end-->
    <script src="../js/index.js"></script>
</body>
</html>