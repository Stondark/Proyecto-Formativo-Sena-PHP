<?php
    require_once("../config/db.php");
    class Producto extends Conexion{
        public function get_producto(){
            parent::conectar();
            $sql = "SELECT * FROM productos";
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
            //echo json_encode($resultado);
            //var_dump($resultado); // Mostramos el array de la consulta en pantalla
        }

        public function get_producto_id($prod_id){
            parent::conectar();
            $sql = "SELECT * FROM productos WHERE id = ?";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1, $prod_id);
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_producto($prod_id){
            parent::conectar();
            $sql = "DELETE FROM productos WHERE id = ?";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1, $prod_id);
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        }

        public function insert_producto($prod_nombre, $prod_cantidad, $prod_precio){
            parent::conectar();
            $sql = "INSERT INTO productos (id, producto, cantidad, precio_venta) VALUES (NULL, ?, ?, ?);";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1, $prod_nombre);
            $consulta->bindValue(2, $prod_cantidad);
            $consulta->bindValue(3, $prod_precio);
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        }

        public function update_producto($prod_id, $prod_nombre, $prod_cantidad, $prod_precio){
            parent::conectar();
            $sql = "UPDATE productos SET producto = ?, cantidad = ?, precio_venta = ?
                    WHERE id = ?";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1, $prod_nombre);
            $consulta->bindValue(2, $prod_cantidad);
            $consulta->bindValue(3, $prod_precio);
            $consulta->bindValue(4, $prod_id);
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        }

        public function count_productos(){
            parent::conectar();
            $sql = "SELECT * FROM productos";
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute();
            return $consulta->rowCount();
            //return $resultado;

        }

    }

?>