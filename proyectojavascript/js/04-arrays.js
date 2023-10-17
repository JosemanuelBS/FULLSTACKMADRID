/*

    *******************
    COMIENZO CLASE 2023/10/16
    *******************

    CREAR UN NUEVO ARCHIVO 04-arrays.js Y COMENTAR EL 03-objetos.js

    *************
    REPASO DÍA ANTERIOR


    OBJETOS DE JAVASCRIPT

        SON CONTENEDORES DE PROPIEDADES, DONDE UNA PROPIEDAD TIENE 
        NOMBRE Y VALOR

    ESTRUCTURA DE UN OBJETO

        let/var/const NombreDelObjeto = {
            propiedad o llave del objeto : valor,
            mas propiedades : valor,
            .
            .
            .
        }

    SINTAXIS DE PUNTO
        PARA ACCEDER A LAS PROPIEDADES DEL OBJETO
        AÑADIR/MODIFICAR/ELIMINAR PROPIEDADES

    DESTRUCTURING DE OBJETOS
        let {precio,categoria} = producto;
        CREA VARIABLES A PARTIR DE LAS PROPIEDADES
        SACAR DE UNA ESTRUCTURA
        CREAMOS LA VARIABLE Y EXTRAE EL VALOR
        TODO EN UN SOLO PASO
        LA VARIABLE LA LLAMA IGUAL QUE LA PROPIEDAD

    const {disponible,precio,nombreProducto} = producto;

    CON EL METODO Object.freeze
        NO PODEMOS AÑADIR PROPIEDADES
        NO PODEMOS BORRAR PROPIEDADES
        NO PODEMOS MODIFICAR PROPIEDADES

    CON EL MÉTODO Object.Seal
        NO PODEMOS AÑADIR PROPIEDADES
        NO PODEMOS BORRAR PROPIEDADES
        SI PODEMOS MODIFICAR PROPIEDADES

    SPREAD OPERATOR
        const nuevoProducto = {...producto, ...medidas}; 
        //ME AÑADE UN NUEVO OBJETO LLAMADO nuevoProducto TODAS LAS PROPIEDADES DE
        LOS OBJETOS, productos y medidas


    FIN DEL REPASO
    *************


    
EJERCICIO!!!!!!!!!!

CREAR 3 VARIABLES

PASO1:
VARIABLEA = "valor varA"
VARIABLEB = "valor varB"
VARIABLEC = "valor varC"

*/
let variableA = "Valor varA";
let variableB = "Valor varB";
let variableC = "Valor varC";
/*

PASO2:
CREAR OBJETO EJERCICIO6 VACIO
*/
let ejercicio6 = {};

/*

PASO3:
VAMOS A CREAR PROPIEDADES A ESE OBJETO A PARTIR DE LAS VARIABLES
*/
ejercicio6.variableA = variableA;
ejercicio6.variableB = variableB;
ejercicio6.variableC = variableC;
/*
PASO4:
MOSTRAMOS POR PANTALLA EL OBJETO
*/
console.log(ejercicio6)

/*
VAMOS A DAR COMIENZO A LOS ARREGLOS A ARRAYS

FORMAN UNA PARTE DE LOS LENGUAJES DE PROGRAMACIÓN
SIRVEN PARA AGRUPAR ELEMENTOS DEL MISMO TIPO O RELACIONADOS

LISTADO DE AMIGOS EN FACEBOOK POR EJEMPLO

*/
const numeros = [10, 20, 30, 40, 50];
console.log("MI PRIMER ARRAY", numeros);
console.table(numeros);
/*

SE MUESTRA EN FORMATO TABLA

PARA LOS ARRAYS PODEMOS HACER USO DE
console.table(numeros); ME LO MUESTRA EN FORMATO TABLA

LOS OBJETOS USAN {}
LOS ARRAYS USAN []

OTRA FORMA DE CREAR ARRAYS ES CON
*/
const meses = new Array("Enero", "Febrero", "Marzo"); //MENOS UTILIZADA
console.table(meses);
/*

!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN ARRAY diaSemana
Y MOSTRARLO POR PANTALLA EN FORMATO TABLA
*/
let diaSemana = ["L", "M", "X", "J", "V"];
console.table(diaSemana)

/*


DENTRO DEL ARRAY PODEMOS TENER VALORES DE TODO TIPO, POR EJEMPLO

*/
const mezclaDatos = ["Hola", 10, true, null, [1, 2, 3]];
console.table(mezclaDatos);
/*

COMO ACCEDER A LOS VALORES DEL ARRAY
COMO SE HACÍA EN LOS OBJETOS???
nombreObjeto.Propiedad;

EN LOS ARRAYS HACEMOS USO DE LOS ÍNDICES, 
EN LA MAYORÍA DE LENGUAJE DE PROGRAMACION
EL INDICE EMPIEZA EN 0

*/
console.log("ACCEDIENDO A LOS VALORES DEL ARRAY CON EL INDICE 2", numeros[2]);
//ACCEDE AL VALOR CON INDICE 2 DEL ARRAY
/*

!!!!!!!!!!!!!!
EJERCICIO
MOSTRAR UNICAMENTE LUNES Y JUEVES
ARRAY QUE HABIAMOS CREADO diaSemana


console.log("DAMOS INDICE QUE NO ESTÁ EN EL ARRAY: ",numeros[200]);
NO ME DA FALLO, UNICAMENTE QUE NO ESTÁ DEFINIDO



    !!!!!!!!!!!!!!!!!!
    EJERCICIO
    1 CREAR UN OBJETO CON PROPIEDADES DE TIPO STRING, NUMBER Y BOOLEAN
    2 AÑADIR UNA PROPIEDAD TIPO ARRAY CON LOS DÍAS DEL FIN DE SEMANA, finSemana
    3 CREAR UN DESTRUCTURING CON CADA UNA DE LAS PROPIEDADES

*/

let ejercicio5 = {
    texto: "string",
    numero: 20,
    boolean: true,
}

ejercicio5.finSemana = ["Sabado", "Domingo"];

const { texto, numero, boolean, finSemana } = ejercicio5;

console.log("resultado ejercicio 5", texto, numero, boolean, finSemana);


// MÉTODOS PARA LOS ARRAYS

/*
CONOCER LA EXTENSIÓN DE UN ARREGLO
QUE USÁBAMOS PARA LOS STRING???
LENGTH

PUES PARA LOS ARRAYS IGUAL

*/
console.log("LONGITUD DEL ARRAY", meses.length)
/*

ITERADORES DE LOS ARRAYS, LO VEREMOS MÁS ADELANTE EN DETALLE
EL OBJETIVO ES PODER ACCEDER A CADA ELEMENTO DEL ARRAY

diaSemana.forEach(function(dia){
    console.log(dia);
})

FOREACH, POR CADA UNO DE ELLOS. RECORRE LOS ELEMENTOS DE UN ARRAY


AHORA VAMOS A VER COMO ELIMINAR/MODIFICAR/AÑADIR ELEMENTOS A LOS ARRAYS

*/
numeros[5] = 60;
// SI NO EXISTE ESE INDICE ME LO AGREGARÁ, PERO ESTA FORMA NO ES MUY
// USADA, PUES DEBEMOS SABER LA EXTENSIÓN DEL ARREGLO

numeros[2] = 120; // SI ESTE INDICE EXISTE, NOS MODIFICA EL VALOR
console.table(numeros);

// METODO PUSH, AÑADE UN ELEMENTO AL FINAL DEL ARRAY
// NO NECESITAMOS SABER LA DIMENSIÓN DEL ARREGLO

numeros.push(70); // AÑADE 70 AL FINAL DEL ARRAY
numeros.push(80, 90, 100) // PUEDES AÑADIR TANTOS VALORES COMO DESEES

// NO ES BUENA PRACTICA MODIFICAR LOS ARRAYS ORIGINALES

numeros.unshift(-10, 129020, -30); // AÑADE ELEMENTOS AL INICIO
console.log(numeros)

// ELIMINAR ELEMENTOS DE UN ARRAY

numeros.pop(); // ME ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
console.log(numeros)
numeros.shift(); // ELIMINA EL PRIMER ELEMENTO
console.log(numeros)
console.table(numeros);

// ELIMINAR X ELIMENTOS A PARTIR DEL Y splice(Y,X)
numeros.splice(2, 3); // (INDICE, VALORES A ELIMINAR)
console.log(numeros)
// LAS DESVENTAJAS ES QUE ESTAMOS MODIFICANDO EL ARRAY ORIGINAL
// PARA EVITAR ESO, CREAMOS UN ARRAY NUEVO CON REST/SPREAD OPERATOR

const nuevoArreglo = [16.54, ...numeros, 1540];
console.log(nuevoArreglo);


/*
!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN ARRAY QUE SE LLAME ESTACIONES
INICIALIZAMOS CON VERANO SOLAMENTE

DESPUÉS
AÑADIR PRIMAVERA EN SU LUGAR CORRESPONDIENTE
IDEM AÑADIR OTOÑO, INVIERNO

PRIMAVERA, VERANO, OTOÑO, INVIERNO

MOSTRAMOS POR PANTALLA

*/
let estaciones = ["Verano"];
estaciones.unshift("Primavera");
estaciones.push("Otoño", "Invierno")

console.log(estaciones)



//!!!!!!!!!! EJERCICIO

// CREAR UN ARRAY CARRITO
// CON 4 OBJETOS EN SU INTERIOR
// CON PROPIEDADES NOMBRE Y PRECIO
// ASIGNAR VALORES QUE QUERAIS

// MOSTRAR POR PANTALLA


let carrito = [
    {
        nombre: "Nombre1",
        precio: 1
    },
    {
        nombre: "Nombre2",
        precio: 2
    },
    {
        nombre: "Nombre3",
        precio: 3
    },
    {
        nombre: "Nombre4",
        precio: 4
    }
];
console.table(carrito)





// let carrito = [
//     {
//         nombre: "TV",
//         precio: 750
//     },
//     {
//         nombre: "Tablet",
//         precio: 350
//     },
//     {
//         nombre: "Movil",
//         precio: 550
//     },
//     {
//         nombre: "PC",
//         precio: 1750
//     }
// ];

// console.table(carrito);


// MÁS MÉTODOS PARA LOS ARRAYS

// INCLUDE PARA ARREGLO PLANO
let resultado;

resultado = meses.includes("Mayo");
console.log("USO DE INCLUDES PARA BUSCAR EN ARRAY PLANO", resultado);
// NO PODEMOS UTILIZARLO PARA ARREGLO DE OBJETOS


// SOME IDEAL PARA ARREGLO DE OBJETOS

resultado = carrito.some(function (producto) {
    return producto.nombre === "Tablet" //ME DEVOLVERÁ TRUE/FALSE
});

console.log("RESULTADO DE FUNCION SOME IDEAL", resultado);

// COMO SABER EL TOTAL DEL CARRITO. REDUCE

resultado = carrito.reduce(function (total=0, producto) { // PARA ITERAR
    // TOTAL, PRODUCTO SON LOS PARAMETROS DE LA FUNCION
    return total + producto.precio
}, 0); // EL VALOR DONDE INICIA
console.log("USO DE REDUCE", resultado);

// FILTER, PARA FILTRAR
// EL MÁS UTILIZADO

resultado = carrito.filter(function (X) {
    return X.precio <= 1
});
console.log("USO DE FILTER", resultado);

// === EXACTAMENTE IGUALES
// == IGUALES PERO NO ESTRICTAMENTE 200="200"
// !== DIFERENTES
// < MENOR QUE
// <= MENOR IGUAL
// > MAYOR QUE
// >= MAYOR IGUAL

// VAMOS A CREAR NUESTRO 05-funciones.JS
