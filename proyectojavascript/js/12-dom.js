/*


CREAMOS EL ARCHIVO 12-dom.js Y COMENTAMOS EL 11

AHORA VEREMOS COMO ACTUAR JAVASCRIPT EN EL DOM, COMO SELECCIONAR ELEMENTOS DEL HTML, 
COMO CREAR EVENTOS, MODIFICAR HTML ETC

LA INTERACCIÓN

COMO SELECCIONAR CODIGO HTML, 3 FORMAS

    QUERYSELECTOR
    QUERYSELECTORALL
    GETELEMENTBYID

    TODOS INICIAN CON DOCUMENT



QUERYSELECTOR ******************************

    RETORNA UNO O NINGUN ELEMENTO
    MUY SIMILARES A LOS QUE TENEMOS EN CSS 
        CLASES CON .
        ID CON #

    DOCUMENT HACE REFERENCIA A TODO EL DOCUMENTO HTML

    */

    /*
    !!!!!!!!!!!!!!!!!!!
    EJERICIO

    CREAR UNA SECCIÓN, CON UN H1, UNA IMAGEN DE FONDO, UN BOTÓN Y 
    UN DIV CON TRES ENLACES CON CLASE enlace Y EL DIV CON LA CLASE navPrincipal
    DARLE A LA SECCIÓN LA CLASE seccionPrincipal
    DARLE AL BOTÓN UN ID botonPrincipal



    */
    const heading = document.querySelector(".seccionPrincipal h1");//RETORNA 0 O 1 ELEMENTO
    console.log(heading); // NOS MUESTRA POR PANTALLA NUESTRA SELECCION

    /*
    !!!!!!!!!!!!
    EJERCICIO
    SELECCIONAR EL ID DEL BOTON QUE HEMOS CREADO



    SI ABRIMOS CON MOZILLA ME MUESTRA MUCHA MÁS INFORMACIÓN DE LA SELECCION
    TODAS LAS PROPIEDADES QUE SE MUESTRAN SE PUEDEN AÑADIR/MODIFICAR/ELIMINAR

    PARA MODIFICAR EL CONTENIDO HACEMOS USO DE LA PROPIEDAD .textContent
    */
    heading.textContent="Nuevo Titulo 1234";


    /*
    PARA AÑADIR Y ELIMINAR CLASES HACEMOS USO DE .classlist
    */

    //CUANDO HACEMOS USO DE CLASSLIST NO TENEMOS QUE PONER EL . EN LA CLASE,
    //PUES YA LE ESTAMOS DICIENDO QUE ES UNA CLASE
    heading.classList.add("NuevaClaseDesdJS"); //AÑADIR

    heading.classList.remove("NuevaClaseDesdJS"); //ELIMINAR

    heading.classList.add("fondoRojo")

    // SI INTENTAMOS SELECCIONAR LOS ENLACES

    const enlacesJS = document.querySelector("div a");
    console.log(enlacesJS);//SOLO ME MUESTRA EL PRIMERO
    // ES UNA PROPIEDAD DE QUERYSELECTOR, O ME MUESTRA UN ELEMENTO O NINGUNO
    // PARA SOLUCIONAR ESO SURGE EL QUERYSELECTORALL

/*




QUERYSELECTORALL **************************
*/

const enlacesJS2 = document.querySelectorAll("div a");
console.log(enlacesJS2);
//ME MUESTRA TODOS LOS ENLACES QUE CONCUERDAN CON LA SELECCIÓN
//ME LO MUESTRA EN UN NODELIST, PARA ACCEDER A CADA ELEMENTO, LO HACEMOS
//AL IGUAL QUE LOS ARRAYS
console.log(enlacesJS2[0]);

//OTRA PROPIEDAD QUE PODEMOS MODIFICAR ES .href
enlacesJS2[0].href="https://google.com"

/*
!!!!!!!!!!!!!!
EJERCICIO
MODIFICAR EL CONTENIDO Y EL HREF DEL SEGUNDO ENLACE UNICAMENTE CON QUERYSELECTORALL
PONER CONTENIDO MODIFICADO CON QUERYSELECTORALL. Y LLEVAR A OTRO ENLACE EXTERNO


*/
enlacesJS2[1].textContent = "Enlace2 Modificado";
enlacesJS2[1].href="https://google.com"

/*




GETELEMENTBYID ****************************

YA SE USA MENOS, SE SUELEN UTILIZAR LOS ANTERIORES

*/
const botonJS = document.getElementById("botonPrincipal");
console.log(botonJS);

//TODO LO VISTO ANTERIORMENTE PARA AÑADIR/MODIFICAR/ELIMINAR PROPIEDADES ES APLICABLE EN GETELEMENTBYID

//GETELEMENTBYCLASSNAME ****************************

const botonJsClass =document.getElementsByClassName("botonClase")



/*




**********************************************
VEREMOS COMO GENERAR CODIGO EN HTML DESDE JAVASCRIPT
UN ESTADO NUEVO DE FACEBOOK SE GENERA POR JAVASCRIPT

*/

const nuevoEnlace = document.createElement("A");

//NOS PERMITE CREAR CODIGO HTML
//JAVASCRIPT RECOMIENDA USAR MAYUSCULAS CUANDO USAMOS CREATE
// DIV, A , P, IMG

//AGREGAR HREF

nuevoEnlace.href = "#";

//AGREGAR TEXTO

nuevoEnlace.textContent = "Nuevo Enlace4";

//AGREGAR CLASE

nuevoEnlace.classList.add("enlace");//LE AÑADO LA CLASE DE INFORMATE

console.log(nuevoEnlace)

//AGREGAMOS AL DOCUMENTO

const enlacesJS3 =document.querySelector(".navPrincipal");//PARA ELLO SELECCIONAMOS EL ELEMENTO PADRE
enlacesJS3.appendChild(nuevoEnlace)//APPENCHILD ME PERMITE AGREGAR ELEMENTOS HIJOS





/*
!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN ENLACE QUE SE LLAME, ejercicioEnlace Y CON EL MISMO ESTILO.
HACERLO TODO CON JS
*/

















const ejercicioEnlace = document.createElement("A");//NOS PERMITE CREAR CODIGO HTML
//JAVASCRIPT RECOMIENDA USAR MAYUSCULAS CUANDO USAMOS CREATE
//AGREGAR HREF
ejercicioEnlace.href = "#";
//AGREGAR TEXTO
ejercicioEnlace.textContent = "Ejercicio Enlace";
//AGREGAR CLASE
ejercicioEnlace.classList.add("enlaces");//LE AÑADO LA CLASE
//AGREGAMOS AL DOCUMENTO
//LO QUEREMOS AGREGAR A LA DERECHA DEL BOTON INFORMATE

const selectorEjercicioEnlace =document.querySelector(".navPrincipal");//PARA ELLO SELECCIONAMOS EL ELEMENTO PADRE
selectorEjercicioEnlace.appendChild(ejercicioEnlace)//APPENCHILD ME PERMITE AGREGAR ELEMENTOS HIJOS



