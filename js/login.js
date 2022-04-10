//Porque no coje el op??
//error en submit
$('#frormlog').on("submit",function(event){
    event.preventDefault();
    jQuery.ajax({
        url:'../controller/login_crontroller.php?',
        type: 'POST',
        dataType: 'json',
        data: $(this).serialize,
        beforeSend: function(){

        }
    }).done(function(respuesta){
        console.log(respuesta);
        // if(!respuesta.error){
        //     if(respuesta.id_cargo == 1)


        // }else{

        // }
    }).fail(function(resp){
        console.log("error");
        console.log(resp.responseText);
    }).always(function(){
        console.log("complete")
    });

});
