<?php

use PHPMailer\PHPMailer\clsMail;

require_once("../model/mail_model.php");

$mail = new clsMail;


switch($_GET["op"]){
    case "contact_index":
        if(isset($_POST['subject']) & isset($_POST['email']) & isset($_POST['phone']) & isset($_POST['mensaje'])){
            $contact = $mail->contact_mail($_POST['subject'], $_POST['email'], $_POST['phone'], $_POST['mensaje']);
        }
        break;

    case "contact_cliente":
        if(isset($_POST['correo']) & isset($_POST['header']) & isset($_POST['mensaje'])){
            $contact = $mail->contact_client($_POST['correo'], $_POST['header'], $_POST['mensaje']);
        }
        break;
    

}





?>