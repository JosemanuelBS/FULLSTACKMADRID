<?php

$db = mysqli_connect('localhost', 'root', 'Fullstack', 'peluqueria');

// ALMACENO EN $DB EL RESULTADO DE LA CONSULTA
// VALORES QUE RECIBE:
    // - SERVIDOR
    // - USUARIO
    // - CONTRASEÑA
    // - BASE DE DATOS

if(!$db) {
    echo "Hubo un error"; // SI LA CONEXIÓN NO HA SIDO EXITOSA ME MUESTRA EL ERROR
    exit; //ME FUERZA LA SALIDA Y EVITA QUE SIGA EJECUTANDOSE EL RESTO DE CODIGO
} else{
    echo "Conexión exitosa";
}