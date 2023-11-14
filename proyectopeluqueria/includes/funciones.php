<?php

function obtener_servicios() {
    try {
        // Importar las credenciales
        require 'database.php';

        // Consulta SQL
        $sql = "SELECT * FROM servicios;";

        // Realizar la consulta
        $consulta = mysqli_query($db, $sql);

        return $consulta;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

obtener_servicios();
