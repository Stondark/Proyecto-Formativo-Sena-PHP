-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-03-2022 a las 00:50:32
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos`
--

CREATE TABLE `cargos` (
  `id_cargo` int(11) NOT NULL,
  `descripcion_cargo` varchar(15) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `cargos`
--

INSERT INTO `cargos` (`id_cargo`, `descripcion_cargo`) VALUES
(1, 'Administrador'),
(2, 'Vendedor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_envio`
--

CREATE TABLE `estado_envio` (
  `id_estado` int(11) NOT NULL,
  `estado` varchar(15) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `estado_envio`
--

INSERT INTO `estado_envio` (`id_estado`, `estado`) VALUES
(1, 'Entregado'),
(2, 'Cancelado'),
(3, 'En proceso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `producto` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_venta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `producto`, `cantidad`, `precio_venta`) VALUES
(1, 'Galletas', 500, 700),
(2, 'Pan', 3, 3500),
(3, 'Papas', 23, 1500),
(4, 'Gansito', 43, 900),
(5, 'Libra de arroz', 12, 1700),
(6, 'Mantequilla', 56, 1200),
(7, 'Glacitas choconieve', 95, 800),
(8, 'Agua personal', 4, 1200),
(9, 'Chicle Tumix', 94, 150),
(10, 'Aceite', 12, 3200),
(11, 'Chocolate Gol', 94, 800),
(12, 'Galletas Oreo', 43, 600),
(13, 'Speed Max', 15, 1200),
(14, 'Coca Cola 1.5', 20, 3000),
(15, 'Coca Cola 2.5', 10, 5000),
(16, 'Chocolatina jumbo', 3, 2000)
(17, 'Menta chao', 24, 200);

-- ---------------w-----------------------------------------

--
-- Estructura de tabla para la tabla `tipo_envios`
--

CREATE TABLE `tipo_envios` (
  `id_tipoenvio` int(11) NOT NULL,
  `tipo_envio` varchar(15) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_envios`
--

INSERT INTO `tipo_envios` (`id_tipoenvio`, `tipo_envio`) VALUES
(1, 'Contraentrega'),
(2, 'Almacén'),
(3, 'Interrapidísimo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `contrasena` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `id_cargo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `contrasena`, `nombre`, `id_cargo`) VALUES
(1, 'stondark', '123456', 'david', 1),
(2, 'mairauwu', '123456', 'maira', 2),
(3, 'diego', 'dieg2313', 'diegogamer', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_venta` int(11) NOT NULL,
  `nombre_cliente` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `numero` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id_tipoenvio` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `id_estado` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_venta`, `nombre_cliente`, `numero`, `direccion`, `fecha_entrega`, `producto`, `cantidad`, `id_tipoenvio`, `id_vendedor`, `id_estado`, `total`) VALUES
(2, 'Manuel', '314945351', 'Cra 78L #42B - 85 Sur', NULL, 1, 3, 2, 2, 1, 2100),
(4, 'Manuel', '3124945351', 'sadasdsa', NULL, 1, 3, 2, 2, 2, 30000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id_cargo`);

--
-- Indices de la tabla `estado_envio`
--
ALTER TABLE `estado_envio`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_envios`
--
ALTER TABLE `tipo_envios`
  ADD PRIMARY KEY (`id_tipoenvio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_cargo` (`id_cargo`) USING BTREE;

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_venta`),
  ADD KEY `producto` (`producto`),
  ADD KEY `id_tipoenvio` (`id_tipoenvio`),
  ADD KEY `id_vendedor` (`id_vendedor`),
  ADD KEY `id_estado` (`id_estado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id_cargo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `estado_envio`
--
ALTER TABLE `estado_envio`
  MODIFY `id_estado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `tipo_envios`
--
ALTER TABLE `tipo_envios`
  MODIFY `id_tipoenvio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_cargo` FOREIGN KEY (`id_cargo`) REFERENCES `cargos` (`id_cargo`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`id_tipoenvio`) REFERENCES `tipo_envios` (`id_tipoenvio`),
  ADD CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`id_estado`) REFERENCES `estado_envio` (`id_estado`) ON DELETE CASCADE,
  ADD CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`id_vendedor`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `ventas_ibfk_4` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
