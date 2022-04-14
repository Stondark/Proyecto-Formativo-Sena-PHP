function consumo(){
  // Creamos un nuevo XMLHttpRequest
  var xhttp = new XMLHttpRequest();

  // Esta es la función que se ejecutará al finalizar la llamada
  xhttp.onreadystatechange = function() {
    // Si nada da error
    if (this.readyState == 4 && this.status == 200) {
      // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
      console.log(JSON.parse(this.responseText));
    }
  };

  // Endpoint de la API y método que se va a usar para llamar
  xhttp.open("POST", "http://localhost:8080/users/diego/dieg2313", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  // Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
  xhttp.send(null);
}