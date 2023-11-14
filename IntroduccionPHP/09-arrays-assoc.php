<?php include 'includes/header.php';

// EL SIMIL A LOS OBJETOS DE JAVASCRIPT

$cliente = [
    'nombre' => 'Juan', 
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'premium', 
        'disponible' => 100
    ]
];
echo "<pre>";
var_dump($cliente);
echo "</pre>";


echo "<pre>";
var_dump($cliente['informacion']);
echo "</pre>";

// echo $cliente['nombre'];
// echo $cliente['informacion']['disponible'];

// SI NO EXISTE LA PROPIEDAD, LA CREA, COMO EN JAVASCRIPT
$cliente['codigo'] = 1209192012;


echo "<pre>";
var_dump($cliente);
echo "</pre>";

//PASAMOS AL 10-ISSET-EMPTY.PHP


include 'includes/footer.php';