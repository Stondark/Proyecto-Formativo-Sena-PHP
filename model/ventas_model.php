<?php
    require("../config/db.php");
    class Ventas extends Conexion{
        public function get_ventas(){
            parent::conectar();
            $sql = "SELECT v.id_venta, v.nombre_cliente, v.numero, v.direccion, p.producto, v.cantidad, t.tipo_envio, u.nombre, e.estado, v.total FROM ventas v INNER JOIN productos p ON v.producto = p.id INNER JOIN tipo_envios t ON v.id_tipoenvio = t.id_tipoenvio INNER JOIN usuarios u ON v.id_vendedor = u.id_usuario INNER JOIN estado_envio e ON v.id_estado = e.id_estado;";
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute();
            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
            return $resultado;
            //echo json_encode($resultado);
            //var_dump($resultado); // Mostramos el array de la consulta en pantalla
        }

        public function get_ventas_id($venta_id){
            parent::conectar();
            $sql = "SELECT * FROM ventas WHERE id = ?";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1, $venta_id);
            $consulta->execute();
            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
            return $resultado;
        }

        public function delete_ventas($venta_id){
            parent::conectar();
            $sql = "DELETE FROM ventas WHERE id_venta = ?";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1, $venta_id);
            $consulta->execute();
            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
            return $resultado;
        }

        public function insert_venta($venta_nombre, $venta_numero, $venta_direccion, $venta_fecha, $venta_producto, $venta_cantidad, $venta_envio, $venta_vendedor, $venta_estado, $venta_total){
            parent::conectar();
            $sql = "INSERT INTO ventas(nombre_cliente,numero,direccion,fecha_entrega,producto,cantidad,id_tipoenvio,id_vendedor,id_estado,total) VALUES(NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";   
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1, $venta_nombre);
            $consulta->bindValue(2, $venta_numero);
            $consulta->bindValue(3, $venta_direccion);
            $consulta->bindValue(4, $venta_fecha);
            $consulta->bindValue(5, $venta_producto);
            $consulta->bindValue(6, $venta_cantidad);
            $consulta->bindValue(7, $venta_envio);
            $consulta->bindValue(8, $venta_vendedor);
            $consulta->bindValue(9, $venta_estado);
            $consulta->bindValue(10, $venta_total);
            $consulta->execute();
            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
            return $resultado;
        }

        public function update_venta($venta_id, $venta_nombre, $venta_numero, $venta_direccion, $venta_fecha, $venta_producto, $venta_cantidad, $venta_envio, $venta_vendedor, $venta_estado, $venta_total){
            parent::conectar();
            $sql = "UPDATE venta SET nombre_cliente = ?, numero = ?, direccion = ?, fecha_entrega = ?, producto = ?, cantidad = ?, id_tipoenvio = ?, id_vendedor = ?, id_estado = ?, total = ?
                    WHERE id = ?";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1, $venta_nombre);
            $consulta->bindValue(2, $venta_numero);
            $consulta->bindValue(3, $venta_direccion);
            $consulta->bindValue(4, $venta_fecha);
            $consulta->bindValue(5, $venta_producto);
            $consulta->bindValue(6, $venta_cantidad);
            $consulta->bindValue(7, $venta_envio);
            $consulta->bindValue(8, $venta_vendedor);
            $consulta->bindValue(9, $venta_estado);
            $consulta->bindValue(10, $venta_total);
            $consulta->bindValue(11, $venta_id);
            $consulta->execute();
            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
            return $resultado;
        }

        public function count_venta(){
            parent::conectar();
            $sql = "SELECT * FROM ventas";
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute();
            $resultado = $consulta->rowCount();
            //var_dump($resultado);
            return $resultado;

        }

    }
