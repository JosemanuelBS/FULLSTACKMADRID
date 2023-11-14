<?php

// PASOS PARA CONECTARSE A UNA BASE DE DATOS
// 1- REALIZAR CONEXIÓN MSQLI_CONNECT EN OTRO ARCHIVO
// 2- IMPORTAR CREDENCIALES
// 3- CONSULTA SQL
// 4- REALIZAR CONSULTA
// 5- TRABAJAR CON RESULTADOS
// 6- CERRAR LA CONEXION (OPCIONAL)

function obtener_servicios() {
    try {
        // Importar las credenciales
        require 'database.php';

        // Consulta SQL
        $sql = "SELECT * FROM servicios LIMIT 5;"; //SIEMPRE DENTRO DE " "

        // Realizar la consulta
        $consulta = mysqli_query($db, $sql); //LE PASO LA CONEXION Y LA CONSULTA

        // Trabajar con resultados
        // echo "<pre>";
        // var_dump(mysqli_fetch_assoc($consulta)); //SOLO ME DEVUELVE EL PRIMERO
        // echo "</pre>";

        // LO USAREMOS DIRECTAMENTE EN EL HTML

        // Cerrar la conexion (opcional)
        mysqli_close($db);
        // PHP CIERRA LA CONEXION DE MANERA AUTOMATICA AL LLEGAR AL FINAL DE ESTE ARCHIVO

        return $consulta;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

obtener_servicios();
