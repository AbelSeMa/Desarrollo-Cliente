function Coches(marca, modelo, color, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
}

function crearTabla(...coches) {

    if(document.getElementById("tabla")){
        document.body.removeChild(document.getElementById("tabla"))
    }

    var tabla = document.createElement("table");
    var thead = document.createElement("thead");
    var tr  = document.createElement("tr");
    
    const cabecera = ["Marca", "Modelo", "Color", "Año de fabricacion"];

    for  (e of cabecera) {
        var th = document.createElement("th");
        var texto = document.createTextNode(e);
        th.appendChild(texto);
        tr.appendChild(th)
    }

    thead.appendChild(tr);
    tabla.appendChild(thead)
    tabla.setAttribute('align', 'center')

    var tbody = document.createElement("tbody");

    for (let index = 0; index < coches.length; index++) {
        var tr = document.createElement("tr");

        for (const key in coches[index]) {
            if (typeof coches[index][key] != "function") {
                var td = document.createElement("td");
                nodoTexto = document.createTextNode(`${coches[index][key]}`);
                td.appendChild(nodoTexto);
                tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
}};
var coche1 = new Coches("Subaru", "BRZ", "Azul", "2021");
var coche2 = new Coches("Toyota", "GT32", "Blanco", "2023");
var coche3 = new Coches("Ferrari", "La Ferrari", "Rojo", "2023");
var coche4 = new Coches("Nissan", " GTR nismo", "Negro", "2020");
var coche5 = new Coches("Mitsubishi", "EVO IX", "Rojo", "2018");


document.getElementById("tabla").addEventListener('click', ()=> {
    crearTabla(coche1, coche2, coche3, coche4, coche5)

});