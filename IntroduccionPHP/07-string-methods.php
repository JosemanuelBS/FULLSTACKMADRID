<?php include 'includes/header.php';

$nombreCliente = "Juan Pablo";

// Conocer extension de un string
echo "strlen, Conocer extension de un string:";
echo strlen($nombreCliente);
var_dump($nombreCliente);
echo "<br/>";
echo "<br/>";

// Eliminar espacios en blanco al inicio y al final
$texto = trim($nombreCliente);
echo "trim, Eliminar espacios en blanco:";
echo ($texto);
echo "<br/>";
echo "<br/>";

//Convertirlo a mayusculas
echo "strtoupper, Convertirlo a mayusculas:";
echo strtoupper($nombreCliente);
echo "<br/>";
echo "<br/>";

// Convertirlo en minusculas
echo "strtolower, Convertirlo en minusculas:";
echo strtolower($nombreCliente);
echo "<br/>";
echo "<br/>";

$mail1 = "correo@correo.com";
$mail2 = "Correo@correo.com";

var_dump(strtolower($mail1) === strtolower($mail2));
echo "<br/>";
echo "<br/>";

// Reemplazar
echo "str_replace, Reemplazar:";
echo str_replace('Juan', 'J', $nombreCliente);
echo "<br/>";
echo "<br/>";

// Revisar si un string existe o no
echo "strpos, Revisar si un string existe o no:";
echo strpos($nombreCliente, 'Pablo');
echo "<br/>";
echo "<br/>";

$tipoCliente = "Premium";

echo "Concatenar con . :";
echo "El Cliente " . $nombreCliente . " es " . $tipoCliente;
echo "<br/>";
echo "<br/>";

echo "Concatenar con {}, simil a template string";
echo "El Cliente {$nombreCliente} es ${tipoCliente} sin llaves $nombreCliente ";

include 'includes/footer.php';

// PASAMOS A 08-ARRAYS.PHP 