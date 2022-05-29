$(document).ready(function () {
    var table = $("#lista-table").DataTable({ // Inicialización del datatable
        "language": {
            url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
        },
        "ajax":{  
            url: "../controller/productos_controller.php?op=listar",
            type: "GET",
            datatype: "json",
            dataSrc: "",
        },
        "columns": [
            {data: "id"},
            {data: "producto"},
            {data: "cantidad"},
            {data: "precio_venta"},
            {data: null,
                defaultContent: "<button class='delete' id='delete' value=''><i class='fa-solid fa-trash'></i></button> <button class='edit' id='edit' value=''><i class='fa-solid fa-pen'></i></button>" ,
                orderable: false,
            }
        ],
        "responsive": true,

    });

    get_info_delete("#lista-table tbody", table); // Función borrar
    get_info_submit(table); // Función añadir
    get_info_edit("#lista-table tbody", table); // Función editar
});

// AÑADIR DATOS

/* Función para añadir datos */

var get_info_submit = function(table){
    const btn_add = document.getElementById("abrir-nuevo");
    $(btn_add).on("click", function(){
        Swal.fire({
            title: 'Añadir nuevo producto',
            html:' <form id="form-new-insert">' +
                '<label for="">PRODUCTO</label>'+
                '<input type="text" id="producto" name="producto" class="swal2-input">'+
                '<label for="">CANTIDAD</label>'+
                '<input type="text" id="cantidad" name="cantidad" class="swal2-input" >'+
                '<label for="">PRECIO</label>'+
                '<input type="text" id="precio" name="precio" class="swal2-input">'+
                '</form>',
            focusConfirm: false,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                let prod = document.getElementById('producto').value
                let cant = document.getElementById('cantidad').value
                let precio = document.getElementById('precio').value
                if(!prod || !cant || !precio){
                    Swal.showValidationMessage("Ingrese valores en los campos vacíos");
                } else if(isNaN(cant )|| isNaN(precio)){
                    Swal.showValidationMessage("Ingrese únicamente números");
                }
                return true;
            }
        }).then((result) =>{
            if(result.isConfirmed){
                if(result){
                    ajax_newprod();
                    table.ajax.reload();
                }
            }
        })
    })

    function ajax_newprod(){

        var auxproducto_nombre = Swal.getPopup().querySelector("#producto").value;
        var producto_nombre = auxproducto_nombre[0].toUpperCase() + auxproducto_nombre.slice(1); // Convertir primer carácter a mayúscula
        var cantidad = Swal.getPopup().querySelector("#cantidad").value.replace(/\./g, '');
        var precio = Swal.getPopup().querySelector("#precio").value.replace(/\./g, '');
        let parametros = { "producto": producto_nombre, "cantidad": cantidad, "precio_venta": precio}
        $.ajax({
            data: parametros,
            url: '../controller/productos_controller.php?op=add',
            type: 'POST',
            success: function(){
                Swal.fire({
                    title: 'Añadido!',
                    text: producto_nombre + ' fue añadido correctamente',
                    icon: 'success',
                    background: '#1a203a',
                    color: '#fff',
                });
            },
            beforeSend: load_ajax("el producto se está añadiendo"),
        })
    }

}

// EDITAR DATOS

var get_info_edit = function(tbody, table){
    $(tbody).on("click", "button.edit", function(){
        var data = table.row($(this).parents("tr")).data();
        var id_inputs = $("#lista-table #edit").val(data.id);
        var id_producto = data.id;
        var name_prod = data.producto;
        Swal.fire({
            title: 'Editar el producto '  + data.producto,
            html:` <form id="form-new-producto">
                <label for="">PRODUCTO</label>
                <input type="text" id="producto" name="producto" class="swal2-input" value="${data.producto}">
                <label for="">CANTIDAD</label>
                <input type="text" id="cantidad" name="cantidad" class="swal2-input" value="${data.cantidad}">
                <label for="">PRECIO</label>
                <input type="text" id="precio" name="precio" class="swal2-input" value="${data.precio_venta}">
                </form>`,
            focusConfirm: false,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                let prod = document.getElementById('producto').value
                let cant = document.getElementById('cantidad').value
                let precio = document.getElementById('precio').value
                if(!prod || !cant || !precio){
                    Swal.showValidationMessage("Ingrese valores en los campos vacíos");
                } else if(isNaN(cant )|| isNaN(precio)){
                    Swal.showValidationMessage("Ingrese únicamente números");
                }
                return true;
            }
        }).then((result) =>{
            if(result.isConfirmed){
                if(result){
                    ajax_editprod(id_producto, name_prod);
                    table.ajax.reload();
                }
            }
        })

    });

    function ajax_editprod(id_producto, name_prod) {
        var auxproducto_nombre = Swal.getPopup().querySelector("#producto").value;
        var antg_nombre = name_prod;
        var producto_nombre = auxproducto_nombre[0].toUpperCase() + auxproducto_nombre.slice(1); // Convertir primer carácter a mayúscula
        var cantidad = Swal.getPopup().querySelector("#cantidad").value.replace(/\./g, '');;
        var precio = Swal.getPopup().querySelector("#precio").value.replace(/\./g, '');
        let parametros = { "id": id_producto, "producto": producto_nombre, "cantidad": cantidad, "precio_venta": precio}
        $.ajax({
            data: parametros,
            url: '../controller/productos_controller.php?op=edit',
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
            beforeSend: load_ajax("el producto se está editando"),
        })
    }

}

// ELIMINAR DATOS 

/* Función para el botón eliminar */
var get_info_delete = function(tbody, table){
    $(tbody).on("click", "button.delete", function(){
        var data = table.row($(this).parents("tr")).data();
        var producto = $("#lista-table #delete").val(data.id);
        var id_producto = data.id;
        console.log(id_producto);
        alerta_eliminar(id_producto);

/* Petición ajax para eliminar el producto */

        function eliminar_producto(id_producto) {
            let parametros = { "id":id_producto }
            $.ajax({
                data: parametros,
                url: '../controller/productos_controller.php?op=eliminar',
                type: 'POST',
                success:function(){
                    Swal.fire({
                            title: '¡Borrado con éxito!',
                            text: data.producto + ' fue borrado con éxito',
                            icon: 'success',
                            background: '#1a203a',
                            color: '#fff',
                    })
                },
                beforeSend: load_ajax("el producto se está eliminando"),
            })
        }

/* Función para mostrar la alerta de confirmación */
        function alerta_eliminar(id_producto) {
            Swal.fire({
                title: '¿Está seguro de eliminar el producto?',
                text: 'El producto ' + data.producto + '(' + data.id +') será eliminado',
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
                    eliminar_producto(id_producto); // Llamado a la petición ajax
                    table.ajax.reload(); // Recarga de la tabla 
                }
            })
        }
    });
};



