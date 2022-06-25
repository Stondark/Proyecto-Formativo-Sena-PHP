<?php
class Starter{
    public function __construct(){
        session_start();
    }

    public function redirect(){
        header("location: ../views/login.php");
    }

}




?>