<?php

ob_start();
?>


<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php

    require("../config/db.php");

    class Reportes extends Conexion {

        public function listar(){
            parent::conectar();
            $sql = "SELECT * FROM ventas";
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute();
            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
            return $resultado;
        }
    }
    $consulta = new Reportes();
    $lista = $consulta->listar();
    ?>

    <a href="Reportes.php">Reporte pdf</a>

    <table id="tabla">
        <thead>
        <tr>
            <th>Id</th>
            <th>nombre del cliente</th>
            <th>numero</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($lista as $venta){ ?>
        <tr>
            <td><?php echo $venta['id_venta'];?></td>
            <td><?php echo $venta['nombre_cliente']; ?></td>
            <td><?php echo $venta['numero'];
                }?></td>
        </tr>

        </tbody>
    </table>


</body>
</html>
<?php
//se guarda el html en una variable
$html = ob_get_clean();

require_once "../libs/dompdf/autoload.inc.php";
use Dompdf\Dompdf;
$dompdf = new Dompdf();

$options = $dompdf->getOptions();
$options->set(array('isRemoteEnabled' => true));
$dompdf->setOptions($options);
//loadHtml($html) para indicar que lleva dentro el pdf
$dompdf->loadHtml($html);
//Tamano de la hoja
$dompdf->setPaper('letter');
$dompdf->render();
//Crea el documento con el (nombre del documento, false para no descargar, true para descargar)
$dompdf->stream('jajajajaj.pdf', array('Attachment'=>false));


?>


