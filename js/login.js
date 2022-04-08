$(document).on('submit','#frormlog',function(event) {
  event.preventDefault();

    // var usuario = $("#usuario").val();
    // var contrasena = $("#contrasena").val();
    $.ajax({
      type: "POST",
      url: "../controller/login_crontroller.php?op=login",
      dataType: 'json',
      data: $(this).serialize(),
      beforeSend:function() {
      }
    })
    .done(function(respuesta){
        console.log(respuesta);
    })
    .fail(function(resp){
        console.log(resp.responseText);
    })
    .always(function(){
        console.log("complete");
    });
  });




