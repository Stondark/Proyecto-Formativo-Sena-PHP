<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

</html>


<?php
include_once("../views/index.html");
$phone = htmlspecialchars($_POST["phone"]);
$email = htmlspecialchars($_POST["email"]);
$subject = htmlspecialchars($_POST["subject"]);
$mensaje = trim((isset($_POST['mensaje'])) ? $_POST['mensaje'] : " ");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../libs/phpmailer/Exception.php';
require '../libs/phpmailer/PHPMailer.php';
require '../libs/phpmailer/SMTP.php';

$mail = new PHPMailer(true);
$body = "<strong>Nombre: </strong>". $subject . "<strong> Teléfono: </strong>" . $phone . " <strong> Correo: </strong>" . $email ."<br><strong>Mensaje: </strong>" . $mensaje; 


try {
    //Server settings
    $mail->SMTPDebug = 0;                                       //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'david.garzon40@misena.edu.co';                     //SMTP username
    $mail->Password   = 'davidfelipegamo12004';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('david.garzon40@misena.edu.co', $subject);
    $mail->addAddress('pipegamo55@gmail.com', 'Contact us');     //Add a recipient              

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject . utf8_decode(" envió un correo de contacto");
    $mail->Body    = utf8_decode($body);   
    $mail->send();
    
?>  
    <script>
    Swal.fire({
        icon: 'success',
        title: 'Correo enviado',
        allowEnterKey: true
    })
    </script>
    <?php
    exit;
} catch (Exception $e) {
    ?>
    <script>
    Swal.fire({
        icon: 'error',
        title: 'Error al enviar el correo<?php echo"{$mail->ErrorInfo}"?>',
        allowEnterKey: true
    })
    </script>
    <?php
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


?>