/*CREAR EL 02-tipos-de-datos.JS
*/


// TIPOS DE DATOS EN JAVASCRIPT
/*

HACE REFERENCIA AL TIPO DE VALOR QUE VA A TENER ESA VARIABLE

NUMERO, TEXTO, BOOLEANO...

    *******STRING

    REPRESENTAN UN TEXTO
*/
const producto1 = "Juego de mesa EL PUEBLO DUERME"; //LA MAS UTILIZADA
const producto2 = String("DOOBLE");
const producto3 = new String("UNO"); //SON OBJETOS, LO VEREMOS

console.log ("PRODUCTO1:",producto1); // VAMOS AÑADIR EN EL CONSOLE.LOG
//INDICACIONES DE LO QUE ESTAMOS MOSTRANDO
console.log ("PRODUCTO2 CON STRING:",producto2);
console.log ("PRODUCTO3 CON NEW STRING:",producto3);

// TYPEOF PARA VER EL TIPO DE DATO QUE TIENE UNA VARIABLE
console.log ("TYPEOF PRODUCTO1:",typeof producto1,producto1);
console.log ("TYPEOF PRODUCTO2:",typeof producto2);
console.log ("TIPOOF PRODUCTO3",typeof producto3);

/*
!!!!!!!!!!!!!!!!
EJERCICIO
CREAR DOS VARIABLES CON LET 

*/

let numero100 = 100;
let numero200 = "200";

console.log ("NUMERO100:",numero100);
console.log ("NUMERO200:",numero200);

console.log ("TIPO DE NUMERO100:",typeof numero100);
console.log ("TIPO DE NUMERO200:",typeof numero200);


/*
METODOS PARA LOS STRINGS

SON FUNCIONES QUE PUEDES UTILIZAR PARA VARIAR EN
FUNCION DEL TIPO DE DATO

*/

console.log("METODO LENGTH:",producto1.length); // ME DICE LA LONGITUD DE LA VARIABLE

// INDEXOF PARA BUSCAR SI UNA PALABRA EXISTE EN UNA CADENA DE TEXTO Y ME DA LA POSICION
// SI LO ENCUENTRA, SI NO LO ENCUENTRA -1

console.log("METODO INDEXOF:",producto1.indexOf("DUERME"));

// 0 o POSITIVO SI EXISTE EN LA CADENA DE TEXTO
// -NEGATIVO NO EXISTE

//INCLUDES RETORNA TRUE O FALSE
console.log("METODO INCLUDES:",producto1.includes("DUERME"));


const ejstring1 = "casa";
let ejstring2 = String("cuento de hadas");
let ejstring3 = "garaje";

console.log("metodo length:",ejstring1.length);
console.log("metodo indexof:",ejstring2.indexOf("hadas"));
console.log("metodo includes:",ejstring3.includes("garaje"));




/*******************
COMIENZO CLASE 2023/10/10
*******************

    %%%%%%%%%%%%%%%%%%%%%%%%%
    REPASO DÍA ANTERIOR


        JAVASCRIPT
        ES UN LENGUAJE DE TIPO DINAMICO. GUARDA EL TIPO DE DATO EN
        EL VALOR QUE TIENE Y NO EN LA VARIABLE. NO ES UN LENGUAJE TIPADO

        DIRECTAMENTE EN EL HTML
        <script>
            alert("Hola Mundo");
        </script>

        EN UN ARCHIVO EXTERNO
        <script src="js/01-variables.js"> </script>

        VARIABLES
            LAS VARIABLES Y LAS FUNCIONES SON UNA CARACTERISTICA DE UN LENGUAJE
            DE PROGRAMACION

            VAR     YA NO SE UTILIZA, EL LET LA SUSTITUYE
            LET     PARA VALORES DINAMICOS
            CONST   PARA VALORES ESTATICOS

        let nombreVariable = valor;

        3 PARTES

            PALABRA RESERVADA let/var/const
            NOMBRE A LA VARIABLE (VEREMOS REGLAS)
            VALOR A LA VARIABLE

        TIPOS DE DATOS QUE ADQUIERES LAS VARIABLES

        -STRING
            "" Y METODOS (LENGTH, INDEXOF, INCLUDES)
        -NUMBER
        -BOOLEAN

        

    FIN DEL REPASO
    %%%%%%%%%%%%%%%%%%%%%%%%%



/*


    ************* NUMBER
    TODOS LOS NUMEROS EN JAVASCRIPT SON TRATADOS POR IGUAL
    DA IGUAL QUE SEAN ENTEROS, DECIMALES, NEGATIVOS, FRACCIONES...
*/
let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200"; //TIPO STRING
let numero4 = 2/3;


// EJERCICIO MOSTRAR POR PANTALLA ESOS NUMEROS Y EL TIPO DE DATOS DE CADA UNO

console.log("NUMERO 1:", numero1);
console.log("NUMERO 2:", numero2);
console.log("NUMERO 3:", numero3);
console.log("NUMERO 4:", numero4);

console.log("TYPEOF NUMERO 1:", typeof numero1);
console.log("TYPEOF NUMERO 2:", typeof numero2);
console.log("TYPEOF NUMERO 3:", typeof numero3);
console.log("TYPEOF NUMERO 4:", typeof numero4);

console.log("NUMERO1 Y TYPEOF NUMERO 1:", numero1, typeof numero1);
console.log("NUMERO2 Y TYPEOF NUMERO 2:", numero2, typeof numero2);
console.log("NUMERO3 Y TYPEOF NUMERO 3:", numero3, typeof numero3, numero3.length);
console.log("NUMERO4 Y TYPEOF NUMERO 4:", numero4, typeof numero4);

//COLOR NEGRO SON STRING
//COLOR AZUL TIPO NUMBER

console.log("NUMERO 1 + NUMERO 2:", numero1 + numero2);
console.log("NUMERO 1 + NUMERO 3:", numero1 + numero3);


//OPERACIONES MATEMÁTICAS

/*
SUMA +
RESTA -
MULTIPLICACION *
DIVISION /
MODULO % ME DA EL VALOR DEL RESIDUO DE LA DIVISION
7%6 =1
7%3 =1
8%6 =2

!!!!!!!!!!!!!!!!!!!
EJERCICIO, CREAR OPERACIONES CON CADA UNO DE ESTOS OPERADORES, 
CON NUMERO 1 Y 2
*/




console.log("NUMERO 1+2:", numero1+numero2);
console.log("NUMERO 1-2:", numero1-numero2);
console.log("NUMERO 1*2:", numero1*numero2);  
console.log("NUMERO 1/2:", numero1/numero2);  
console.log("NUMERO 1%2:", numero1%numero2);


/*
MÉTODOS PARA LOS NÚMEROS (MATH)

EN CONSOLA PODEMOS PONER WINDOW Y BUSCAMOS MATH

    TODAS ESAS FUNCIONES PERTENECEN AL MÉTODO DE MATH

    ALGUNAS DE LAS MÁS UTILIZADAS

    Math.random(); ME MUESTRA UN RESULTADO ALEATORIO ENTRE 0-1

    !!!!!!!!!!!!!!!!!!!!!
    EJERCICIO
    CREAR UNA VARIABLE QUE SE LLAME RESULTADO Y QUE 
    ALMACENE UN NUMERO ALEATORIO ENTRE 0-1
    Y MOSTRATRARLA POR PANTALLA
*/




let resultado = Math.random();

console.log("USO DE METODO RANDOM():",resultado);


/*
    Math.PI; PARA MOSTRAR EL NUMERO PI

    Math.round(2.5); PARA REDONDEAR

    Math.ceil(2.1); REDONDEA HACIA ARRIBA

    Math.floor(2.9); REDONDEA HACIA ABAJO

    Math.sqrt(144); RAIZ CUADRADA

    Math.pow(x,2); ELEVA AL CUADRADO X

    Math.abs(-200); MUESTRA EL VALOR ABSOLUTO

    Math.min(2,3,1,0); ME DA EL VALOR MENOR

    Math.max(2,3,1,0); ME DA EL VALOR MAYOR
    
    COMBINACIONES DE LAS ANTERIORES
    NUMERO ALEATORIO ENTRE 0 Y 30 ENTERO

    Math.floor( Math.random()*30);



!!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UNA VARIABLE QUE SE LLAME DIAMETRO Y OTRA QUE SE LLAME AREA
IMPLEMENTAR LA OPERACIÓN MATEMÁTICA QUE ME CALCULA EL AREA EN FUNCIÓN
DEL DIAMETRO Y MOSTRARLO POR PANTALLA

*/
let diametro = 20;
let radio = diametro / 2;
let area = Math.PI * Math.pow(radio, 2);
console.log("Este es el area a partir del diametro", area);
let areaRedondeo = Math.round(area); 
console.log("Este es el numero redondeado con Mathround", areaRedondeo);



//!!!!!!!!!!!!!!!!!!!!!!
// EJERCICIO, CREAR UN DADO

let dado = Math.round(1+Math.random()*5);

console.log("Resultado dado:", dado);
/*


!!!!!!!!!!!!!!!!!!!!
EJERCICIO
MOSTRAR POR PANTALLA UN NÚMERO ALEATORIO ENTRE 2-3
ALMACENAR EL VALOR EN LA VARIABLE resultadoEj2








ORDEN DE LAS OPERACIONES

!!!!!!!!!!!!!!!!!!!!
EJERCICIO
QUE RESULTADO TENDRÁ ESTA OPERACIÓN

20 + 30 * 2;

EXACTAMENTE IGUAL QUE EN LAS REGLAS MATEMÁTICAS

POR ORDEN DE PRIORIDAD
()  PARÉNTESIS
*,/ MULTIPLICACIONES Y DIVISIONES
+,- SUMAS Y RESTAS


*/
let resultadoOrden = 20 + 30 * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES",resultadoOrden);

let resultadoOrden2 = (20 + 30) * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES 2",resultadoOrden2);

/*

!!!!!!!!!!!!!!!!!!
EJERCICIO CALCULAR EL DESCUENTO Y EL TOTAL A PAGAR


HAY UNA PROMOCIÓN QUE APLICA EL 40% DE DESCUENTO POR SER BLACK FRIDAY

MOSTRAR POR PANTALLA EL TOTAL A PAGAR Y EL AHORRO

TENGO UN CARRITO DE LA COMPRA CON 3 PRENDAS
PRENDA1 120€
PRENDA2 85€
PRENDA3 24€
DESCUENTO

*/

let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;
let porcentaje = 40 //porcentaje

let descuento =(prenda1 + prenda2 + prenda3) * porcentaje/100;
console.log("total descuento",descuento);

let totalPagar = (prenda1 + prenda2 + prenda3) - descuento;
console.log("total a pagar",totalPagar);






/*





INCREMENTOS/DECREMENTOS
EJEMPLO REALES, EL NUMERO DE ME GUSTAS EN INSTAGRAM

*/

let meGusta=0;

//meGusta++; // INCREMENTA EN 1 EL VALOR DE meGusta

console.log("USO DE INCREMENTOS, ME GUSTA:",meGusta+=15);
console.log("TRAS EL INCREMENTO",meGusta)

// SI COLOCO EL INCREMENTO DENTRO DEL CONSOLE.LOG PRIMERO
// ME MUESTRA LA VARIABLE Y DESPUES ME LA INCREMENTA


let meGusta2=0;

// console.log("USO DE INCREMENTOS DENTRO DEL CONSOLE",meGusta2++);
console.log("USO DE INCREMENTOS DENTRO DEL CONSOLE PRIMERO",++meGusta2); //INCREMENTA PRIMERO
console.log("HE LLAMADO DE NUEVO A meGusta2",meGusta2);

/*

meGusta+=3; ME AUMENTA DE 3 EN 3
meGusta--; RESTA DE UNO EN UNO, PARA GESTION DE STOCK



VAMOS HACER USO DE LA CONCATENACIÓN

+ CON NUMEROS LOS SUMA, CON STRING LOS CONCATENA

CREAMOS 2 VARIABLES TIPO CONST Y LE ASIGNAMOS LOS VALORES QUE QUERAMOS

NOMBRE
EMAIL

Y MOSTRAMOS POR PANTALLA

COMO PODEMOS HACER PARA MOSTRARLO TODO JUNTO?

HACIENDO USO DE LA CONCATENACIÓN 
console.log(nombre + email); SOLUCIONAR EL ESPACIO
console.log(nombre + " " + email);
console.log("Nombre: " + nombre + " Email: " + email);
console.log(nombre,email);

SINTAXIS ANTIGUA, PARA SOLUCIONAR ESTO VEREMOS LOS TEMPLATE STRING
*/

let nombreJM = "Jose Manuel";
let emailJM = "jose@jose.es";

console.log("ESTE ES EL NOMBRE:",nombreJM)
console.log("ESTE ES EL EMAIL:",emailJM)
console.log("NOMBRE Y EMAIL CONCATENADOS:", nombreJM + " " + emailJM)



/*



TEMPLATE STRING O STRING LITERALS
HACE REFERENCIA A MEZCLAR TEXTO CON VARIABLES O FUNCIONES

ES UN SUSTITUTO DE LA SINTAXIS ANTERIOR

*/


console.log(`Nombre Cliente: ${nombreJM} Email: ${emailJM}`); //COMILLAS INVERTIDAS, DERECHA DE LA P


/*LAS VARIABLES VAN ENTRE ${} PUEDE IR UNA FUNCIÓN TAMBIEN

ESTA SINTAXIS SE UTILIZA MUCHO HOY EN DÍA, ES LA QUE UTILIZAREMOS





****************BOOLEANOS

SOLO TRABAJAN DOS VALORES 
CREAR TRES VARIABLES
BOOLEAN1 VALOR VERDADERO
BOOLEAN2 VALOR FALSO
BOOLEAN3 "TRUE"

*/

let boolean1 = true;
let boolean2 = false;
let boolean3 = "true";

console.log("TIPO DATO BOOLEAN1:", typeof boolean1);
console.log("TIPO DATO BOOLEAN2:", typeof boolean2);
console.log("TIPO DATO BOOLEAN3:", typeof boolean3);

let boolean4 = new Boolean(true);
console.log("TIPO DATO BOOLEAN4:", typeof boolean4);

/*
MOSTRARLOS POR PANTALLA

USO REAL: AUTENTICACION DE UN USUARIO, DARLE ACCESO A CIERTAS PARTES DE LA WEB
SI AUTENTICACION ES TRUE, PERMITIR ACCESO, SI NO, DENEGAR

OTRA FORMA DE CREAR BOOLEANOS
const boolean4 = new Boolean(true); POCO UTILIZADA, UTILIZAREMOS LA PRIMERA


PONER EL 03.JS Y DAR INICIO A LOS OBJETOS
LA PARTE MÁS IMPORTANTE DE JAVASCRIPT

*/


