<?php

    require("../config/db.php");

    class login extends Conexion
    {

        private $cargo;
        private $usuario;
        private $contrasena;

        public function getUsuario()
        {
            return $this->usuario;
        }

        public function getContrasena()
        {
            return $this->contrasena;
        }

        public function getCargo()
        {
            return $this->cargo;
        }


        public function acesso($usuario, $contrasena)
        {
            $this->usuario = $usuario;
            $this->contrasena = $contrasena;
            parent::conectar();
            $sql = "SELECT nombre_sesion, contrasena,cargo FROM sesiones WHERE nombre_sesion = ? AND contrasena =?";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1, $usuario);
            $consulta->bindValue(2, $contrasena);
            $consulta->execute();
            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
            if ($consulta->rowCount() == 1) {
                $fila = $resultado[0];
                $cargo = $fila['cargo'];
                if($cargo == "1"){
                     $this->cargo = $cargo ;
                }else{
                    $this->cargo = $cargo;
                }
            }
        }
    }



?>