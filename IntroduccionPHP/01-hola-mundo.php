<!-- !!!!!!!!!!!!!!!!!!!!!!!
COMIENZO DE CLASE 2023/11/13 

ALOJAMOS LA CARPETA INTRODUCCIONPHP DENTRO DE HTDOCS EN APACHE-->

<!-- ARRANCAMOS PHP CON
php -S localhost:3000 -->

<!-- SI ESCRIBO FUERZA DE APERTURA Y CIERRE, ENTIENDE HTML -->




<?php include 'includes/header.php'; ?>

<h1>HOLA</h1>

<?php echo "hola Mundo";
echo "<br>"; ?>


<br>

<?php echo("Hola Mundo");
echo "<br>";


print("Hola Mundo");
echo "<br>";

print "Hola Mundo";
echo "<br>";

echo "print_r";
print_r("Hola Mundo");
echo "<br>";

var_dump("Hola Mundo");
// IMPRIME Y ADEMÁS NOS DA INFORACION DEL TIPO DE DATO

// EXTENSIONES INTERESANTES PARA PHP
// PHP INTELLISENSE
// PHP INTELLIPHENSE

// PASAMOS A 02-VARIABLES.PHP

include 'includes/footer.php'; ?>