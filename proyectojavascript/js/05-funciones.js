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

sumar(10, 20); // SEGUNDO LLAMAMOS A LA FUNCIÓN

function sumar(n1, n2) { // ARGUMENTO DE LA FUNCIÓN
    //CUERPO DE LA FUNCION
    console.log(n1 + n2);
};



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

console.log(typeof(parseInt(numero2))); // parseInt() ES UNA FUNCION
console.log(typeof(numero1.toString())); // .toString() ES UN MÉTODO

// NOMBRE DE FUNCION SEGUIDO DE PARENTESIS === FUNCIONES
// . SEGUIDO DEL NOMBRE DE LA FUNCION === METODOS. SIEMPRE LIGADO A LA VARIABLE


/*
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO
COLOR
 
Y MUESTRE POR PANTALLA
 
EL COLOR ELEGIDO ES:...
*/
function color(micolorelegido){
    console.log(`El color elegido es ${micolorelegido}`);
    console.log("El color elegido es",micolorelegido);
}

color("verde");
color("rojo");




/*
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTOS
IMPORTE, DESCUENTO
 
Y ME MUESTRE POR PANTALLA EL DESCUENTO TOTAL
Y EL PRECIO FINAL
 
LLAMAR VARIAS VECES A LA FUNCIÓN CON DISTINTOS VALORES
 
 */

function precioFinal (importe,descuento){
    console.log(`Descuento es de: ${importe*(descuento/100)}`)
    console.log(`Precio final es de: ${((importe-(importe*descuento)/100))}`)
}

precioFinal(100,20);

/*
 
 
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE CUENTE LOS CARACTERES DE UN TWEET 
ARGUMENTO DE ENTRADA, EL TEXTO DEL TWEET
 
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


// EJERCICIO
// CREAR UNA FUNCIÓN QUE AÑADA UN ELEMENTO AL FINAL A UN ARRAY PREVIAMENTE DEFINIDO
// MOSTRARLO POR CONSOLA
// RECIBE COMO ARGUMENTO DE ENTRA EL ELEMENTO
// LA FUNCION SE LLAMARA AÑADIR



function añadirFruta(array,k){
    array.push(k);
    console.log(array)
}

let frutas=["pera","platano"];
añadirFruta(frutas,123456789);
//console.log(frutas)




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



















/*
*******************
    COMIENZO CLASE 2023/10/18
*******************


!!!!!!!!!!!!!!!!!
REPASO DÍA ANTERIOR

    FUNCIONES EN JAVASCRIPT

        SERIE DE PROCEDIMIENTO O INSTRUCCIONES QUE REALIZAN UNA ACCION
        SON REUTILIZABLES

    FORMAS DE CREAR FUNCIONES:

        DECLARACION DE LA FUNCION
            function sumar(n1,n2){
                console.log(n1+n2);
            }
            sumar(10,20)

        EXPRESION DE LA FUNCION
            let sumar=function(n1,n2){
                console.log(n1+n2)
            }
            sumar(20,30)

        IIFE
            (function(){
                console.log("Funcion IIFE")
            })();

        DOS ETAPAS:
            PRIMERO----- CREAMOS
            SEGUNDO----- LLAMAMOS




FIN DEL REPASO
!!!!!!!!!!!!!!!!!

*/



// FUNCIONES QUE RETORNAN VALORES

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

agregarCarrito(200);
agregarCarrito(500);
agregarCarrito(600);

console.log("EL TOTAL A PAGAR ES DE:", total)


/*
!!!!!!!!!!!!
EJERCICIO
REALIZAR UNA FUNCIÓN QUE CALCULES EL DESCUENTO QUE SE INDIQUE DE LOS
PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME
*/


let totalAhorrado=0;
let descuento=20;

function calcularDescuento(precio=0){
    return totalAhorrado+=(precio*descuento/100)
}

calcularDescuento(200);
calcularDescuento(500);
calcularDescuento(600);

console.log("EL DESCUENTO TOTAL ES DE:",totalAhorrado)



// MÉTODOS DE PROPIEDAD

// SON FUNCIONES CON LA SINTAXIS DE MÉTODO
// VAMOS A CREAR UN REPRODUCTOR MUSICAL

const reproductor ={ // ES UN OBJETO DE FUNCIONES
    reproducir : function(nc){ 
        console.log(`Reproduciendo Canción con ID: ${nc}`)
    },
    
    pausar : function(){
        console.log("PAUSANDO CANCIÓN...")
    },

    crearPlaylist : function(nombre){
        console.log(`Creando Playlist: ${nombre}`)
    }
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist("Metal");




// AÑADIR UNA NUEVA PROPIEDAD AL OBJETO
// QUE SEA UNA FUNCIÓN BORRAR



// AÑADIMOS UNA PROPIEDAD MÁS
reproductor.borrarCancion = function(id){
    console.log(`Borrando Canción con ID: ${id}`)
}

reproductor.borrarCancion(34);

// VEREMOS EL DOM Y LOS EVENTOS MÁS ADELANTE


function nombreCompleto(nombre,ap1,ap2){
    console.log("Nombre Completo:",nombre+" "+ap1+" "+ap2),
    console.log(nombre,ap1,ap2)
    console.log(`${nombre} ${ap1} ${ap2}`)
}

nombreCompleto("Federico","García","Lorca");

/*

FUNCIONES DE FLECHA / ARROW FUNCTION

        SINTAXIS MÁS CORTA

        PARTIREMOS DE LA EXPRESIÓN DE LA FUNCIÓN 
*/

//EXPRESIÓN DE LA FUNCIÓN
let triplicar = function(numero=1){
    return numero*numero*numero;
}
let valorTriplicado = triplicar(12);
console.log(valorTriplicado)

//ARROW FUNCTION
    //PASOS
    /*
        ELIMINAR EL FUNCTION
        AÑADIR => FLECHA ANTES DE LA LLAVE DE APERTURA
        CUANDO SOLO SE TIENE UNA LINEA EN EL CUERPO DE LA FUNCIÓN PODEMOS ELIMINAR LAS LLAVES
            SI HAY MÁS DE UNA HAY QUE PONERLA {}
        CUANDO SOLO SE TIENE UN PARÁMETRO SE PUEDE ELIMINAR LOS PARÉNTESIS
            SI HAY MAS DE UN PARAMETRO, VACIO, O INICICIALIZADO HAY QUE PONERLO()
        EL RETURN VA IMPLICITO EN EL CUERPO DE LA FUNCIÓN, SE PUEDE OMITIR SU VA SOLO
            SI HAY MÁS DE UNA LINEA EN EL CUERPO DE LA FUNCIÓN HAY QUE PONERLO
    */

let triplicarFlecha = (numero=1) => numero*numero*numero;

let valorTriplicado2 = triplicarFlecha(12);
console.log(valorTriplicado2) 

/* !!!!!!!!!!!!!!!!!
EJERCICIO

CREAMOS NUEVO ARROW FUNCTION, aprendiendo, QUE  DEVUELVA UN NUMERO +7 Y LO 
ALMACENE EN UNA VARIABLE resultadoAprendiendo*/

let  aprendiendoFerro=numero => numero+7
let resultadoAprendiendoFerro=aprendiendoFerro(16)
console.log(resultadoAprendiendoFerro)





let aprendiendo = (numero=1)=> numero + 7; //PODEMOS ELIMINAR EL RETURN

let resultadoAprendiendo=aprendiendo(12);  
console.log("USO DE ARROW FUNCTION",resultadoAprendiendo)

/*

!!!!!!!!!!!!!!!
EJERCICIO

CONVERTIR CADA UNA DE LAS SIGUIENTES FUNCIONES EN ARROW FUNCTION
COPIAR EL ARRAY CARRITO DEL FINAL DEL ARCHIVO 04-arrays.JS


*/
    

let carrito = [
    {
        nombre: "TV",
        precio: 750
    },
    {
        nombre: "Tablet",
        precio: 350
    },
    {
        nombre: "Movil",
        precio: 550
    },
    {
        nombre: "PC",
        precio: 1750
    }
];

//console.table(carrito);



// SOME IDEAL PARA ARREGLO DE OBJETOS. ME BUSCA ESE VALOR DENTRO DEL ARRAY
let resultado;

resultado = carrito.some(function (producto) {
    return producto.nombre === "Tablet"
});

console.log("RESULTADO DE FUNCION SOME IDEAL", resultado);

// PONER CON ARROW FUNCTION

resultado = carrito.some(producto=>producto.nombre==="Tablet");
console.log("RESULTADO DE FUNCION SOME IDEAL CON FUNCION DE FLECHA", resultado);






// COMO SABER EL TOTAL DEL CARRITO

resultado = carrito.reduce(function (total, producto) { // PARA ITERAR
    // TOTAL, PRODUCTO: PARAMETROS DE LA FUNCION
    return total + producto.precio
},0); //SUMA UN VALOR AL RESULTADO SIMPLEMENTE
console.log("USO DE REDUCE", resultado);

//PONER CON ARROW FUNCTION

resultado = carrito.reduce((total, producto)=> total + producto.precio, 0); // EL VALOR DEL INDICE DONDE INICIA
console.log("USO DE REDUCE CON ARROW FUNCTION", resultado);



// FILTER, PARA FILTRAR

resultado = carrito.filter(function (producto) {
    return producto.precio > 400
});
console.log("USO DE FILTER", resultado);











// === ESTRICTAMENTE IGUALES, INCLUIDO TIPO DATO
// !== DIFERENTES EXTRICTAMENTE, INCLUIDOS TIPO DATO
// == IGUALES, SIN DIFERENCIAR TIPO DATO
// != DIFERENTES, PERO NO INCLUYE EL TIPO DE DATO
// < MENOR QUE
// <= MENOR IGUAL
// > MAYOR QUE
// >= MAYOR IGUAL

// PONER CON ARROW FUNCTION

resultado = carrito.filter( producto=>producto.precio > 400);
console.log("USO DE FILTER CON ARROW FUNCTION", resultado);













/*
EJERCICIO1.
CREAR UNA FUNCIÓN QUE SUME 3 NUMEROS DADOS. PONERLA CON EXPRESION, DECLARACIÓN Y COMO FUNCIÓN DE FLECHA
sumaDeclaracion
sumaExpresion
sumaFlecha
Y MUESTRE RESULTADOS POR CONSOLA

*/

function sumaDeclaracion (n1,n2,n3){
    console.log(n1+n2+n3)
}

sumaDeclaracion(1,2,3)

let sumaExpresion = function(n1,n2,n3){
    console.log(n1+n2+n3);
}

sumaExpresion(10,20,30)

let sumarFlecha = (n1,n2,n3)=> console.log(n1+n2+n3);

sumarFlecha(2,5,7)
/*












EJERCICI02
CREAR UNA FUNCIÓN QUE BUSQUE ELEMENTOS DE UN ARRAY NUMEROS.
PONERLA CON EXPRESION, DECLARACIÓN Y COMO FUNCIÓN DE FLECHA
buscaExpresion
buscaDeclaracion
buscaFlecha

*/

numeros=[10,20,30,40];

/*DECLARACION*/

let buscarDeclaracion = function(array,x){
    return array.includes(x)
};
console.log(buscarDeclaracion(numeros,10));

/*EXPRESION*/

function buscarExpresion(array,x){
    return array.includes(x)
};
console.log(buscarExpresion(numeros,80))

/*ARROW*/

let buscarFlecha = (array,x) => array.includes(x);
console.log(buscarFlecha(numeros,20));


/*











!!!!!!!!!!!!!
EJERCICIO4
CREAR UNA FUNCIÓN DE FLECHA QUE DADOS 2 PARÁMETROS 
ME DE 10 VECES LA SUMA DE AMBOS
*/


let sumarParametros=(n1,n2) => (n1+n2)*10;

console.log(sumarParametros(10,20))








let ejercicio1 = (n1, n2) => console.log("resultado de la operacion", (n1 + n2) * 10);
ejercicio1(4, 7);





/*


!!!!!!!!!!!!!
EJERCICIO5
CREAR UNA FUNCIÓN DE FLECHA QUE DADO DOS PARÁMETROS
ME INDIQUE EL NÚMERO DE CARACTERES DE LOS DOS
*/

let caracteres = (x,y) => (x.length)+(y.length);
console.log(caracteres("hola", "adios"))


function caracteresDeclaracion(x,y){
    return (x.length)+(y.length);
}
console.log(caracteresDeclaracion("hola","adios"))







let ejercicio2 = (p1, p2) => console.log("resultado ejercicio2", (p1 + p2).length);

ejercicio2("nomre", "apellido");


// PASAMOS AL ARCHIVO 06-estructuras-control.js





//!!!!!!!!!!!!!!!!!!!!!!!!!!EJERCICIO
// CREAR UNA FUNCIÓN DE FLECHA QUE QUITE EL ULTIMO ELEMENTO DEL FINAL
// DE UN ARRAY NUEVO QUE CREEMOS CADA VEZ QUE LA LLAMAMOS.






