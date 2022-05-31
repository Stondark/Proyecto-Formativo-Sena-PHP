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
                $resultado = json_encode($resultado);
                return $resultado;
            }


            // $resultado = json_encode($resultado);
            // return $resultado;
            else{
                echo json_encode(array('error' => true));
            }
        }
    }



?>