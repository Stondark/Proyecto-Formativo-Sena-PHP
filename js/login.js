
document.querySelector("#iniciar").addEventListener("click", function () {
  obtenerUsuario();
});

function obtenerUsuario() {
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;
  // Creamos un nuevo XMLHttpRequest
  var xhttp = new XMLHttpRequest();

  // Esta es la función que se ejecutará al finalizar la llamada
  xhttp.onreadystatechange = function () {
    // Si nada da error
    if (this.readyState == 4 && this.status == 200) {
      // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
      var respuesta = JSON.parse(this.responseText);
      if (respuesta == 1) {
        location.href = '../views/dashboard.php';
      } else if (respuesta == 2) {
        location.href = '../views/test.html';
      } else {
        alert("fallo perro");
      }
    }
  };
  var url = "http://localhost:8080/users/"+usuario+"/"+contrasena+""

  // Endpoint de la API y método que se va a usar para llamar
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  // Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
  xhttp.send(null);
}