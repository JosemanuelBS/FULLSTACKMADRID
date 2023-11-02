

/*
*******************
    COMIENZO CLASE 2023/10/31
*******************

*******************
REPASO DÍA ANTERIOR

    COMO SELECCIONAR ELEMENTOS DEL HTML. 3 FORMAS

        QUERYSELECTOR
        QUERYSELECTORALL
        GETELEMENTBYID
        GETELEMENTBYCLASSNAME


    QUERYSELECTOR ******************************

    RETORNA UNO O NINGUN ELEMENTO
    MUY SIMILARES A LOS QUE TENEMOS EN CSS 
        CLASES CON .
        ID CON #

    DOCUMENT HACE REFERENCIA A TODO EL DOCUMENTO HTML
    const heading = document.querySelector("H1");//RETORNA 0 O 1 ELEMENTO
    console.log(heading); // NOS MUESTRA POR PANTALLA NUESTRA SELECCION


    QUERYSELECTORALL **************************

    const enlacesJS2 = document.querySelectorAll("A");
    console.log(enlacesJS2);
    //ME MUESTRA TODOS LOS ENLACES QUE CONCUERDAN CON LA SELECCIÓN
    //ME LO MUESTRA EN UN NODELIST, PARA ACCEDER A CADA ELEMENTO, LO HACEMOS
    //AL IGUAL QUE LOS ARRAYS


    GETELEMENTBYID ****************************

    YA SE USA MENOS, SE SUELEN UTILIZAR LOS ANTERIORES

    const heading2 = document.getElementById("boton");
    console.log(heading2);

    //TODO LO VISTO ANTERIORMENTE PARA AÑADIR/MODIFICAR/ELEIMINAR PROPIEDADES ES APLICABLE EN GETELEMENTBYID


    COMO CREAR ELEMENTOS EN HTML DESDE JAVASCRIPT

    **********************************************
    VEREMOS COMO GENERAR CODIGO EN HTML DESDE JAVASCRIPT
    UN ESTADO NUEVO DE FACEBOOK SE GENERA POR JAVASCRIPT

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




**************************************************

!!!!!!!!!!!!!!!!!!!
EJERCICIO

CREAR UNA PANTALLA EMERGENTE QUE PIDA INFORMACIÓN SOBRE TU NOMBRE.
AÑADIR ESTE NOMBRE AL TITULO H1 QUE TENÍAMOS CREADO AYER


*/

// let nombreAp = prompt("escribe tu nombre");

// let tituloh1 = document.querySelector("h1");

// tituloh1.textContent=nombreAp;



/*



EVENTOS EN JAVASCRIPT

ME PERMITEN TENER UNA WEB MÁS DINÁMICA

CUANDO ALGUIEN VISITA UNA WEB, SURGEN MUCHOS EVENTOS
SCROLL, BOTON ENVIAR FORMULARIO, CLICKS

HAY EVENTOS QUE LOS GENERA EL USUARIO Y HAY OTROS QUE SE GENERAN AUTOMATICAMENTE

//EVENTO LOAD
*/
console.log(1);

window.addEventListener("load",function(){ // AÑADIMOS EVENTOS CON ADDEVENTLISTENER
    //PRIMERO LE DECIMOS QUE TIPO DE EVENTO VAMOS A TENER, LOAD, CLICK, SCROLL...
    //DESPUES LLAMAMOS AL CALLBACK, TAMBIEN PUEDEN SER FUNCIONES A PARTE
    //LOAD ESPERA A QUE EL HTML, CSS, JS Y LOS ARCHIVOS QUE DEPENDEN DEL HTML ESTEN LISTOS
    console.log("se ha cargado html, css, js");

})

console.log(2)

//WINDOW ES TODO EL DOCUMENTO, MÁS GLOBAL AUN QUE EL HTML
//ES UN NIVEL MÁS ALTO

//EVENTO DOMCONTENTLOAD

document.addEventListener("DOMContentLoaded",function(){
    //DOMCONTENTLOADED ESPERA QUE SE CARGUE UNICAMENTE EL HTML, EL RESTO NO LE IMPORTA
    console.log("Se ha cargado el HTML");
})


console.log(4);




//EVENTO DE SCROLL
window.addEventListener("scroll",function(){
    console.log("Scrolling...")
})





//VAMOS A VER COMO APLICAR LOS EVENTOS A MIS ELEMENTOS DEL HTML
//HASTA AHORA LO HEMOS HECHO AL WINDOW Y DOCUMENT

//EVENTO DE CLICK

const botonNotificacion = document.querySelector("#botonPrincipal"); //HEMOS SELECCIONADO YA EL ELEMENTO

botonNotificacion.addEventListener("click",function(evento){ 
    console.log(evento);//ME MUESTRA INFORMACIÓN DEL EVENTO
    evento.preventDefault();// PARA EVITAR QUE EN LOS FORMULARIOS ME RECARGUE LA PÁGINA SOLA
    //SUELE USAR EN FORMULARIOS

    console.log("Mostrando Notificación...");
})











//EJERCICIO. CREAR UN FORMULARIO DE CONTACTO EN HTML CON
//NOMBRE
//CORREO
//MENSAJE
//BOTON ENVIAR

/*










    <form>

        <fieldset> 
            <!-- AGRUPAR TODOS LOS ELEMENTOS DEL FORMULARIO -->

            <legend> Contáctanos rellenando todos los campos </legend> 
            <!-- DESCRIBIR EL FORMULARIO -->

            <div> 
                <!-- PARA AGRUPAR LOS DIFERENTES INPUTS -->
                <div>
                    <label> Nombre </label>    
                    <!-- ETIQUETA -->
                    <input id="Nombre" type="Text" placeholder="Tu Nombre"> 
                    <!-- CAMPO DONDE SE ESCRIBEM PLACEHOLDER, LA INDICACIÓN -->
                </div>
                <div>
                    <label> Correo </label>
                    <input type="email" placeholder="Tu Email">
                </div>
                <div>
                    <label> Mensaje </label>
                    <textarea></textarea>
                </div>
            </div>
            <div>
                <input class="botonFormulario" type="submit" value="Enviar">
            </div>
        </fieldset>
    </form>


*/


//EVENTOS CON EL TECLADO
//EVENTOS EN LOS INPUTS Y TEXTAREA
let datos={
    Nombre:"",
    Email:"",
    Mensaje:""
}


const nombre = document.querySelector("#Nombre");

//EVENTO CHANGE

nombre.addEventListener("change", function(){ // ESTE EVENTO SE EJECUTA CUANDO SALIMOS
    console.log("Se ha completado el nombre");
})

//EVENTO INPUT

nombre.addEventListener("input", function(evento){ // ESTE EVENTO ES A TIEMPO REAL
    console.log("Escribiendo nombre con input...");
    console.log(evento)
    console.log(evento.target.value);
    console.log(evento.target.id);
     //ME MUESTRA POR PANTALLA EN EL DATA LA INFORMACIÓN
    // EN UN INPUT LA INFORMACIÓN SE ALMACENA EN EL VALUE
})

// EJERCICIO
// CREAR EL EVENTO DE INPUT EN CORREO Y MENSAJE
// DEBAJO DEL FORMULARIO, CREAR UN ELEMENTO TIPO P, QUE
// DIGA, ESTA ES LA WEB DE .... CON CORREO ... Y SU
// PROPUESTA ES: .....



const emailF = document.querySelector("#Email");
const mensajeF = document.querySelector("#Mensaje");
let resultadoNombre,
    resultadoEmail,
    resultadoMensaje;
emailF.addEventListener("input", function(evento){
    resultadoEmail = evento.target.value;
    actualizarTexto();
    leertexto(evento);
});

mensajeF.addEventListener("input", function(evento){
    resultadoMensaje = evento.target.value;
    actualizarTexto();
    leertexto(evento);
});

nombre.addEventListener("input", function(evento){
    resultadoNombre = evento.target.value;
    actualizarTexto();
    leertexto(evento);
});


function actualizarTexto(){
    document.querySelector(".parrafo").textContent = `Esta es la web de ${resultadoNombre} con email ${resultadoEmail} 
    y su propuesta es ${resultadoMensaje}` 
}





// EJERCICIO
// CREAR UN OBJETO DATOS, CON PROPIEDADES
// NOMBRE
// EMAIL
// MENSAJE

// E IR ALMACENANDO LOS RESULTADOS DEL FORMULARIO


function leertexto(evento){
    datos[evento.target.id] = evento.target.value; 
    //IMPORTANTE QUE SE LLAME EL ID COMO LA PROPIEDAD DEL OBJETO
    console.log(datos); 
}





//EVENTOS DE SUBMIT

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    console.log("Enviando Formulario...")
})

//SUBMIT PARA FORMULARIOS, ESTÁ ASOCIADO AL FORMULARIO EN GENERAL
//CLICK PARA OTROS BOTONES



/*

COMO ORGANIZAR EL CODIGO DE JAVASCRIPT

PRIMERO VARIABLES

DESPUES EVENTOS

POR ULTIMO FUNCIONES





!!!!!!!!!!!!!!!!!!!!!!!
EJERCICIO

CREAR UN ARCHIVO .JSON QUE ALMACENE LA INFO DE ZONAS TUCARRERADIGITAL

CREAR UN FETCH QUE ME LEA LA INFORMACIÓN Y ME LA MUESTRE POR PANTALLA
EN EL MISMO FORMATO QUE SE MUESTRA

*/