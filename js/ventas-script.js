$(document).ready(function () {
    var table = $("#lista-ventas").DataTable({ // Inicialización del datatable
        "language": {
            url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
        },
        "ajax":{  
            url: "../controller/ventas_controller.php?op=listar",
            type: "GET",
            datatype: "json",
            dataSrc: "",
        },
        "columns": [
            {data: "id_venta"},
            {data: "nombre_cliente"},
            {data: "numero"},
            {data: "direccion"},
            {data: "producto"},
            {data: "cantidad"},
            {data: "tipo_envio"},
            {data: "nombre"},
            {data: "estado",
                render: function(data, type, row){
                    switch (data) {
                        case "Entregado":
                            return "<span class='entregado'>"+data+"</span>";
                        case "Cancelado":
                            return "<span class='cancelado'>"+data+"</span>";    
                        case "En proceso":
                            return "<span class='espera'>"+data+"</span>";
                    }
                }
            },
            {data: "total"},
            {data: null,
                defaultContent: "<button class='delete' id='delete' value=''><i class='fa-solid fa-trash'></i></button> <button class='edit'><i class='fa-solid fa-pen'></i></button> <button class='pdf'><i class='fa-solid fa-file-pdf'></i></button>" ,
                orderable: false,
            }
        ],

        "responsive": true,

    });

});