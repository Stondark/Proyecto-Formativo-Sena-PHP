<?php

    require("../config/db.php");

    class login extends Conexion{


        public function acesso($usuario,$contrasena){
            parent::conectar();
            $sql = "SELECT usuario, contrasena,id_cargo FROM usuarios WHERE usuario = ? AND contrasena =?";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1,$usuario);
            $consulta->bindValue(2,$contrasena);
            $consulta->execute();
            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
            if($consulta->rowCount() == 1){
                $fila = $resultado[0];
                $cargo = $fila["id_cargo"];
                if($cargo == "1"){
                    return "admin";
                }elseif ($cargo == "2"){
                    return "usuario";
                }
            }
            else{
                return "Usuario no valido";
            }
        }
    }



?>