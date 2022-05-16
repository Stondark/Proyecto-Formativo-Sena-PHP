<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="descripción" content="Una tabla de productos">
    <!-- CSS -->
    <link rel="stylesheet" href="../css/productos.css">
    <link rel="stylesheet" href="//cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/1.0.0/css/dataTables.responsive.css">
    <!-- FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
    <title>Productos</title>
    <!-- Include nav -->
    <?php include_once("../includes/nav.php");
        
    ?>
</head>
<body>
    <!-- Contenedor principal -->
    <div class="container-productos">
        <h1 class="title">Productos</h1>
        <!-- Inicio tabla --->
        <div class="tabla-productos">
            <table id="lista-productos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUCTO</th>
                        <th>CANTIDAD</th>
                        <th>PRECIO</th> 
                        <th><!-- Botones editar y eliminar--></th>
                    </tr>
                </thead>
            </table>
        </div> 
        <!-- Botón de nuevo producto --->
        <div class="button-new">
            <button id="abrir-producto">
                <a href="#">
                    Nuevo producto <i class="fa-solid fa-plus"></i>
                </a>
            </button>
        </div>
    </div>
    
    <!-- Modal nuevo producto -->

    <div class="modal-container" id="modal-container">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Nuevo producto</h2>
                <a class="close" id="close">X</a>
            </div>
            <div class="modal-form" id="form_productos">
                <form id="form-new-producto">
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

    <!-- Modal editar-->
<!--

    <div class="modal-container" id="modal-container">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Editar producto</h2>
                <a class="close" id="close">X</a>
            </div>
            <div class="modal-form" id="form_productos">
                <form id="form-new-producto">
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
-->
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="Dependencies/datatables-responsive/js/dataTables.responsive.js"></script>
    <!-- JS -->
    
    <script src="../js/productos-script.js"></script>
    <script src="../js/app.js"></script>
</body>

</html>