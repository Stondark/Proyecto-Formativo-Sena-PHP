<?php

namespace PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../libs/phpmailer/Exception.php';
require '../libs/phpmailer/PHPMailer.php';
require '../libs/phpmailer/SMTP.php';


class clsMail{

    private $mail = null;

    function __construct(){
        $this->mail = new PHPMailer();
        //$this->mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $this->mail->isSMTP();                                            //Send using SMTP
        $this->mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $this->mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $this->mail->Username   = 'pipegamo55@gmail.com';                     //SMTP username
        $this->mail->Password   = 'kgmxkjepnfeqaiml';                               //SMTP password
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $this->mail->Port       = 465;     
    }   

    public function contact_mail(string $name, string $p_mail, string $telefono, string $message){
        $this->mail->setFrom('pipegamo1@hotmail.com', 'Software Y.D.D.D');
        $this->mail->addAddress('pipegamo55@gmail.com');     //Add a recipient
        $this->mail->CharSet = "UTF-8";
        //Content
        $this->mail->isHTML(true);                                  //Set email format to HTML
        $this->mail->Subject = $name . " te contactó";
        $this->mail->Body    = '<b>Nombre: </b>' . $name .'<b> Correo: </b>' . $p_mail . '<b> Teléfono: </b>' . $telefono . '<b> Mensaje: </b>' . $message;
        $this->mail->AltBody = 'Nombre: ' . $name .'Correo: ' . $p_mail . 'Teléfono: ' . $telefono . 'Mensaje: ' . $message;
        return $this->mail->send();
    }


    public function enviar(){
        $this->mail->setFrom('Sexo@gmail.com.com', 'SEXO');
        $this->mail->addAddress('mairapatarroyo14@gmail.com');     //Add a recipient
        $this->mail->CharSet = "UTF-8";
        //Content
        $this->mail->isHTML(true);                                  //Set email format to HTML
        $this->mail->Subject = "TE AMO";
        $this->mail->Body    = "MUCHO MUCHO MUCHO";
        $this->mail->AltBody = "UWU";
        return $this->mail->send();
    }

}



?>
