//Porque no coje el op??
//error en submit
$('#frormlog').on(function(event){
    event.preventDefault();
    jQuery.ajax({
        url:'../controller/login_crontroller.php',
        type: 'POST',
        dataType: 'json',
        data: $(this).serialize,
        beforeSend: function(){

        }
    }).done(function(respuesta){
        console.log(respuesta);

    }).fail(function(resp){
        console.log("error");
        console.log(resp.responseText);
    }).always(function(){
        console.log("complete")
    });

});

