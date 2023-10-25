

/*
*******************
    COMIENZO CLASE 2023/10/25
*******************


/*
!!!!!!!!!!!!!

FOREACH Y MAP. MÉTODOS EXCLUSIVOS PARA RECORRER ARREGLOS

ES IGUAL QUE EL FOREACH, LA DIFERENCIA ES QUE
MAP SE USA PARA CREAR NUEVOS ARRAY Y EL FOREACH
PARA MOSTRAR POR PANTALLA

THIS HACE REFERENCIA A LOS MISMOS VALORES DEL OBJETO QUE SE ESTA LLAMANDO


FIN DEL REPASO
!!!!!!!!!!!!!!!!!

PROGRAMACIÓN ORIENTADA A OBJETOS, POO

JAVASCRIPTS HACE USO DE PROTOTYPES

*/

//OBJECT LITERAL, MANUAL
const producto = {
    nombre : "tablet",
    precio : 500
}




// OBJECT CONSTRUCTOR, DINÁMICO
// SINTAXIS MUY SIMILAR A UNA FUNCION
// CREAMOS UNA CLASE, QUE ES UN CONTENEDOR DE DATOS
// OBJETIVO, CREAR OBJETOS DE MANERA MÁS DINAMICA
// UNA CLASE ME VA SERVIR PARA ALMACENAR
// LOS DATOS QUE VA A TENER UN OBJETO EN ESPECIFICO

//!!!!!!!!!!!!!!!PRIMERA FORMA DE HACERLO

// LE PONEMOS EL NOMBRE DE LA CLASE SIEMPREINICIO EN MAYUS
function ProductoClase(nombre,precio,disponibilidad=false,categoria="play"){
    this.nombreObjeto = nombre; 
    this.precioObjeto = precio; // LE PUEDO DAR EL NOMBRE QUE QUIERA, SE LE SUELE DAR EL MISMO
    this.categoria = categoria;
    this.disponibilidad = disponibilidad;
}

//CREAMOS UNA INSTANCIA
const producto2 = new ProductoClase("Monitor curvo",800,true,"tech");
const producto3 = new ProductoClase("PC",1800);
const producto4 = new ProductoClase("Reloj",800);
console.log(producto2);
console.log(producto3);
console.log(producto4);



// EJEMPLO REAL, UN FORMULARIO DE REGISTRO DE FACEBOOK

/*
!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO CON OBJECT CONSTRUCTOR 
LLAMADO FECHA
CON PROPIEDADES, AÑO, MES, DÍA
DAR 4 VALORES DISTINTOS
*/










/*

PROTOTYPES
ME PERMITE CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO
ESPECIFICO

// NO SE UTILIZA MUCHO, VEREMOS LUEGO LA ALTERNATIVA CON LAS CLASES

*/
ProductoClase.prototype.formatearProducto = function() {
    console.log(`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto} €`);
};


//COMENTAR EL DE ARRIBA PARA VER ESTE

// const producto2 = new ProductoClase("Monitor curvo",800);
// const producto3 = new ProductoClase("PC",1800);
// const producto4 = new ProductoClase("Reloj",800);
// console.log(producto2.formatearProducto());
// console.log(producto3.formatearProducto());
// console.log(producto4.formatearProducto());



//!!!!!!!!!!!!!!!!!!! SEGUNDA FORMA DE HACERLO, LA MÁS USADA

//CLASES EN JAVASCRIPT
/*

OTRA FORMA DE CREAR OBJETOS MEDIANTE CONSTRUCTORES

*/
class ProductoClase2{
    constructor(nombre, precio) { //ES UNA FUNCIÓN YA EN SI
        this.nombreObjeto2=nombre;
        this.precioObjeto2=precio;
    }

    formatearProducto2(){
        console.log(`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`);
    }
}

//INSTANCIAS
const producto5 = new ProductoClase2("TV nueva",678);

console.log(producto5)
console.log(producto5.formatearProducto2())

/*
!!!!!!!!!!!!!!!!!!!
EJERCICIO
AÑADIR UN NUEVO METODO QUE ME CALCULE EL PRECIO CON UN 20% DESCUENTO
 */




/*

POO HERENCIA

        LA HERENCIA NOS PERMITE CREAR CLASES PARTIENDO DE CLASES YA CREADAS
        


!!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJECT CONSTRUCTOR Libro CON PROPIEDADES nombre, precio, isbn
HACIENDO USO DEL CONSTRUCTOR
Y GENERAR UNA INSTANCIA AL MENOS
*/




class Libro {
    constructor(nombre,precio,isbn){

        this.nombre=nombre;
        this.precio=precio;
        this.isbn=isbn;
    }
}

const libroObjeto = new Libro("Curso Fullstack",120,912229);
console.log(libroObjeto);

// const libroObjeto3 ={
//     nombre: "Curso Fullstack",
//     precio: 120,
//     isbn: 912229,
//     color: "azul",
//     tapa: "dura",
//     papel: true
// }

// const libroObjeto4 ={
//     nombre: "Curso Fullstack",
//     precio: 120,
//     isbn: 912229,
//     color: "azul",
//     tapa: "dura",
//     papel: true
// }
// PARA QUE USAMOS LA HERENCIA, PARA COPIAR PROPIEDADES DE UNA CLASE A OTRA

class Biblioteca extends Libro{
    constructor(nombre,precio,isbn,categoria){

        super(nombre,precio,isbn);
        this.categoria=categoria;

    }
    formatearProducto3(){
        console.log(`El producto ${this.nombre} pertenece a la categoria ${this.categoria}`)
    }
}
//  RESOLVER PROBLEMA DE HERENCIA
// CAMBIAR THIS POR SUPER EN EL MÉTODO


//INSTANCIA
const libroObjeto2 = new Biblioteca("Curso Fullstack",120,912229,"Programación");
console.log(libroObjeto2);
console.log(libroObjeto2.formatearProducto3())





/*
!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJECT CONSTRUCTOR COCHE
CON PROPIEDADES MARCA, AÑOCOMPRA, MOTOR, MATRICULA
UNA FUNCIÓN QUE ME DIGA EL NÚMERO DE AÑOS QUE TIENE EL COCHE

CREAR DOS INSTANCIA, UNA PARA TU COCHE, Y OTRA EL DE TU PADRE


*/

class Coche {
    constructor(marca,año,motor,matricula){
        this.marca=marca;
        this.año=año;
        this.motor=motor;
        this.matricula=matricula;
    }
    calculaEdad(){
        console.log(`La edad de tu coche ${this.marca} es de ${2023-this.año}`)
    }
}

const miCoche = new Coche("Renault Twingo",1900,"39cv","0022abc");
console.log(miCoche);
console.log(miCoche.calculaEdad());

const cochePapa = new Coche("mini morris",1200,null,"2322pd");
console.log(cochePapa);