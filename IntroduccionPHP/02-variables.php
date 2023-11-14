<?php include 'includes/header.php';

//CREAMOS LAS VARIABLES CON EL SIGNO DE DOLAR + EL NOMBRE
//EN JAVASCRIPT CON LET/ VAR O CONST
//NO PUEDE INICIAR POR NUMEROS NI CARACTERES EXTRAÑOS

$nombre = "Juan";


$nombre = "Juan 2"; //REASIGNAMOS VALOR

echo $nombre;
var_dump($nombre);

define('constante', "Este es el valor de la constante");
echo constante;

//CON EL DEFINE LO QUE CREA ES UN IDENTIFICADOR
//PRA MOSTRARLO NO USAMOS EL SIGNO DE DOLAR

const constante2 = "Hola 2"; //OTRA FORMA DE CREAR IDENTIFICADORES MENOS USADA
echo constante2;

$nombreCliente = "Pedro"; //EN JAVASCRIPT SE USABA ESTE
$nombre_cliente = "Pedro"; //EN PHP ESTE ENFOQUE SE USA MÁS

include 'includes/footer.php'; 

// PASAMOS AL 03-VARIABLES.PHP ?>