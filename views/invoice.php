<?php
$idVenta = $_GET['idVenta'];
$nombreCliente = $_GET['nombreCliente'];
$producto = $_GET['productoa'];
$cantidad = $_GET['cantidad'];
$total = $_GET['total'];
ob_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Factura</title>
    <link rel="stylesheet" href="../css/invoice.css">
</head>
<body>

<header class="row">
    <div class="logoholder text-center" >
        <h1>Sofware Y.D.D.D.</h1>
    </div><!--.logoholder-->

    <div class="me">
        <p contenteditable>
            <strong>Desarrollado por software YDDD</strong><br>
            SENA<br>
            Bogota,Colombia.<br>

        </p>
    </div><!--.me-->

    <div class="info">
        <p contenteditable>
            Web: www.sena.edu.co<br>
            E-mail: SoftwareYDDD@gmail.com <br>
            Tel: 350-8559412<br>
            Twitter: @softYDDD
        </p>
    </div><!-- .info -->

    <div class="bank">
        <p contenteditable>
            Datos de la ventas: <br>
            Titular de la cuenta: <br>
        </p>
    </div><!--.bank-->

</header>


<div class="row section">

    <div class="col-2">
        <h1 contenteditable>Factura</h1>
    </div><!--.col-->

    <div class="col-2 text-right details">
        <p contenteditable>
            Fecha: 28/06/2022<br>
            Factura #: <input type="text" value=<?php echo $idVenta?> /><br>
            Vence: N/A<input class="twoweeks" type="text"/>
        </p>
    </div><!--.col-->



    <div class="col-2">


        <p contenteditable class="client">
            <strong>Facturar a</strong><br>
            Cliente: <?php echo $nombreCliente?><br>
            Vendedor: Maira<br>
        </p>
    </div><!--.col-->


    <div class="col-2">


        <p contenteditable class="client">
            <strong>Enviar a</strong><br>
            Direccion: Cra 78l<br>
        </p>
    </div><!--.col-->



</div><!--.row-->

<div class="row section" style="margin-top:-1rem">
    <div class="col-1">
        <table style='width:100%'>
            <thead contenteditable>
            <tr class="invoice_detail">
                <th width="25%" style="text-align">Vendedor</th>
                <th width="25%">Orden de compra </th>
                <th width="20%">Enviar por</th>
                <th width="30%">Términos y condiciones</th>
            </tr>
            </thead>
            <tbody contenteditable>
            <tr class="invoice_detail">
                <td width="25%" style="text-align">Maira</td>
                <td width="25%"><?php echo $idVenta?></td>
                <td width="20%">Interrapidisimo</td>
                <td width="30%">Pago al contado</td>
            </tr>
            </tbody>
        </table>
    </div>

</div><!--.row-->

<div class="invoicelist-body">
    <table>
        <thead contenteditable>
        <th width="5%">Código</th>
        <th width="60%">Descripción</th>

        <th width="10%">Cant.</th>
        <th width="15%">Precio</th>
        <th class="taxrelated">IVA</th>
        <th width="10%">Total</th>
        </thead>
        <tbody>
        <tr>
            <td width='5%'><a class="control removeRow" href="#">x</a> <span contenteditable><?php echo $idVenta?></span></td>
            <td width='60%'><span contenteditable><?php echo $producto?></span></td>
            <td class="amount"><input type="text" value=<?php echo $cantidad?>></td>
            <td class="rate"><input type="text" value="<?php echo $total ?>" /></td>
            <td class="tax taxrelated">399</td>
            <td class="sum"><?php echo $total ?></td>
        </tr>
        </tbody>
    </table>
</div><!--.invoice-body-->

<div class="invoicelist-footer">
    <table contenteditable>
        <tr class="taxrelated">
            <td>IVA:</td>
            <td id="total_tax">399</td>
        </tr>
        <tr>
            <td><strong>Total:</strong></td>
            <td id="total_price"><?php echo $total ?></td>
        </tr>
    </table>
</div>

<div class="note" contenteditable>
    <h2>Nota:</h2>
</div><!--.note-->

<footer class="row">
    <div class="col-1 text-center">
        <p class="notaxrelated" contenteditable>El monto de la factura no incluye el impuesto sobre las ventas.</p>

    </div>
</footer>

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
$dompdf->stream('FacturaCompra.pdf', array('Attachment'=>false));


?>