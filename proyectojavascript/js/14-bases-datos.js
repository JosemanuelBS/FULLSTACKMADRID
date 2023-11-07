


/*
**************************************************
COMIENZO DE CLASE 2023/11/02
******************

*******************
REPASO DÍA ANTERIOR

    EVENTOS EN JAVASCRIPT

    ME PERMITEN TENER UNA WEB MÁS DINÁMICA

    HAY EVENTOS QUE LOS GENERA EL USUARIO Y HAY OTROS QUE SE GENERAN AUTOMATICAMENTE

        LOAD
        DOMCONTENTLOADED
        SCROLL
        CLICK
        CHANGE
        INPUT
        SUBMIT


INTRODUCCION A BASE DE DATOS

DIAPOSITIVA 21

    ALMACENAR Y ORDENAR UNA GRAN CANTIDAD DE DATOS, ACTUALIZAR INFORMACIÓN
    SQL EL LENGUAJE
    MYSQL ES GESTOR DE BASES DE DATOS

DIAPOSITIVA 22 

    TIPOS DE BASES DE DATOS

    BASE DE DATOS RELACIONALES
    EN CADA FILA HAY UNA INSTANCIA
    COLUMNA EL TIPO DE DATOS

    TIPO DE RELACIONES DE BASE DE DATOS

    1 A MUCHOS
    MUCHOS A MUCHOS
    1 A 1

    PK PRIMARY KEY
    FK FOREIGN KEY


    PREVIAMENTE VAMOS A INSTALAR NODEJS
    nodejs.org
    PERMITE INSTALAR DEPENDENCIAS, LA RECOMENDADA
    HABILITAR LA OPCION HERRAMIENTAS AUTOMATICAS



    EL STACK AMP, APACHE, MYSQL Y PHP

        EN WINDOW LARAVEL
        EN MAC XAMPP

    VAMOS A INSTALAR UNO A UN EN WINDOWS
        
        
        APACHE (SERVIDOR)
        apachelounge.com/download

        C++
        SALE EL ENLACE ENCIMA

        PRIMERO C++. ACEPTO CONDICIONES E INSTALO

        LA CARPETA APACHE24 LA TRASLADO A DISCO LOCAL C Y RENOMBRAMOS COMO APACHE

            DENTRO ENTRO EN CONF Y HTTPD.CONF
            ABRIMOS EN STUDIO CODE
            LINEA 37 CAMBIAMOS APACHE
            BUSCAMOS SERVERNAME
            LINEA 227 DESCOMENTAMOS
            Y CAMBIAMOS A LOCALHOST

        LAZAMOS EL SERVICIO APACHE DESDE COMANDOS
            CD..
            CD..
            CD apache
            CD bin
            .\httpd.exe

        ABRIMOS PESTAÑA NUEVA EN NAVEGADOR Y PONEMOS LOCALHOST
            ABRO HTDOCS Y EL INDEX, Y CAMBIO POR HOLA MUNDO

            HAY QUE RECARGAR

        DETENER SERVIDOR CON CTRL+C MUCHAS VECES

        VAMOS A CREAR UN SERVICIO DE APACHE PARA QUE SE LANCE AUTOMATICAMENTE

            ABRIMOS LA TERMINAL DE COMANDO COMO ADMINISTRADOR
            NAVEGAMOS DE NUEVO HASTA .\httpd.exe -k install

        BUSCAMOS PANEL DE CONTROL
            SERVICIOS
            VER SERVICIOS LOCALES
            APACHE24
            INICIAR


        DESCARGAMOS E INSTALAMOS PHP (LENGUAJE)
            php.net/downloads
            DESCARGAR LA THREAD SAFE EL ZIP DE 64BITS
            DESCARGAR LA RUTA EN DISCO LOCAL C COMO PHP
            AÑADIR php

            LE DECIMOS A APACHE DONDE VA A ENCONTRAR EL MODULO DE PHP
            ABRO APACHE/CONF/HTTPD.CONF
            LINEA FINAL 536

            AÑADO
            LoadModule php_module "C:/php/php8apache2_4.dll"
            AddHandler application/x-httpd-php .php
            PHPIniDir "C:/php"

            REINICIAR SERVICIO APACHE24

            ABRIMOS APACHE/HTDOCS
            CREAMOS UNA CARPETA NUEVA proyecto Y ABRIMOS EN STUDIO CODE
            CREAMOS index.php 

            <?php
            echo "Hola Mundo";

            ABRIMOS EL NAVEGADOR Y PONEMOS LA RUTA localhost/proyecto

            ENTRAMOS EN LA CARPETA PHP
            BUSCAMOS 2 ARCHIVOS PHP.INI-...
            DUPLICAMOS EL DE PRODUCTION
            RENOMBRAMOS COMO php.ini
            REINICIO EL SERVICIO DE APACHE

            ABRO php.ini CON VISUAL STUDIO
            BUSCO POST_MAX
            CAMBIO A 20M
            BUSCO UPLOAD_MAX
            CAMBIO A 20M
            BUSCO ;EXTENSION
            DESCOMENTAMOS
                FILEINFO
                GD
                MYSQLI
            
            REINICIO APACHE

            AÑADIR VARIABLES DE ENTORNO

                BUSCAMOS VARIABLES EN EL BUSCADOR
                EDITAR VARIABLES DE ENTORNO
                VARIABLES DE ENTORNO
                SISTEMA
                PATH Y EDITAMOS
                NUEVO
                C:\php
                ACEPTAR ACEPTAR

                php -v PARA VER VERSION DE PHP EN TERMINAL








/*
**************************************************
COMIENZO DE CLASE 2023/11/03
**************************************************



*******************
REPASO DÍA ANTERIOR

    INTRODUCCION A BASE DE DATOS
        ALMACENAR Y ORDENAR UNA GRAN CANTIDAD DE DATOS, ACTUALIZAR INFORMACIÓN
        SQL EL LENGUAJE
        MYSQL ES GESTOR DE BASES DE DATOS

    TIPOS DE BASES DE DATOS
        BASE DE DATOS RELACIONALES
        EN CADA FILA HAY UNA INSTANCIA
        COLUMNA EL TIPO DE DATOS

    TIPO DE RELACIONES DE BASE DE DATOS
        1 A MUCHOS
        MUCHOS A MUCHOS
        1 A 1

    STACK AMP, APACHE, MYSQL, PHP
        APACHE SERVIDOR
        MYSQL GESTOR DE BASE DATOS
        PHP LENGUAJE PROGRAMACIÓN


FIN DEL REPASO
*******************

            
            INSTALAR Y CONFIGURAR MYSQL
                dev.mysql.com/downloads/mysql

                DESCARGAMOS LA MÁS GRANDE
                TO PALANTE
                NO IMPORTA LOS ERRORES
                DEFINIR UN PASSWORD
                Fullstack

                PODEMOS VER EL SERVICIO DE MYSQL Y SI NOS CONSUME MUCHA MEMORIA
                DETENERLO CUANDO NO LO USEMOS
                
                TENEMOS QUE CREAR UNA VARIABLE DE ENTORNO
                DEL SISTEMA CON EL VALOR DE RUTA DE
                C:\Program Files\MySQL\MySQL Server 8.2\bin

            PARA QUE ME PERMITA USAR LOS COMANDOS DE MYSQL DESDE POWERSHELL

            VAMOS A INSTALAR UN VISOR ALTERNATIVO DE BASES DE DATOS A MYSQL WORKBENCH
            
            TABLE PLUS
                tableplus.com

                create new conection

                Name: MySQL Localhost
                Host: localhost
                User: root
                Port: 3306
                Password: Fullstack

                YA TENEMOS LA CONEXIÓN A MI BASE DE DATOS

        

            
            



EN MAC
    brew.eh ME PERMITIRÁ INSTALAR PHP Y MYSQL
    COPIAR CODIGO Y PONER EN LA TERMINAL
    PONER LOS DOS COMANDOS QUE NOS INDICAN

    DESDE TERMINAL INSTALAMOS PHP
    brew search php
    brew install php

    DESDE TERMINAL INSTALAMOS COMPOSER
    brew install composer

    INSTALAR MYSQL
    brew install mysql
    HAY QUE ACTIVAR EL SERVICIO
    brew services start mysql

    mysql -u root -p





SINTAXIS BÁSICA DE CONSULTA DE BASE DE DATOS

ABRIMOS POWERSHELL, QUE SERÁ LA TERMINAL QUE USAREMOS
PARA LA CONSULTA DE LA BASE DE DATOS

EL PRIMER COMANDO QUE ME PERMITE INICIAR SESION MYSQL
ES OBLIGATORIO EL ; AL FINAL ES EL QUE FINALIZA LA 
ORDEN

    mysql -u root -p;

    PASSWORD: Fullstack En mac nada

PARA VER LAS BASES DE DATOS

    SHOW DATABASES;

LO HABITUAL ES ESCRIBIR EL CODIGO EN MAYUSCULAS

EL ; FINAL ES NECESARIO, HASTA QUE NO LO PONGAMOS NO 
SABRÁ CUAL ES EL FINAL DE LA SENTENCIA


CREAR UNA NUEVA BASE DE DATOS

    CREATE DATABASE peluqueria;
    SHOW DATABASES;

USAR UNA BASE DE DATOS

    USE peluqueria;

PARA MOSTRAR LAS TABLAS

    SHOW TABLES;

PONER DIAPOSITIVA24

CREAR UNA NUEVA TABLA

    CREATE TABLE servicios(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60), //HASTA 60 CARACTERES, 
    //SI SE PASA LO CORTA Y COGE LOS 6O PRIMEROS
    precio DECIMAL(5,2), //100.00
    PRIMARY KEY (id)
    );

    DEBEN TENER UN IDENTIFICADOR UNICO, ID
    DEBEMOS INDICARLE EL TIPO DE DATO
    EL TIPO DE DATO QUE VAYA A USAR LO CONSULTO

    SHOW TABLES;

    DESCRIBE servicios; ME DA INFORMACIÓN DE LA TABLA

YA SABEMOS CREAR BASE DE DATOS Y TABLAS, VAMOS A VER
LAS OPERACIONES QUE PODEMOS HACER CON LOS DATOS DE LAS TABLAS

DIAPOSITIVA25

CRUD
        CREATE
        READ
        UPDATE
        DELETE

************ CREATE

INSERTAR REGISTROS
        INSERT INTO servicios (nombre,precio) 
        //EL id SE AUTOINCREMENTA, NO HAY QUE PASARLO
        VALUES ("Corte de Cabello de Adulto",15);

        INSERT INTO servicios (nombre,precio)
        VALUES ("Corte de Cabello Niño",12),
        ("Corte de Barba",8)

        //PARA AGREGAR MÁS DE UN REGISTRO A LA VEZ 

        !!!!!!!!!!!!
        EJERCICIO
        INSERTAR 5 REGISTROS MÁS DE PELUQUERIA EN LA TABLA SERVICIOS
        

************ READ

SELECCIONAMOS REGISTROS
        SELECT * FROM servicios;
        * PARA SELECCIONAR TODAS LAS COLUMNAS

        SI SOLO QUIERO SELECCIONAR UNA COLUMNA
        SELECT nombre FROM servicios;

        SELECT nombre,precio FROM servicios;

        COMO ORDENADOR UNA CONSULTA
        SELECT id,nombre,precio FROM servicios ORDER BY precio ASC; //ASC/DESC

        PODEMOS LIMITAR LA SELECCION
        SELECT * FROM servicios LIMIT 3;

        SELECCION QUE CUMPLA UNA CONDICION
        SELECT * FROM servicios WHERE id=2; //SE PUEDEN DAR OTRAS CONDICIONES

        = IGUAL QUE
        < MENOR QUE
        > MAYOR QUE
        <= MENOR IGUAL QUE
        >= MAYOR IGUAL QUE
        != DISTINTO QUE


!!!!!!!!!!!!!!!
EJERCICIO
MOSTRAR LOS REGISTROS CUYO PRECIO SEA MAYOR QUE 15




************ UPDATE

ACTUALIZAR REGISTROS
VAMOS A VARIAR EL PRECIO DEL Corte de Cabelle Hombre a 20€

        UPDATE servicios SET precio=20 WHERE id=1; // ACTUALIZO LOS CAMPOS QUE QUIERA
        HAY QUE INDICAR SIEMPRE CON EL WHERE QUE REGISTRO ACTUALIZAMOS

        MOSTRAR LA TABLA PARA VER LA ACTUALIZACION




************ DELETE

        ELIMINAR REGISTROS
        DELETE FROM servicios WHERE id=1;
        IMPORTANTE DECIRLE CON EL WHERE QUE REGISTRO VAMOS A BORRAR

        !!!!!!!!!!
        EJERCICIO
        BORRAR EL ULTIMO REGISTRO QUE HABEIS AÑADIDO


        MOSTRAR TABLA
        SELECT * FROM servicios;

        SI AÑADO UN SERVICIO, CONTINUA POR EL ULTIMO, NO ME RELLENA
        LOS REGISTROS VACIOS

        !!!!!!!!!!!
        EJERCICIO
        AÑADIR UN NUEVO REGISTRO
        VER POR PANTALLA QUE ID RECIBE.

        !!!!!!!!!!
        EJERCICIO
        AÑADIR EL ID=1 DE NUEVO
















        








*******************
    COMIENZO CLASE 2023/11/06
*******************

*******************
REPASO DÍA ANTERIOR

    VIMOS COMO CREAR BASES DATOS, TABLAS Y REGISTROS

    INICAR MYSQL
        mysql -u root -p

    MOSTRAR BASES DE DATOS
        SHOW DATABASES

    CREAR UNA BASE DE DATOS
        CREATE DATABASE peluqueria
    
    USAR UNA BASE DE DATOS
        USE peluqueria

    MOSTRAR UNA TABLA
        SHOW TABLES

    CREAR UNA TABLA
        CREATE TABLE servicios(
        id INT(11) NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(60), //HASTA 60 CARACTERES, SI SE PASA LO CORTA Y COGE LOS 6O PRIMEROS
        precio DECIMAL(5,2), //100.00
        PRIMARY KEY (id)
        );

    DEBEN TENER UN IDENTIFICADOR UNICO, ID
    DEBEMOS INDICARLE EL TIPO DE DATO
    EL TIPO DE DATO QUE VAYA A USAR LO CONSULTO

    INFORMACIÓN ESTRUCTURA DE LA TABLA
    DESCRIBE servicios;

    REGISTROS EN TABLAS
        CREATE
            INSERT INTO servicios(nombre,precio) VALUES ("Tinte",5);
        READ
            SELECT nombre FROM servicios WHERE id=3
        UPDATE
            UPDATE servicios SET precio=20 WHERE id=1;
        DELETE
            DELETE FROM servicios WHERE id=1;

FIN DEL REPASO
******************

VAMOS A  VER COMO MODIFICAR LAS TABLAS BASE DE DATOS
    
    DESCRIBE servicios;

    AGREGAR COLUMNA
            ALTER TABLE servicios ADD descripción VARCHAR(100) NOT NULL;

            SELECT * FROM servicios;
            LOS REGISTROS QUE TENEMOS NO TIENEN DESCRIPCIÓN

    MODIFICAR COLUMNA
            ALTER TABLE servicios CHANGE descripcion nuevonombre VARCHAR(50) NOT NULL; 
            PODEMOS CAMBIAR EL NOMBRE Y LA EXTENSION SOLAMENTE
            
            EL TIPO DE DATO NO LO PUEDO CAMBIAR
            SI ERA UN TIPO VARCHAR, NO LO PUEDO CAMBIAR A UN TIPO INT

            DESCRIBE servicios;



    !!!!!!!!!!
    EJERCICIO
    AGREGAR UNA COLUMNA A LA TABLA SERVICIOS QUE SE LLAME BORRAR Y QUE SEA TIPO VARCHAR(10) NOT NULL

    BORRAR COLUMNA
            ALTER TABLE servicios DROP COLUMN borrar;


ELIMINAR TABLAS COMPLETAS DE MI BASE DE DATOS

!!!!!!!!!!!!!!!
EJERCICIO
CREAR UNA TABLA LLAMADA color. CON ID, COLOR



    MOSTRAMOS PRIMERO LAS TABLAS
    SHOW TABLES;
    
    BORRAR TABLAS
    DROP TABLE color;
    ME VA A EJECUTAR LA SENTENCIA, NO ME VA A PREGUNTAR SI ESTOY SEGURO NI NADA
    ES UN COMANDO MUY CRITICO


!!!!!!!!!!!!!!
EJERCICIO
CRERA TABLA clientes
CLUMNAS (id, nombre, apellidos, tlf)



!!!!!!!!!!!!!!!
EJERCICIO
CREAMOS UNA NUEVA TABLA reservas
COLUMNAS (id, idcliente, hora, fecha, idservicio)

CREAR AL MENOS 50 INSTANCIAS PARA CADA TABLA DE MI BASE DE DATOS, AYUDARSE DE CHATGPT










CREATE TABLE reservas (
    id INT(11) NOT NULL AUTO_INCREMENT,
    idclientes INT(11) NOT NULL,
    idservicios INT(11) NOT NULL,
    hora TIME DEFAULT NULL, // SI NO SE PASA NINGUN VALOR TOMA LA HORA DEL REGISTRO
    fecha DATE DEFAULT NULL, // IGUAL QUE LA HORA
    PRIMARY KEY(id),
    FOREIGN KEY (idservicios) REFERENCES servicios(id),
    FOREIGN KEY (idclientes) REFERENCES clientes(id)
);


CREATE TABLE reservas (
    id INT(11) NOT NULL AUTO_INCREMENT,
    idclientes INT(11) NOT NULL,
    idservicios INT(11) NOT NULL,
    hora TIME DEFAULT NULL,
    fecha DATE DEFAULT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (idservicios) REFERENCES servicios(id),
    FOREIGN KEY (idclientes) REFERENCES clientes(id)
);




/////////////////////////////////
BASE DE DATOS DE UN COLEGIO

TABLAS:
    ALUMNOS
    PROFESORES
    CURSOS
    ASIGNATURAS
    HORARIOS














-- INICIO CODIGO SQL:

-- PARA PONER COMENTARIOS

-- CREAMOS NUESTRA BASE DE DATOS
CREATE DATABASE colegio;

-- USAMOS LA BASE DE DATOS DE colegio
USE colegio;

-- CREAMOS LAS TABLAS

-- TABLA profesores
CREATE TABLE profesores( id INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(60), apellidos VARCHAR (60), titulacion VARCHAR(100) NOT NULL, telefono VARCHAR(15), PRIMARY KEY (id));

-- TABLA cursos
CREATE TABLE cursos( id INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(60), idtutor INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (idtutor) REFERENCES profesores(id));

-- TABLA alumnos
CREATE TABLE alumnos( id INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(60), apellidos VARCHAR (60), fechanacimiento DATE NOT NULL, telefono VARCHAR(15), idcurso INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (idcurso) REFERENCES cursos(id));

-- TABLA asignaturas
CREATE TABLE asignaturas( id INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(60), idcurso INT NOT NULL, idprofesor INT NOT NULL, PRIMARY KEY(id), FOREIGN KEY (idcurso) REFERENCES cursos(id), FOREIGN KEY(idprofesor) REFERENCES profesores(id));

-- TABLA horarios
CREATE TABLE horarios( id INT NOT NULL AUTO_INCREMENT, hora TIME NOT NULL, diasemana VARCHAR(10), idasignatura INT NOT NULL, PRIMARY KEY(id), FOREIGN KEY (idasignatura) REFERENCES asignaturas(id));

-- AHORA AÑADIMOS REGISTROS A LAS TABLAS

-- Registros adicionales para la tabla "profesores"
INSERT INTO profesores (nombre, apellidos, titulacion, telefono) VALUES
    ('Laura', 'García', 'Licenciada en Informática', '111-222-3333'),
    ('Miguel', 'Hernández', 'Licenciado en Biología', '444-555-6666'),
    ('Carmen', 'Jiménez', 'Licenciada en Psicología', '777-888-9999'),
    ('Manuel', 'Ruiz', 'Licenciado en Geografía', '333-222-1111'),
    ('Isabel', 'Sánchez', 'Licenciada en Química', '666-555-4444'),
    ('José', 'López', 'Licenciado en Historia del Arte', '999-888-7777'),
    ('Sara', 'González', 'Licenciada en Lengua Española', '111-111-1111'),
    ('Antonio', 'Fernández', 'Licenciado en Economía', '222-222-2222');

-- Registros adicionales para la tabla "cursos"
INSERT INTO cursos (nombre, idtutor) VALUES
    ('1A', 6),
    ('1B', 7),
    ('1C', 8),
    ('2A', 2),
    ('2B', 1),
    ('2C', 8),
    ('3A', 3),
    ('3B', 3),
    ('3C', 5),
    ('4A', 4),
    ('4B', 1),
    ('4C', 5);

-- Registros adicionales para la tabla "alumnos"
INSERT INTO alumnos (nombre, apellidos, fechanacimiento, telefono, idcurso) VALUES
    ('Alejandro', 'Rodríguez', '2003-08-20', '555-333-2222', 6),
    ('Beatriz', 'Fernández', '2002-11-10', '444-555-6666', 7),
    ('Carlos', 'González', '2004-02-05', '777-888-9999', 8),
    ('Diana', 'López', '2003-04-15', '111-222-3333', 9),
    ('Elena', 'Martínez', '2002-07-28', '666-777-8888', 10),
    ('Francisco', 'Pérez', '2004-01-02', '222-333-4444', 6),
    ('Gloria', 'Sánchez', '2003-03-18', '555-666-7777', 7),
    ('Héctor', 'Torres', '2002-09-30', '333-444-5555', 8),
    ('Inés', 'Jiménez', '2003-12-10', '999-111-2222', 9),
    ('Javier', 'Vargas', '2002-06-25', '777-222-1111', 10),
    ('Karen', 'Hernández', '2004-03-12', '555-111-2222', 6),
    ('Luisa', 'Santos', '2002-07-05', '444-666-8888', 7),
    ('Manuel', 'Gómez', '2003-09-20', '333-999-1111', 8),
    ('Natalia', 'Ruiz', '2001-12-15', '777-555-3333', 9),
    ('Óscar', 'Fernández', '2004-04-28', '111-222-4444', 10),
    ('Patricia', 'García', '2003-01-10', '666-333-7777', 6),
    ('Quintín', 'Martínez', '2002-02-18', '555-777-9999', 7),
    ('Rosa', 'López', '2004-05-30', '777-222-4444', 8),
    ('Sergio', 'Vargas', '2002-08-10', '333-444-5555', 9),
    ('Teresa', 'Jiménez', '2003-11-28', '999-666-1111', 10), 
    ('Ulises', 'Morales', '2003-07-15', '444-555-6666', 6),
    ('Valentina', 'Hernández', '2002-09-20', '555-333-2222', 7),
    ('William', 'Pérez', '2004-01-05', '666-444-5555', 8),
    ('Ximena', 'Gómez', '2003-03-15', '777-999-1111', 9),
    ('Yolanda', 'Torres', '2002-06-28', '111-666-4444', 10),
    ('Zacarías', 'Fernández', '2004-04-10', '999-777-2222', 6),
    ('Alejandra', 'García', '2003-03-12', '555-444-1111', 7),
    ('Baltasar', 'Ruiz', '2002-08-05', '444-666-8888', 8),
    ('Candela', 'Santos', '2001-12-20', '333-111-5555', 9),
    ('Damián', 'Vargas', '2004-02-18', '222-333-4444', 10);

-- Registros adicionales para la tabla "asignaturas"
INSERT INTO asignaturas (nombre, idcurso, idprofesor) VALUES
    ('Lengua', 6, 3),
    ('Mates', 7, 6),
    ('Geo', 8, 4),
    ('Inglés', 9, 5),
    ('Cono', 10, 4),
    ('Ciudadanía', 6, 4),
    ('Eduación Física', 7, 8),
    ('Historia', 8, 4),
    ('Frances', 9, 1);

-- Registros adicionales para la tabla "horarios"
INSERT INTO horarios (hora, diasemana, idasignatura) VALUES
    ('09:00:00', 'Lunes', 6),
    ('10:00:00', 'Martes', 7),
    ('11:00:00', 'Miércoles', 8),
    ('11:30:00', 'Jueves', 9),
    ('12:30:00', 'Viernes', 1),
    ('13:00:00', 'Lunes', 2),
    ('14:00:00', 'Martes', 3),
    ('09:00:00', 'Viernes', 6),
    ('10:00:00', 'Viernes', 7),
    ('11:00:00', 'Miércoles', 8),
    ('11:30:00', 'Jueves', 9),
    ('12:30:00', 'Viernes', 3),
    ('13:00:00', 'Lunes', 4),
    ('14:00:00', 'Viernes', 1),
    ('09:00:00', 'Lunes', 6),
    ('10:00:00', 'Viernes', 7),
    ('11:00:00', 'Miércoles', 8),
    ('11:30:00', 'Jueves', 9),
    ('12:30:00', 'Viernes', 4),
    ('13:00:00', 'Viernes', 2),
    ('14:00:00', 'Martes', 2);

--FIN DEL CODIGO SQL









*******************
    COMIENZO CLASE 2023/11/07
*******************

*******************
REPASO DÍA ANTERIOR

    AGREGAR COLUMNA
            ALTER TABLE servicios ADD descripcion VARCHAR(100) NOT NULL;

    MODIFICAR COLUMNA
            ALTER TABLE servicios CHANGE descripcion nuevonombre VARCHAR(50) NOT NULL; 
            PODEMOS CAMBIAR EL NOMBRE Y EL TIPO DE DATO SOLO LA EXTENSIÓN
            SI ERA UN TIPO VARCHAR, NO LO PUEDO CAMBIAR A UN TIPO INT

    BORRAR COLUMNA
            ALTER TABLE servicios DROP COLUMN nuevonombre;


    ELIMINAR TABLAS COMPLETAS DE MI BASE DE DATOS
            DROP TABLE tiempos;


FIN DEL REPASO
*******************
















ORDENAR CONSULTA

    SELECT * FROM servicios WHERE precio>12 ORDER BY precio ASC;

    !!!!!!!!!!!!!!!!
    EJERCICIO
    MOSTRAR LOS ALUMNOS QUE CUMPLEN AÑOS EN DICIEMBRE

SELECCIONAR DATOS ENTRE DOS VALORES

    SELECT * FROM servicios WHERE precio BETWEEN 10 AND 16; INLCUIDOS

    !!!!!!!!!!!!!!!!!
    EJERCICIO
    MOSTRAR LOS ALUMNOS QUE NACIERON ENTRE 2002 Y 2003 INCLUIDOS

FUNCIONES AGREGADORAS

    CONTADOR********

    SELECT COUNT (id), fecha
    FROM reservas
    GROUP BY precio DESC;

    !!!!!!!!!!!!!!
    EJERCICIO
    CONTAR EL NUMERO DE ALUMNOS QUE HAY POR AÑO Y ORDENARLOS DE MENOR A MAYOR EDAD


    SELECT idprofesor, COUNT(idcurso) FROM asignaturas GROUP BY idprofesor;

    ME CONTARÁ TODOS LOS ID QUE TENGAN EL MISMO PRECIO Y ME LOS ORDENARÁ DE MAYOR A MENOR


    SUMA************

    SELECT SUM(precio) AS totalServicios FROM servicios; 
    totalServicios ES UN ALIAS QUE USAMOS DE MANERA VIRTUAL
    SE CREA EN ESE MOMENTO PARA MOSTRARLO Y NADA MÁS, PERO
    NO EXISTE EN NUESTRA BASE DE DATOS



    MÍNIMO/MÁXIMO*******

    SELECT MIN(precio) AS precioMenor FROM servicios;
    SELECT MAX(precio) AS precioMayor FROM servicios;


COMO BUSCAR EN UNA BASE DE DATOS

    SELECT * FROM servicios WHERE nombre LIKE "Corte%";

    Corte%      INICIA CON CORTE 
    %Corte      FINALIZA CON CORTE
    %Corte%     CONTIENE CORTE, DA IGUAL QUE ESTÉ AL INICIO, AL FINAL O EN MEDIO

    !!!!!!!!!!!!!!
    EJERCICIO
    BUSCAR TODOS LOS ALUMNOS QUE SE LLAMEN LOPEZ DE APELLIDO

    LOS PROFESORES ESPECIALISTAS EN ECONOMIA

CONCATENAR COLUMNAS (UNIR)


    SELECT CONCAT(nombre," ",apellidos) AS nombreCompleto FROM profesores;
    ME CREA DE NUEVO UN ALIAS VIRTUAL

    SELECT * FROM alumnos
    WHERE CONCAT(nombre," ",apellidos) LIKE "%Yolanda Torres%";

    SELECT nombre, apellidos, CONCAT(nombre," ",apellidos) as nombreCompleto FROM alumnos;
    ME AÑADE UNA COLUMNA NUEVA CON LA CONCATENACIÓN, PERO ES VIRTUAL
    SIEMPRE QUE CREO UN ALIAS ES VIRTUAL, NO SE ALMACENA EN MI TABLA

MULTIPLES CONDICIONES

    SELECT * FROM reservas WHERE id IN(1,3,4);
    CON EL IN LE DAMOS MÚLTIPLES VALORES

    SELECT * FROM reservas WHERE fecha="2023-03-29" AND id>3;
    EL OPERADOR AND ME PERMITE APLICAR MÚLTIPLES CONDICIONES

    !!!!!!!!!!!!!!!!
    SELECCIONAR LOS ALUMNOS QUE SON DEL 2022 Y QUE SON DEL CURSO CON ID 6








    REGLAS DE NORMALIZACION
    OPTIMIZAR BASE DE DATOS EN FUNCION A UNAS REGLAS YA DEFINIDAS

    PONER DIAPOSITIVA 26

        HAY QUE APLICARLAS EN ORDEN

        1NF. CADA COLUMNA SOLO UN VALOR
        2NF. RELACION ENTRE COLUMNAS. LLAVES PRIMARIA MISMO TIPO DATO QUE LA FORANEA
        3NF. LOS DATOS QUE NO FORMAN PARTE DE LA LLAVE PRIMARIA. CREAR TABLAS PARA EVITAR REGISTROS DUPLICADOS

        Primera forma normal
            -Elimine los grupos repetidos de las tablas individuales.
            -Cree una tabla independiente para cada conjunto de datos relacionados.
            -Identifique cada conjunto de datos relacionados con una clave principal.
        Segunda forma normal
            -Cree tablas independientes para conjuntos de valores que se apliquen a varios registros.
            -Relacione estas tablas con una clave externa.
        Tercera forma normal
            -Elimine los campos que no dependan de la clave.

        EXISTE 5, PERO LAS 3 PRIMERAS SON LAS MAS IMPORTANTES


        DENORMALIZACION
            SE PUEDEN ROMPER EN ALGUN MOMENTOS LAS REGLAS DE NORMALIZACION
            PERO NO QUIERE DECIR QUE POR ELLO ESTÉ MAL LA BASE DE DATOS


    CARDINALIDAD Y DIAGRAMAS ER (ENTIDAD RELACION)
        ME PERMITEN VER DE MANERA VISUAL CUAL ES SU RELACION

        PONER DIAPOSITIVA27

        CARDINALIDAD, NUMERO MAXIMO DE VECES QUE UNA TABLA SE RELACIONA CON OTRA
            UNO A MUCHOS
            UNO A UNO
            MUCHOS A UNO

        !!!!!!!!!!!!!!!!
        EJERCICIO
        HACER EL DIAGRAMA ER DE LA BASE DE DATOS DE AEROPUERTO



        VAMOS A EMPEZAR A UNIR TABLAS, JOIN

        PARTIMOS DE LAS TABLAS RESERVAS Y CLIENTES

                SELECT * FROM reservas 
                INNER JOIN clientes ON clientes.id = reservas.idCliente;

                INNER JOIN SOLO ME MUESTRA CUANDO TENGAMOS VALORES
                LEFT JOIN PRIMERO CONSULTA citas Y AÑADE VALORES A LAS QUE TENGA
                INNER Y LEFT TIENEN EL MISMO RESULTADO

                RIGHT JOIN PRIMERO CONSULTA clientes Y AÑADE VALORES A LAS QUE TENGA



                UNIR DOS O MAS TABLAS CON EL JOIN

                SELECT * FROM reservas 
                LEFT JOIN reservas ON reservas.idCliente = clientes.id
                LEFT JOIN servicios ON servicios.idServicio = reservas.idServicio;

                MULTIPLES JOIN
                HACER UN JOIN A UNA TABLA QUE YA TIENE UN JOIN



*/