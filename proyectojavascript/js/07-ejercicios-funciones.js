
/*
*******************
    COMIENZO CLASE 2023/10/23
*******************


/*
!!!!!!!!!!!!!
REPASO ULTIMO DÍA


for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)


función que invierta una cadena.
F: INVERTIR
P: CADENA*/

let cadenaF = "";
function invertir(cadena) {
    for (i = cadena.length - 1; i >= 0; i--) {
        //cadenaF+=cadena[i];
        cadenaF = cadenaF + cadena[i];
    }
    return cadenaF;
}
console.log(invertir("Hola"));

/*









función que concatene dos cadenas.
F: CONCATENAR
P: CADENA1, CADENA2


*/

function concatenar(cadena1, cadena2) {
    console.log(cadena1 + cadena2);
}

concatenar("hola ", "hi");



/*











función que determine si una cadena contiene una letra.
F: CONTIENE
P: CADENA, LETRA*/


function CONTIENE(CADENA, LETRA) {
    return CADENA.includes(LETRA)
}
let contieneLetra = CONTIENE("ejemplo de cadena", "i")
console.log(contieneLetra)












/*función que encuentre el número más grande en un array.
F: MAXNUM
P: ARRAY
*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 99, 10];

function MAXNUM(array) {

    console.log(Math.max(...array));

}

MAXNUM(num)
/*

función que encuentre el número más pequeño en un array.
F: MINNUM
P: ARRAY
*/


function MINNUM(array) {

    console.log(Math.min(...array));

}

MINNUM(num)
/*


función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
F: NUMBOOLEANOS
P: ARRAY, VALOR
















función que determine si todos los elementos de un array son números.
F: ARRAYNUMEROS
P: ARRAY
*/

let arraySoloNumeros=[1,30,5,40,20]

function arrayNumeros(array){
    let comprobacion = [];

    for(let i=0;i<array.length;i++){
        if(typeof array[i]==="number"){
            comprobacion.push(array[i])
        }
    
    }

    if(arraySoloNumeros.length==comprobacion.length){
        console.log("Todos los elementos son números")
    }else{
        console.log("No todos los elementos son números")
    }
}

arrayNumeros(arraySoloNumeros)


/*















función que genere un número aleatorio entre N1 y N2.
F: NUMALEATORIO
P: N1,N2

*/
function numaleatorio(n1, n2) {
    return Math.floor(Math.random() * (n2 - n1) + n1);

}
let numeroAleatorio = numaleatorio(100, 103);
console.log(numeroAleatorio);

/*














función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
F: AREATRIAGULO
P: BASE,ALTURA
 */

function areatriangulo(base, altura) {
    return (base * altura) / 2;
}

let base = 6;
let altura = 4;
let area = areatriangulo(base, altura);
console.log(area)



/*







función que convierta grados Celsius a Fahrenheit.
F: GRADOS
P: CELSIUS*/

function grados(celsius) {
    let formula = (celsius * 9 / 5) + 32;
    return formula;
}
let celsius = 20
let resultadoCelsius = grados(celsius);
console.log(`el resultado es ${resultadoCelsius}`)








/*
función que determine si un año es bisiesto.
F: BISIESTO
P: DIAS*/

function bisiesto(dias) {
    if (366 === dias) {
        console.log("Año es bisiesto")
    } else {
        console.log("Año no es bisiesto")
    }
}

bisiesto(366)














/*función que cuente la cantidad de vocales en una cadena.
F: VOCALES
P: TEXTO

*/

let contadorVocales = 0;
function vocales(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            contadorVocales++;
        }
        if (texto[i] === "e") {
            contadorVocales++;
        }
        if (texto[i] === "i") {
            contadorVocales++;
        }
        if (texto[i] === "o") {
            contadorVocales++;
        }
        if (texto[i] === "u") {
            contadorVocales++;
        }
    }
    console.log(contadorVocales);
}
vocales("Martaeiou")



/*














función que cuente la cantidad de palabras en una cadena.
F: PALABRAS
P: TEXTO
*/
function palabras(texto) {
    let contador = 0;
    for (let i = 0; i <= texto.length; i++) {
        if (texto[i] === " ") {
            contador++;
        }
    }
    console.log(contador + 1)
}

palabras("buenos dias")













/*función que elimine los elementos duplicados de un array.
F: ELIMINADUPLICADOS
P: ARRAY















función que ordene un array de números de forma ascendente.
F: ORDENARARRAY
P: ARRAY

*/

let arraySin = [1,3,5,10,8];

function ordenar (array){
    let arrayOrd = array.sort(function(a,b){return a-b});
    return arrayOrd
};

console.log(ordenar(arraySin))














/*
función que muestre la tabla de multiplicar de un numero.
F: TABLAMULTIPLICAR
A: NUMERO



















función que tome un número del 1 al 12 y devuelva el nombre del mes 
correspondiente utilizando una declaración switch
F: NOMBREMES
P: NUMMES


*/
function NOMBREMES(NUMMES) {

    switch (NUMMES) {


        case 1: console.log("ENERO")
            break;
        case 2: console.log("FEBRERO")
            break;
        case 3: console.log("MARZO")
            break;
        case 4: console.log("ABRIL")
            break;
        case 5: console.log("MAYO")
            break;
        case 6: console.log("JUNIO")
            break;
        case 7: console.log("JULIO")
            break;
        case 8: console.log("AGOSTO")
            break;
        case 9: console.log("SEPTIEMBRE")
            break;
        case 10: console.log("OCTUBRE")
            break;
        case 11: console.log("NOVIEMBRE")
            break;
        case 12: console.log("DICIEMBRE")
            break;
        default:
            console.log("numero no valido")
            break;
    }

}
NOMBREMES(8);


/*



función que determine si una contraseña es segura basándose en 
longitud>7, 
mayúsculas y minusculas
números
F: CONTRASEÑASEGURA
P: CONTRASEÑA
*/
function contraseñaSegura(contraseña){
    if (contraseña.length>7 && 
        /[A-Z]/.test(contraseña)&&
        /[a-z]/.test(contraseña)&&
        /\d/.test(contraseña)){
        console.log("La contraseña es segura");
        } else {
            console.log("La contraseña no es segura");
        }
    
}

contraseñaSegura("Holaestoesunacontra34");

/*










función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
F: REEMPLAZAR
P: TEXTO, LETRA1, LETRA2




!!!!!!!!!!!!!!!!
PASAMOS AL 08-foreach-map-this.js

*/