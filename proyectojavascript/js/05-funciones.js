/*
CREAMOS EL ARCHIVO 05-funciones.js
**********************
INICIO DE CLASE
*********************


!!!!!!!!!!!!!!!!!
REPASO DÍA ANTERIOR

    ARRAYS/ARREGLOS
        FORMAN UNA PARTE DE LOS LENGUAJES DE PROGRAMACIÓN
        SIRVEN PARA AGRUPAR ELEMENTOS DEL MISMO TIPO O RELACIONADOS
        LISTADO DE AMIGOS EN FACEBOOK POR EJEMPLO


    const numeros = [10, 20, 30, 40, 50];
    const meses = new Array("Enero", "Febrero", "Marzo"); //MENOS UTILIZADA

        
    EN LOS ARRAYS HACEMOS USO DE LOS ÍNDICES, 
    EN LA MAYORÍA DE LENGUAJE DE PROGRAMACION
    EL INDICE EMPIEZA EN 0  
    numeros[0]

    MODIFICAR/AÑADIR/ELIMINAR ELEMENTOS

    MÉTODOS
        LENGTH
        console.log("LONGITUD DEL ARRAY", meses.length)

        PUSH  AÑADE UN ELEMENTO AL FINAL DEL ARRAY
        numeros.push(70);

        UNSHIFT AÑADE ELEMENTOS AL INICIO
        numeros.unshift(-10, 129020, -30);

        numeros.pop(); // ME ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
        numeros.shift(); // ELIMINA EL PRIMER ELEMENTO
        console.table(numeros);

        // INCLUDE PARA ARREGLO PLANO, BUSCA VALOR Y DA TRUS/FALSE
        resultado = meses.includes("Mayo");

        // SOME IDEAL PARA ARREGLO DE OBJETOS
        resultado = carrito.some(function (producto) {
            return producto.nombre === "Tablet" //ME DEVOLVERÁ TRUE/FALSE
        });

        // COMO SABER EL TOTAL DEL CARRITO. REDUCE

        resultado = carrito.reduce(function (total, producto) { // PARA ITERAR
            // TOTAL, PRODUCTO SON LOS PARAMETROS DE LA FUNCION
            return total + producto.precio
        }, 0); // EL VALOR DONDE INICIA
        console.log("USO DE REDUCE", resultado);

        // FILTER, PARA FILTRAR
        // EL MÁS UTILIZADO

        resultado = carrito.filter(function (producto) {
            return producto.precio > 400
        });
        console.log("USO DE FILTER", resultado);

        numeros.splice(2, 3); // (INDICE, VALORES A ELIMINAR)

        FOREACH, ITERADOR
        meses.forEach(function (X){
            console.log(X); // CUERPO DE LA FUNCION
        })
!!!!!!!!!!!!!!!!!

 
FUNCIONES EN JAVASCRIPT

    SERIE DE PROCEDIMIENTO O INSTRUCCIONES QUE REALIZAN UNA ACCION
    SON REUTILIZABLES


FORMAS DE CREAR FUNCIONES:

    DECLARACION DE LA FUNCION
    EXPRESION DE LA FUNCION
    IIFE


******************
DECLARACIÓN DE LA FUNCIÓN
*/

//PRIMERO CREAMOS LA FUNCIÓN

function sumar(n1, n2) { // ARGUMENTO DE LA FUNCIÓN
    //CUERPO DE LA FUNCION
    console.log(n1 + n2);
};

sumar(10, 20); // SEGUNDO LLAMAMOS A LA FUNCIÓN

/*
 
 
 
 
*******************
EXPRESION DE LA FUNCION
*/
const sumar2 = function (n3, n4) {
    console.log(n3 + n4);
}


sumar2(3, 9);

// LA REALIDAD ES QUE LO ASIMILA MÁS A UNA VARIABLE QUE
// A UNA FUNCIÓN



/*
*********************
IIFE
SINTAXIS UN POCO DIFERENTE
*/
(function () {
    console.log("Esto es una funcion")
})();
// ESTAS FUNCIONES TIENEN LAS CARACTERISTISTA
// DE QUE NO HACE FALTA LLAMARLAS, SE LLAMAN ELLAS MISMAS 
// NO LAS UTILIZAREMOS MUCHO
// EL FIN ES PROTEGER QUE NO SE MEZCLEN LAS VARIABLES Y
// FUNCIONES CON LAS DE OTROS ARCHIVOS


/* FUNCIONES, PASO
 
PRIMERO----- CREAMOS
SEGUNDO----- LLAMAMOS
 
javascript SE EJECUTA EN DOS ETAPAS
PRIMERA ETAPA, LEE LA CREACION DE FUNCIONES. SE REGISTRAN LAS FUNCIONES. ETAPA DE CREACION
SEGUNDA ETAPA, LEE LA LLAMADA. SE REGISTRAN LAS LLAMADAS, ETAPA DE EJECUCIÓN.
 
LA EXPRESIÓN DE LA FUNCIÓN LA DETECTA COMO UNA VARIABLE MÁS QUE COMO UNA FUNCIÓN
POR ESO SI LLAMAMOS A LA FUNCIÓN ANTES DE LA CREACIÓN NO FUNCIONA
 
 
DIFERENCIA ENTRE METODO Y FUNCION
ACABAN SIENDO PRACTICAMENTE LO MISMO
 
ES MAS EL CONTEXTO EN EL QUE SE UTILIZAN
*/
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); // parseInt() ES UNA FUNCION
console.log(numero1.toString()); // .toString() ES UN MÉTODO

// NOMBRE DE FUNCION SEGUIDO DE PARENTESIS === FUNCIONES
// . SEGUIDO DEL NOMBRE DE LA FUNCION === METODOS. SIEMPRE LIGADO A LA VARIABLE


/*
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO
COLOR
 
Y MUESTRE POR PANTALLA
 
EL COLOR ELEGIDO ES:...
 
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTOS
IMPORTE, DESCUENTO
 
Y ME MUESTRE POR PANTALLA EL DESCUENTO TOTAL
Y EL PRECIO FINAL
 
LLAMAR VARIAS VECES A LA FUNCIÓN CON DISTINTOS VALORES
 
 
 
 
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE CUENTE LOS CARACTERES DE UN TWEET 
 
*/

function tweet(textoTweet) {
    console.log("La longitud del tweet es:", textoTweet.length);
};

tweet("Este es un texto de prueba para contar el numero de caracteres");

// CREAR UNA FUNCIÓN QUE DADO UN TEXTO Y UNA PALABRA, ME DIGA SI
// LA PALABRA ESTA CONTENIDA EN EL TEXTO

function buscar(texto, palabra) {
    console.log("Buscamos la palabra en el texto, está?:", texto.includes(palabra))
};

buscar("Este texto vamos a buscar", "buscar");
buscar("Texto donde voy a buscar", "rojo");


// function añadir(palabra, array){
//     console.log(array.push(palabra))
// }

// añadir(3,[1,2]);

/*
 
 
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE ME RESTE DOS VALORES DADOS
 
*/

function restar(n1, n2) {
    console.log(`Resultado de restar ${n1}-${n2}: ${n1 - n2}`)
}

restar(10, 2);
restar(7, 3);
restar(2); // ESTÁ ESPERANDO 2 VALORES, Y SOLO RECIBE UNO,
//PARA ELLO EXISTEN LOS PARÁMETROS POR DEFECTO, QUE NO SON
//MÁS QUE INICIALIZAR LOS PARAMETROS A VALORES PREDETERMINADOS

function restar2(n1 = 0, n2 = 0) {
    console.log(`Resultado de restar n1-n2 con parametros por default: ${n1 - n2}`)
}

restar2(2);
restar2();

/*
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE SOLUCIONE LAS ECUACIONES DE SEGUNDO GRADO
X=(-B +-SQRT(B*B -4*A*C))/2*A
 
A, B, C
ecuacionSegundo
*/

function ecuacionSegundo(A = 0, B = 0, C = 0) {
    console.log("Resultado operacion segundo Grado +:", (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A));
    console.log("Resultado operacion segundo Grado -:", (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A));
};

ecuacionSegundo(2, 10, 1);
ecuacionSegundo(2, 10);








// FUNCIONEN QUE RETORNAN VALORES

function multiplicar(n1, n2) {
    return n1 * n2; // ME RETORNA UN VALOR
}

let valorRetornado = multiplicar(2, 5);
console.log("EL VALOR RETORNADO ES:", valorRetornado);


//OTRA FUNCIÓN UN POCO MAS COMPLEJA

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

total = agregarCarrito(200);
total = agregarCarrito(500);
total = agregarCarrito(600);

console.log("EL TOTAL A PAGAR ES DE:", total)





/*
!!!!!!!!!!!!
EJERCICIO
REALIZAR UNA FUNCIÓN QUE CALCULES EL IVA QUE SE INDIQUE DE LOS
PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME
*/


let impuesto=0;
let IVA=21;

function calcularImpuesto(precio=0){
    return impuesto+=(precio*IVA/100)
}

impuesto = calcularImpuesto(200);
impuesto = calcularImpuesto(500);
impuesto = calcularImpuesto(600);

console.log("EL TOTAL DE IMPUESTOS A PAGAR ES DE:",impuesto)



let totalConImpuestos = 0;

function sumarImpuestos(precio, impuesto) {
    return totalConImpuestos += precio * (1+impuesto / 100)
}

sumarImpuestos(200, 10);
sumarImpuestos(300, 21);
sumarImpuestos(500, 5);

console.log("EL TOTAL CON IMPUESTOS ES DE:", totalConImpuestos)










