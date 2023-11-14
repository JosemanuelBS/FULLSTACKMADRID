<?php include 'includes/header.php';


$numero1 = 30;
echo "++numero1";
echo ++$numero1;
//SI PONGO ECHO NUMERO++ PRIMERO IMPRIME Y DESPUES INCREMENTA
//PARA INCREMENTAR ANTES PONGO ++NUMERO


$numero1 += 5; //INCREMENTA DE 5 EN 5
echo "numero1, HE ACTUALIZADO ANTES LA VARIABLE";
echo $numero1;

$numero2 = 30;
echo "--numero2";
echo --$numero2;

// PASAMOS AL 07-string-methods.php

include 'includes/footer.php';