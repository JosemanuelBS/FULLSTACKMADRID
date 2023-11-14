<?php 
declare(strict_types=1);
include 'includes/header.php';

// : ?string  LE DIGO QUE LA FUNCION RETORNA UN STRING, PERO ES OPCIONAL ?
// SI LA FUNCION IMPRIME PONDRÉ UN VOID
// TAMBIEN : STRING|INT O RETORNA STRING O ENTERO
function usuarioAutenticado(bool $autenticado) : ?string {
    if($autenticado) {
        return "El Usuario esta autenticado";
    } else {
        return null;
    }
}

$usuario = usuarioAutenticado(false);
echo $usuario;

include 'includes/footer.php';