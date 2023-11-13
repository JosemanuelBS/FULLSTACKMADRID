<?php 
declare(strict_types=1);
include 'includes/header.php';



function sumar(int $numero1 = 0, array $numero2 ) {
    echo $numero1 + $numero2;
}

sumar(10, []);


include 'includes/footer.php';