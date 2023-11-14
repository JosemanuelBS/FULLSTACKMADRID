<?php include 'includes/header.php';

$clientes = [];
$clientes2 = array();
$clientes3 = array('Pedro', 'Juan', 'Karen');
$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200
];

// Empty - Revisa si un arreglo esta vacio
echo "Empty - Revisa si un arreglo esta vacio";
echo "<br>";
var_dump( empty($clientes) );
echo "<br>";
var_dump( empty($clientes3) );
echo "<br>";
var_dump( empty($clientes2) );

echo "<br>";
echo "<br>";


// Isset - Revisar si un arreglo esta creado o una propiedad esta definida
echo "Isset - Revisar si un arreglo esta creado o una propiedad esta definida";
echo "<br>";
var_dump( isset($clientes4) );
echo "<br>";
var_dump( isset($clientes) );
echo "<br>";
var_dump( isset($clientes2) );
echo "<br>";
var_dump( isset($clientes3) );
echo "<br>";
echo "<br>";

// Isset - permite revisar si una propiedad de un arreglo asociativo, existe!
echo "Isset - permite revisar si una propiedad de un arreglo asociativo, existe!";
echo "<br>";
var_dump( isset($cliente['nombre']) );
echo "<br>";
var_dump( isset($cliente['codigo']) );
echo "<br>";

//PASAMOS A 11-FUNCIONES-ARRAYS.PHP


include 'includes/footer.php';