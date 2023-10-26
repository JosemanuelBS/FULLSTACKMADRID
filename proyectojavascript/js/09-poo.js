

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

function Fecha(año, mes, dia){

    this.año = año;
    this.mes = mes;
    this.dia = dia

}

let fecha1 = new Fecha(2023,"Octubre",25);
let fecha2 = new Fecha(2023,"Octubre",26);
let fecha3 = new Fecha(2023,"Octubre",27);
let fecha4 = new Fecha(2023,"Octubre",28);

console.log(fecha1);
console.log(fecha2);
console.log(fecha3);
console.log(fecha4);



/*

PROTOTYPES
ME PERMITE CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO
ESPECIFICO

// NO SE UTILIZA MUCHO, VEREMOS LUEGO LA ALTERNATIVA CON LAS CLASES

*/
ProductoClase.prototype.formatearProducto = function() {
    return(`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto} €`);
};

const producto50 = new ProductoClase("Monitor curvo",800,true,"tech");
const producto60 = new ProductoClase("PC",1800);
const producto70 = new ProductoClase("Reloj",800);
console.log(producto50.formatearProducto());
console.log(producto60.formatearProducto());
console.log(producto70.formatearProducto());


// CREAR INSTANCIAS PARA PRODUCTO5, 6, 7



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
        return (`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`);
    }
    descuento(){
        return (`El precio final con el descuento es de ${this.precioObjeto2*(1-0.2)}`)
    }
}

//INSTANCIAS
const producto8 = new ProductoClase2("TV nueva",678);
console.log("Producto 8 con class")
console.log(producto8);
console.log(producto8.formatearProducto2());
console.log(producto8.descuento())

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

// RESOLVER PROBLEMA DE HERENCIA
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
UNA FUNCIÓN/METODO QUE ME DIGA EL NÚMERO DE AÑOS QUE TIENE EL COCHE

CREAR DOS INSTANCIA, UNA PARA TU COCHE, Y OTRA EL DE TU PADRE


*/

class Coche{
    constructor(marca,añoCompra,motor,matricula){
        this.marca=marca;
        this.añoCompra=añoCompra;
        this.motor=motor;
        this.matricula=matricula;
    }

    edadCoche(){
        return(`El coche tiene una edad de ${2023- this.añoCompra}`)
    }
}

let miCoche = new Coche("Seat",2001,"65cv","1234as")
console.log(miCoche.edadCoche())



/*
!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR OTRO CONSTRUCTOR DE OBJETOS LLAMADO ITV QUE HEREDE DE LA CLASE COCHE
AÑOCOMPRA, MATRICULA Y AÑADA AÑOITV

Y ME DE UN METODO CON EL TIEMPO QUE ME FALTA PARA LA PROXIMA ITV

*/


class Itv extends Coche{
    constructor (añoCompra,matricula,añoItv){

        super(undefined,añoCompra,undefined,matricula)
        this.añoItv=añoItv
    }

    proximaItv(){
        return (`La proxima ITV es dentro de ${this.añoItv-2023} años`)
    }
}

miCoche = new Itv(2003,"1234ab",2025);
console.log(miCoche.proximaItv())



// PASAMOS AL 10-PROMISES.JS


