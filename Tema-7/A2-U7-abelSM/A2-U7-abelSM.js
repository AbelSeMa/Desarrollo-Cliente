document.getElementById("ciudad").addEventListener('keyup', () =>{
    var cadena = document.getElementById("ciudad").value;

if (cadena.length == 0) {
    document.getElementById("sugerencia").innerHTML = "No hay coincidendias";
    return;
} else {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("sugerencia").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "http://127.0.0.1:8000/arrayciudades.php?ciudad=" + cadena, true);  //URL
    xhr.send(); // si fuera post .......
}});