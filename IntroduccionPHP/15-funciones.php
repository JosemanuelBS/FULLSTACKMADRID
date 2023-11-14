<?php 
declare(strict_types=1); // LE INDICAMOS QUE PHP SEA MÁS ESTRICTO
include 'includes/header.php';


// LE INDICO QUE LOS TIPO DE DATOS QUE ESPERA SON TIPO INT
// LOS INICIALIZO A 0
function sumar(int $numero1 = 0, int $numero2 ) {
    echo $numero1 + $numero2;
    echo "<br>";
}

sumar(10, 4);

// PARAMETROS NOMBRADOS
// PODEMOS DARLE VALORES A LOS PARAMETROS EN EL ORDEN QUE QUERAMOS
// PARA ELO DEBEMOS LLAMAR AL PARAMETRO E IGUAL CON :
sumar(numero2: 2, numero1: 14);


include 'includes/footer.php';