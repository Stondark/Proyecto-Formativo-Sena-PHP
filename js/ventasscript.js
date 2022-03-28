$(document).ready(function () {
    var table = $("#tabla-ventas").DataTable({
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
            {data: "id_tipoenvio"},
            {data: "id_vendedor"},
            {data: "id_estado"},
            {data: "total"},
            {data: null,
                defaultContent: "<button class='delete' id='delete' value=''><i class='fa-solid fa-trash'></i></button> <button class='edit'><i class='fa-solid fa-pen'></i></button>" ,
                orderable: false,
            }
            //{defaultContent: "<button><i class='fa-solid fa-trash'></i></button><a href='editar'><i class='fa-solid fa-pen'></i></a><a href='pdf'><i class='fa-solid fa-file-pdf'></i></a>"},
        ],
        "responsive": true,

    });

    get_info_delete("#tabla-ventas tbody", table);
});
var get_info_delete = function(tbody, table){
    $(tbody).on("click", "button.delete", function(){
        var data = table.row($(this).parents("tr")).data();
        var producto = $("#tabla-ventas #delete").val(data.id);
        console.log(data);
        console.log(producto);
        Swal.fire({
            title: '¿Está seguro de eliminar la venta?',
            text: 'La venta del cliente ' + data.nombre_cliente + '(' + data.id_venta +') será eliminada',
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
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'La venta del cliente ' + data.nombre_cliente + ' fue eliminado correctamente',
                    icon: 'success',
                    background: '#1a203a',
                    color: '#fff',
                })

            }
        })
    });
};


const abrir = document.getElementById("abrir-ventas");
const cerrar = document.getElementById("close");
const modal_ventas = document.getElementById("modal-container-ventas");

function modal_cerrar() {
  modal_ventas.style.opacity = "0";
  modal_ventas.style.visibility = "hidden";
  console.log("Cerrando modal");
}

if(modal_ventas){
  abrir.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("Mostrando modal");
    modal_ventas.style.opacity = "1";
    modal_ventas.style.visibility = "visible";
  });

  cerrar.addEventListener("click", () => {
    modal_cerrar();
  });

  window.addEventListener("click", (e) => {
    if(e.target === modal_ventas ){
      modal_cerrar();
    }
  });


  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
      if(modal_ventas.style.opacity === "1"){
        modal_cerrar();
      }
    }
  });


}
