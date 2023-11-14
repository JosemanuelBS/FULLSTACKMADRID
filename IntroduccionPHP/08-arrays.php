<?php include 'includes/header.php';

// EXISTEN DOS TIPOS DE ARRAYS: ARRAYS INDEXADOS Y ARRAYS ASOCIATIVOS
// OBJETOS NO EXISTEN EN PHP, SE CONOCEN COMO ARRAYS ASOCIATIVOS


$carrito = ['Tablet', 'Television', 'Computadora'];
// PODEMOS USAR TAMBIEN: carrito = array()

// Util para ver los contenidos de un array
echo "<pre>"; // LO QUE HACE ES PREFORMATEAR
var_dump($carrito);
echo "</pre>"; // NECESITA EL CIERRE

// Acceder a un elemento del array
echo $carrito[1];

// Añade un elemento en el indice 3 del arreglo
$carrito[3] = 'Nuevo Producto...';

// Añadir un elemento nuevo al final...
array_push($carrito, 'Audifonos');

// Añadir al inicio
array_unshift($carrito, 'Smartwatch');



// Util para ver los contenidos de un array
echo "<pre>";
var_dump($carrito);
echo "</pre>";

// ALTERNATIVA PARA CREAR ARRAYS
$clientes = array('Cliente 1', 'Cliente 2', 'Cliente 3');
echo "<pre>";
var_dump($clientes);
echo "</pre>";

echo $clientes[1];

// PASAMOS A 09-ARRAYS-ASSOC.PHP

include 'includes/footer.php';