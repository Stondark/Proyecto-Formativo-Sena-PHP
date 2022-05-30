$(document).ready(function () {
    var table = $("#lista-table").DataTable({ // Inicialización del datatable
        "language": {
            url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
        },
        "ajax":{  
            url: "../controller/clientes_controller.php?op=listar",
            type: "GET",
            datatype: "json",
            dataSrc: "",
        },
        "columns": [
            {data: "id"},
            {data: "nombre"},
            {data: "cedula"},
            {data: "direccion"},
            {data: "correo"},
            {data: "numero"},
            {data: null,
                defaultContent: "<button class='delete' id='delete' value=''><i class='fa-solid fa-trash'></i></button> <button class='edit' id='edit' value=''><i class='fa-solid fa-pen'></i></button> <button class='mail' id='mail' value=''><i class='fa-solid fa-envelope'></i></button>" ,
                orderable: false,
            }
        ],
        "responsive": true,

    });

    get_info_delete("#lista-table tbody", table); // Función borrar
    get_info_submit(table); // Función añadir
    get_info_edit("#lista-table tbody", table); // Función editar
    get_info_mail("#lista-table tbody", table);
});

// AÑADIR DATOS

/* Función para añadir datos */

var get_info_submit = function(table){
    const btn_add = document.getElementById("abrir-nuevo");
    $(btn_add).on("click", function(){
        Swal.fire({
            title: 'Añadir nuevo cliente',
            html:' <form id="form-new-insert">' +
                '<label for="">NOMBRE</label>'+
                '<input type="text" id="nombre" name="nombre" class="swal2-input">'+
                '<label for="">CÉDULA</label>'+
                '<input type="text" id="cedula" name="cedula" class="swal2-input" >'+
                '<label for="">DIRECCIÓN</label>'+
                '<input type="text" id="direccion" name="direccion" class="swal2-input">'+
                '<label for="">CORREO</label>'+
                '<input type="text" id="correo" name="correo" class="swal2-input">'+
                '<label for="">NÚMERO</label>'+
                '<input type="text" id="numero" name="numero" class="swal2-input">'+
                '</form>',
            focusConfirm: false,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                let nombre = document.getElementById('nombre').value
                let cedula = document.getElementById('cedula').value
                let direccion = document.getElementById('direccion').value
                let correo = document.getElementById('correo').value
                let numero = document.getElementById('numero').value
                if(!nombre || !cedula || !direccion || !correo || !numero){
                    Swal.showValidationMessage("Ingrese valores en los campos vacíos");
                } else if(isNaN(cedula)|| isNaN(numero)){
                    Swal.showValidationMessage("Ingrese únicamente números");
                }
                return true;
            }
        }).then((result) =>{
            if(result.isConfirmed){
                if(result){
                    ajax_newcliente();
                    table.ajax.reload();
                }
            }
        })
    })

    function ajax_newcliente(){

        var aux_nombre = Swal.getPopup().querySelector("#nombre").value;
        var nombre_cliente = aux_nombre[0].toUpperCase() + aux_nombre.slice(1); // Convertir primer carácter a mayúscula
        var cedula = Swal.getPopup().querySelector("#cedula").value.replace(/\./g, ''); // Se quita los puntos
        var direccion = Swal.getPopup().querySelector("#direccion").value;
        var correo = Swal.getPopup().querySelector("#correo").value;
        var numero = Swal.getPopup().querySelector("#numero").value.replace(/\./g, ''); // Se quita los puntos
        let parametros = { "nombre": nombre_cliente, "cedula": cedula, "direccion": direccion, "correo": correo, "numero": numero}
        $.ajax({
            data: parametros,
            url: '../controller/clientes_controller.php?op=add',
            type: 'POST',
            success: function(){
                Swal.fire({
                    title: 'Añadido!',
                    text: nombre_cliente + ' fue añadido correctamente',
                    icon: 'success',
                    background: '#1a203a',
                    color: '#fff',
                });
            },
            beforeSend: load_ajax("se está añadiendo al cliente"),
        })
    }

}

// EDITAR DATOS

var get_info_edit = function(tbody, table){
    $(tbody).on("click", "button.edit", function(){
        var data = table.row($(this).parents("tr")).data();
        var id_inputs = $("#lista-table #edit").val(data.id);
        var id_cliente = data.id;
        var name_cliente = data.nombre;
        Swal.fire({
            title: 'Editar el cliente '  + data.nombre,
            html:` <form id="form-new-insert">
                <label for="">NOMBRE</label>
                <input type="text" id="nombre" name="nombre" class="swal2-input" value="${data.nombre}">
                <label for="">CÉDULA</label>
                <input type="text" id="cedula" name="cedula" class="swal2-input" value="${data.cedula}">
                <label for="">DIRECCIÓN</label>
                <input type="text" id="direccion" name="direccion" class="swal2-input" value="${data.direccion}">
                <label for="">CORREO</label>
                <input type="text" id="correo" name="correo" class="swal2-input" value="${data.correo}">
                <label for="">NÚMERO</label>
                <input type="text" id="numero" name="numero" class="swal2-input" value="${data.numero}">
                </form>`,
            focusConfirm: false,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                let nombre = document.getElementById('nombre').value
                let cedula = document.getElementById('cedula').value
                let direccion = document.getElementById('direccion').value
                let correo = document.getElementById('correo').value
                let numero = document.getElementById('numero').value
                if(!nombre || !cedula || !direccion || !correo || !numero){
                    Swal.showValidationMessage("Ingrese valores en los campos vacíos");
                } else if(isNaN(cedula)|| isNaN(numero)){
                    Swal.showValidationMessage("Ingrese únicamente números");
                }
                return true;
            }
        }).then((result) =>{
            if(result.isConfirmed){
                if(result){
                    ajax_editclient(id_cliente, name_cliente);
                    table.ajax.reload();
                }
            }
        })

    });

    function ajax_editclient(id_cliente, name_cliente) {
        var aux_nombre = Swal.getPopup().querySelector("#nombre").value;
        var nombre_cliente = aux_nombre[0].toUpperCase() + aux_nombre.slice(1); // Convertir primer carácter a mayúscula
        var antg_nombre = name_cliente; // Guardamos el anterior nombre para mostrarlo en la alerta
        var cedula = Swal.getPopup().querySelector("#cedula").value.replace(/\./g, ''); // Se quita los puntos
        var direccion = Swal.getPopup().querySelector("#direccion").value;
        var correo = Swal.getPopup().querySelector("#correo").value;
        var numero = Swal.getPopup().querySelector("#numero").value.replace(/\./g, ''); // Se quita los puntos
        let parametros = { "id": id_cliente, "nombre": nombre_cliente, "cedula": cedula, "direccion": direccion, "correo": correo, "numero": numero}
        $.ajax({
            data: parametros,
            url: '../controller/clientes_controller.php?op=edit',
            type: 'POST',
            success: function(){
                Swal.fire({
                    title: 'Añadido!',
                    text: antg_nombre + ' fue editado correctamente',
                    icon: 'success',
                    background: '#1a203a',
                    color: '#fff',
                });
            },
            beforeSend: load_ajax("se está editando el cliente"),
        })
    }

}

// ELIMINAR DATOS 

/* Función para el botón eliminar */
var get_info_delete = function(tbody, table){
    $(tbody).on("click", "button.delete", function(){
        var data = table.row($(this).parents("tr")).data();
        var producto = $("#lista-table #delete").val(data.id);
        var id_cliente = data.id;
        alerta_eliminar(id_cliente);

/* Petición ajax para eliminar el producto */

        function eliminar_cliente(id_cliente) {
            let parametros = { "id": id_cliente }
            $.ajax({
                data: parametros,
                url: '../controller/clientes_controller.php?op=eliminar',
                type: 'POST',
                success:function(){
                    Swal.fire({
                            title: '¡Borrado con éxito!',
                            text: data.nombre + ' fue borrado con éxito',
                            icon: 'success',
                            background: '#1a203a',
                            color: '#fff',
                    })
                }, 
                beforeSend: load_ajax("Se está eliminando el cliente"),
            })
        }

/* Función para mostrar la alerta de confirmación */
        function alerta_eliminar(id_cliente) {
            Swal.fire({
                title: '¿Está seguro de eliminar el cliente?',
                text: 'El cliente ' + data.nombre + '(' + data.id +') será eliminado',
                icon: 'warning',
                background: '#1a203a',
                color: '#fff',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#EB5160',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Sí, elimínalo'
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminar_cliente(id_cliente); // Llamado a la petición ajax
                    table.ajax.reload(); // Recarga de la tabla 
                }
            })
        }
    });
};


// ENVIAR CORREO

var get_info_mail = function(tbody, table){
    $(tbody).on("click", "button.mail", function(){
        var data = table.row($(this).parents("tr")).data();
        var id_inputs = $("#lista-table #edit").val(data.id);
        Swal.fire({
            title: 'Enviar correo a '  + data.nombre,
            html:` <form id="form-new-insert">
                <label for="">CORREO</label>
                <input type="text" id="correo" name="correo" class="swal2-input" value="${data.correo}" disabled>
                <label for="">ENCABEZADO</label>
                <input type="text" id="header" name="header" class="swal2-input">
                <label for="">MENSAJE</label>
                <textarea id="mensaje" name="mensaje" class="swal2-input"></textarea>
                </form>`,
            focusConfirm: false,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                let correo = document.getElementById('correo').value
                let header = document.getElementById('header').value
                let  mensaje= document.getElementById('mensaje').value
                if(!mensaje || !header || !correo){
                    Swal.showValidationMessage("Ingrese valores en los campos vacíos");
                }
                return true;
            }
        }).then((result) =>{
            if(result.isConfirmed){
                if(result){
                    ajax_mail();
                    table.ajax.reload();
                }
            }
        })

    });

    function ajax_mail() {
        var correo = Swal.getPopup().querySelector("#correo").value;
        var header = Swal.getPopup().querySelector("#header").value;
        var mensaje = Swal.getPopup().querySelector("#mensaje").value;
        let parametros = { "correo": correo, "header": header, "mensaje": mensaje}
        $.ajax({
            data: parametros,
            
            url: '../controller/mail_controller.php?op=contact_cliente',
            type: 'POST',
            success: function(){
                Swal.fire({
                    title: 'Añadido!',
                    text: 'Se envió correctamente el correo',
                    icon: 'success',
                    background: '#1a203a',
                    color: '#fff',
                });
            },
            beforeSend: load_ajax("el correo se está enviando"),
        })
    }

}


