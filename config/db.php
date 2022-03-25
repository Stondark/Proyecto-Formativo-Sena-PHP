<?php

    class Conexion{
        
        protected $host = "localhost";
        protected $db = "crud";
        protected $user = "root";
        protected $password = "12345";
        protected $conexion;

        public function conectar(){
            $conexionString = "mysql:host=$this->host;dbname=$this->db";
            try{
                $this->conexion = new PDO($conexionString,$this->user, $this->password);
                $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $this->conexion;
            } catch( PDOException $e){
                echo "Conexión fallida" . $e;
                die();
            }
        }
    }

?>  