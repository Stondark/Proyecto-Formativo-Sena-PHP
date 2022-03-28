<link rel="stylesheet" href="../css/nav.css" />
<!-- Font awesome -->
<script src="https://kit.fontawesome.com/f003d76e19.js" crossorigin="anonymous"></script>
<!-- Sweet alert -->
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
    <div class="nav-izquierdo">
      <div class="logo-s">
        <span class="icon"><i class="fab fa-uncharted"></i></span>
        <span class="icon-text">Software Y.D.D.D</span>
      </div>
      <ul>
        <li>
          <a href="../views/dashboard.php"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a>
        </li>
        <li>
          <a href="../views/productos.php"><i class="fas fa-dolly-flatbed"></i></i><span>Productos</span></a>
        </li>
        <li>
          <a href="../views/ventas.php">
            <i class="fas fa-shopping-basket"></i><span>Ventas</span>
          </a>
        </li>
        <li>
          <a href="../views/usuarios.php">
            <i class="fas fa-users"></i><span>Usuarios</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="user">
      <div class="img-user"></div>
      <div class="user-info">
        <span href="">Admin</span>
        <span id="user-name"><i class="fas fa-sort-down"></i></span>
      </div>
      <ul class="menu-close" id="menu-close">
        <li>
          <i class="fas fa-sign-out-alt"></i>
          <a href="../views/index.html">Cerrar sesión</a>
        </li>
      </ul>
    </div>
    
</body>