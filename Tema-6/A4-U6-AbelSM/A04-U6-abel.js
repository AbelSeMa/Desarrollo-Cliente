var notas = [];

document.getElementById("enviar").addEventListener('click', crearAlumno)
function crearAlumno() {
    if (notas.length < 5) {
        var alumno = document.getElementById("alumno").value;
        var nota1 = document.getElementById("nota1").value;
        var nota2 = document.getElementById("nota2").value;
        var nota3 = document.getElementById("nota3").value;
        if (!alumno || !nota1 || !nota2 || !nota3) {
          alert("Debe completar todos los campos.");
        } else {
          notas.push([alumno, nota1, nota2, nota3]);
          document.getElementById("formu").reset();
        }
      }

      if (notas.length === 5) {
        var boton = document.createElement("button");
        var t = document.createTextNode("Generar tabla");
        boton.appendChild(t)
        boton.setAttribute("id", "crear")
        document.getElementById("formu").appendChild(boton)
        boton.addEventListener('click', crearTabla)
    
      }
}



function crearTabla() {

    if(document.getElementById("tabla")){
        document.body.removeChild(document.getElementById("tabla"))
    }

    var tabla = document.createElement("table");
    var thead = document.createElement("thead");
    var tr  = document.createElement("tr");
    
    const cabecera = ["Nombre", "Nota 1", "Nota 2", "Nota 3"];

    for  (e of cabecera) {
        var th = document.createElement("th");
        var texto = document.createTextNode(e);
        th.appendChild(texto);
        tr.appendChild(th)
    }

    thead.appendChild(tr);
    tabla.appendChild(thead)
    tabla.setAttribute("id", "tabla")

    var tbody = document.createElement("tbody");

    for (let index = 0; index < notas.length; index++) {
        var tr = document.createElement("tr");

        for (const key in notas[index]) {
            if (typeof notas[index][key] != "function") {
                var td = document.createElement("td");
                nodoTexto = document.createTextNode(`${notas[index][key]}`);
                td.appendChild(nodoTexto);
                tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
}};

document.onload;