$('#iniciar').click(function(){
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;
    var ruta = "usuario"+usuario+"&contrasena="+contrasena;

    var dato = {"usuario": usuario, "contrasena": contrasena};
    console.log(dato);
    $.ajax({
        type: "POST",
        url: "../controller/login_controller.php",
        data: dato,
        dataType: "json",
    })
    .done(function(res){
        console.log(res);
        alert(res);
        alert(res.id_cargo);
        if(res.id_cargo == "1"){
            location.href = '../views/dashboard.php';
        }else if(res == "vendedor"){
            location.href = '../views/ventas.php';
        }
    })
    .fail(function(res) {
        console.log("error");
    })
    .always(function(){
        console.log("todo se ejecuta");
    })

});