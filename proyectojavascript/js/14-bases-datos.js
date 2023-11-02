


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
            AddHandler application/x.httpd-php .php
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

            
            INSTALAR Y CONFIGURAR MYSQL
                dev.mysql.com/downloads/mysql

                DESCARGAMOS LA MÁS GRANDE
                TO PALANTE
                NO IMPORTA LOS ERRORES
                DEFINIR UN PASSWORD
                FullstackMadrid

                PODEMOS VER EL SERVICIO DE MYSQL Y SI NOS CONSUME MUCHA MEMORIA
                DETENERLO CUANDO NO LO USEMOS
                
                TENEMOS QUE CREAR UNA VARIABLE DE ENTORNO
                DEL SISTEMA CON EL VALOR DE RUTA DE
                C:\Program Files\MySQL\MySQL Server 8.0\bin

            PARA QUE ME PERMITA USAR LOS COMANDOS DE MYSQL DESDE POWERSHELL

            VAMOS A INSTALAR UN VISOR ALTERNATIVO DE BASES DE DATOS A MYSQL WORKBENCH
            
            TABLE PLUS
                tableplus.com

                create new conection

                Name: MySQL Localhost
                Host: localhost
                User: root
                Port: 3306
                Password: FullstackMadrid

                YA TENEMOS LA CONEXIÓN A MI BASE DE DATOS

            COMPOSER, ME VA A MEJORAR MI CODIGO PHP. AÑADIR DEPENDENCIAS
                getcomposer.org

            CREAR VARIABLE DE ENTORNO DEL SISTEMA PARA MYSQL SERVER BIN

            
            



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































/*
*******************
    COMIENZO CLASE
*******************

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


SINTAXIS BÁSICA DE CONSULTA DE BASE DE DATOS

ABRIMOS POWERSHELL, QUE SERÁ LA TERMINAL QUE USAREMOS
PARA LA CONSULTA DE LA BASE DE DATOS

EL PRIMER COMANDO QUE ME PERMITE INICIAR SESION MYSQL
ES OBLIGATORIO EL ; AL FINAL

    mysql -u root -p;

    PASSWORD: FullstackVigo En mac nada

PARA VER LAS BASES DE DATOS

    SHOW DATABASES;

LO HABITUAL ES ESCRIBIR EL CODIGO EN MAYUSCULAS

EL ; FINAL ES NECESARIO, HASTA QUE NO LO PONGAMOS NO 
SABRÁ CUAL ES EL FINAL DE LA SENTENCIA


CREAR UNA NUEVA BASE DE DATOS

    CREATE DATABASE peluqueria;
    SHOW DATABASES;

USAR UNA BASE DE DATOS

    USE peluqueria ;

PARA MOSTRAR LAS TABLAS

    SHOW TABLES;

PONER DIAPOSITIVA24

CREAR UNA NUEVA TABLA

    CREATE TABLE servicios(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60), //HASTA 60 CARACTERES, SI SE PASA LO CORTA Y COGE LOS 6O PRIMEROS
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

        UPDATE servicios SET precio=20 WHERE id=1; // CON , ACTUALIZO LOS CAMPOS QUE QUIERA
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
    COMIENZO CLASE
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
            INSERT INTO servicios(nombre,precio) VALUE ("Tinte",5);
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

    BORRAR COLUMNA
            ALTER TABLE servicios DROP COLUMN nuevonombre


ELIMINAR TABLAS COMPLETAS DE MI BASE DE DATOS

    MOSTRAMOS PRIMERO LAS TABLAS
    SHOW TABLES;
    
    BORRAR TABLAS
    DROP TABLE tiempos;
    ME VA A EJECUTAR LA SENTENCIA, NO ME VA A PREGUNTAR SI ESTOY SEGURO NI NADA
    ES UN COMANDO MUY CRITICO


!!!!!!!!!!!!!!
EJERCICIO
CREAMOS UNA NUEVA TABLA reservas
COLUMNAS (id, idcliente, hora, fecha, idservicio)

CREAR AL MENOS 5 INSTANCIAS 












CREATE TABLE reservas (
    id INT(11) NOT NULL AUTO_INCREMENT,
    idclientes INT(11) NOT NULL,
    idservicios INT(11) NOT NULL,
    hora TIME DEFAULT NULL, // SI NO SE PASA NINGUN VALOR TOMA LA HORA DEL REGISTRO
    fecha DATE DEFAULT NULL, // IGUAL QUE LA HORA
    idservicio VARCHAR(255) NOT NULL,
    PRIMARY KEY(idreservas),
    FOREIGN KEY idservicios REFERENCE servicios(id),
    FOREIGN KEY idclientes REFERENCE clientes(id)
);







ORDENAR CONSULTA

    SELECT * FROM servicios WHERE precio>12 ORDER BY precio;

SELECCIONAR DATOS ENTRE DOS VALORES

    SELECT * FROM servicios WHERE precio BETWEEN 10 AND 16; INLCUIDOS

FUNCIONES AGREGADORAS

    CONTADOR********

    SELECT COUNT (id), fecha
    FROM reservas
    GROUP BY fecha DESC;

    ME CONTARÁ TODOS LOS ID QUE TENGAN LA MISMA FECHA Y ME LOS ORDENARÁ DE MAYOR A MENOR


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

CONCATENAR COLUMNAS (UNIR)

    SELECT CONCAT(nombre," ",apellidos) AS nombreCompleto FROM clientes;
    ME CREA DE NUEVO UN ALIAS VIRTUAL

    SELECT * FROM clientes
    WHERE CONCAT(nombre," ",apellidos) LIKE "%Juan Bartolo%";

    SELECT nombre, apellidos, CONCAT(nombre," ",apellidos) as nombreCompleto FROM clientes;
    ME AÑADE UNA COLUMNA NUEVA CON LA CONCATENACIÓN, PERO ES VIRTUAL
    SIEMPRE QUE CREO UN ALIAS ES VIRTUAL, NO SE ALMACENA EN MI TABLA

MUTIPLES CONDICIONES

    SELECT * FROM reservas WHERE id IN(1,3,4);
    CON EL IN LE DAMOS MÚLTIPLES VALORES

    SELECT * FROM reservas WHERE fecha="2023-03-29" AND id>3;
    EL OPERADOR AND ME PERMITE APLICAR MÚLTIPLES CONDICIONES



























*******************
    COMIENZO CLASE
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

    ORDENAR CONSULTA
            SELECT * FROM servicios WHERE precio>12 ORDER BY precioE;

    SELECCIONAR DATOS ENTRE DOS VALORES
            SELECT * FROM servicios WHERE precio BETWEEN 10 AND 16; INLCUIDOS

    FUNCIONES AGREGADORAS

        CONTADOR********
            SELECT COUNT (id), fecha
            FROM reservas
            GROUP BY fecha DESC;


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

    CONCATENAR COLUMNAS (UNIR)
            SELECT CONCAT(nombre," ",apellidos) AS nombreCompleto FROM reservas;
            ME CREA DE NUEVO UN ALIAS VIRTUAL

            SELECT * FROM reservas
            WHERE CONCAT(nombre," ",apellidos) LIKE "%Juan Bartolo%";

            SELECT hora, fecha, CONCAT(nombre," ",apellidos) as nombreCompleto FROM reservas;
            ME AÑADE UNA COLUMNA NUEVA CON LA CONCATENACIÓN, PERO ES VIRTUAL
            SIEMPRE QUE CREO UN ALIAS ES VIRTUAL, NO SE ALMACENA EN MI TABLA

    MULTIPLES CONDICIONES
            SELECT * FROM reservas WHERE id IN(1,3,4);
            CON EL IN LE DAMOS MÚLTIPLES VALORES

            SELECT * FROM reservas WHERE fecha="2023-03-29" AND id>3;
            EL OPERADOR AND ME PERMITE APLICAR MÚLTIPLES CONDICIONES

    FIN DEL REPASO
    *******************



    REGLAS DE NORMALIZACION
    OPTIMIZAR BASE DE DATOS EN FUNCION A UNAS REGLAS YA DEFINIDAS

    PONER DIAPOSITIVA26

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