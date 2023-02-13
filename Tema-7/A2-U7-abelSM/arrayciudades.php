<?php
    // Array de ciudades

    $ci = ["Sanlucar de Barrameda", "Jerez de la Frontera", "Puerto de Santa Maria", 
            "Chipiona", "Sevilla", "Sanlucar la Mayor", 
            "Jerez de los caballeros", "Bornos", "Conil de la frontera",
            "Trebujena", "Lebrija", "Almonte", "El Rocio", "Rota",
            "Melilla", "Nejar", "Villar de Cañas", "Zamora", "Fuengirola",
            "Gijón", "Hierro"
         ];

    //Capturar el valor del input que viene de la url

    $nombre = $_REQUEST["ciudad"];
    $sugerencia = "";
    //Comprobaciones

    if($nombre !==""){
        $nombre = strtolower($nombre); //pasamos el nombre a minusculas
        $long = strlen($nombre); //

        foreach($ci as $nom){ //Cada elemento del array lo pasa a $nom en cada iteracion
            if (stristr($nombre, substr($nom, 0, $long))){
                if($sugerencia === ""){
                    $sugerencia = $nom;
                }else {
                    $sugerencia = "$sugerencia, $nom";
                }
            } // stristr compara dos cadenas y la i del medio independiente si es minuscula

            
        }
    }
    echo ($sugerencia ==="")?"No hay sugerencias":$sugerencia;

    ?>