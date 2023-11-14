<?php include 'includes/header.php';

$numero1 = 20;
$numero2 = 30;
$numero3 = 30;
$numero4 = "30";

var_dump("Mayor, numero1 > numero: ");
var_dump($numero1 > $numero2);
echo "<br/>";

var_dump("Menor, numero1 < numero2: ");
var_dump($numero1 < $numero2);
echo "<br/>";

var_dump("Mayor igual, numero1 >= numero2: ");
var_dump($numero1 >= $numero2);
echo "<br/>";

var_dump("Menor igual, numero1 <= numero2: ");
var_dump($numero1 <= $numero2);
echo "<br/>";

var_dump("Igual, numero2 == numero3: ");
var_dump($numero2 == $numero3);
echo "<br/>";

var_dump("Igual, numero2 == numero4: ");
var_dump($numero2 == $numero4);
echo "<br/>";

var_dump("Exactamente igual, numero2 === numero4: ");
var_dump($numero2 === $numero4);
echo "<br/>";

// -1 Si Izquierda es menor, 0 Si es igual, 1 Si izquierda es mayor
var_dump("-1,0,1 numero1 <=> numero2: ");
var_dump($numero1 <=> $numero2);
echo "<br/>";

var_dump("-1,0,1 numero2 <=> numero3: ");
var_dump($numero2 <=> $numero3);
echo "<br/>";

var_dump("-1,0,1 numero2 <=> numero1: ");
var_dump($numero2 <=> $numero1);
echo "<br/>";

//PASAMOS AL 06-INC-DEC.PHP

include 'includes/footer.php';