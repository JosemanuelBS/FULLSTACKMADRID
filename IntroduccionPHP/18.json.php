<?php include 'includes/header.php';

// PHP Y JAVASCRIPT SE PUEDEN COMUNICAR POR MEDIO DE JSON

$productos = [
    [
        'nombre' => 'Tablet', 
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Televisión 24"', 
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor Curvo', 
        'precio' => 400,
        'disponible' => false
    ]
];

// HAY QUE CONVERTIR ESTE ARRAY A JSON PARA PODER LEER CON JAVASCRIPT, CON JSON_ENCODE

echo "<pre>";
var_dump($productos);

$json = json_encode($productos, JSON_UNESCAPED_UNICODE);
// CONVIERTE UN ARRAY EN UN STRING, PARA CONSUMIR CON JAVASCRIPT
// EL UNESCAPED ES PARA QUE ENTIENDA ACENTOS Y CARACTERES RAROS

$json_array = json_decode($json);
// CONVIERTE STRING EN ARRAY

var_dump($json);
var_dump($json_array);
echo "</pre>";




include 'includes/footer.php';