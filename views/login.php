<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS -->
    <link rel="stylesheet" href="../css/login.css">
    <!-- FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
    <title>Login</title>
</head>

<body>
<div class="container-login">
    <div class="container-imagen">
        <img src="../images/login.png" alt="">
    </div>
    <div class="container-form">
        <div class="form-text">
            <h1>Bienvenido</h1>
            <h2>Inicio de Sesión</h2>
        </div>
        <div class="div-form">
            <form method="post" action="../controller/login_controller.php">
                <label for="">Usuario</label>
                <input type="text" name="usuario" id="usuario">
                <label for="">Contraseña</label>
                <input type="password" name="password" id="password">
                <button type="submit">Entrar</button>
            </form>
        </div>
    </div>
</div>
<!-- JS -->
<script src="../js/app.js"></script>
</body>

</html>