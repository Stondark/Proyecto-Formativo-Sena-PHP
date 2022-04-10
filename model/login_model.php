<?php

    require("../config/db.php");

    class login extends Conexion{


        public function acesso($usuario,$contrasena){
            parent::conectar();
            $sql = "SELECT usuario, contrasena FROM usuarios WHERE usuario = ? AND contrasena =?";
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindValue(1,$usuario);
            $consulta->bindValue(2,$contrasena);
            $consulta->execute();
            if($consulta->rowCount() == 1){
                $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($resultado);
            }
            else{
                echo json_encode(array('error' => true));
            }

 
            return $resultado;
        }

    }





?>
