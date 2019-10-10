
//////----- * * * | | | | Ctrl + Shift + (7, K + U o K + C), para descomentar | | | | * * * -----//////




//////------------------------------------------------------------------------------------------//////
//////--------------- * * * | | | | | INTRODUCCION A JAVASCRIPT  | | | | | * * * ---------------//////
//////------------------------------------------------------------------------------------------//////

    // var n = prompt('Cual es tu Nombre?');
    // document.getElementById('mensaje').innerHTML = `Bienvenido ${n}`;   
    // var saludo = 'Hola como estas?';
    // console.log(saludo);




















//////----------------------------------------------------------------------------------------//////
//////--------------- * * * | | | | | FUNCIONES DE LA CONSOLA  | | | | | * * * ---------------//////
//////----------------------------------------------------------------------------------------//////

    // console.time('error no has podido hakear la nasa');
    // console.error('jijiji');
    // console.warn('jejejeje');
    // console.error('jijiji');
    // console.warn('jejejeje');
    // console.error('jijiji');
    // console.warn('jejejeje');
    // console.error('jijiji');
    // console.warn('jejejeje');
    // console.timeEnd('error no has podido hackear la nasa');














    





//////---------------------------------------------------------------------------------------------//////
//////--------------- * * * | | | | | FORMAS DE DECLARAR VARIABLES  | | | | | * * * ---------------//////
//////---------------------------------------------------------------------------------------------//////

    //// Var - obsoleta, toma e dato global dando situaciones inesperadas 
        // var nombreCliente = 'pedro'; // camelcase
        // var nombre_cliente = 'pedro'; //underscore  
        // var NombreCliente = 'pedro'; //pascalcase
        // var nombreCliente = 'Karen';
        // var nombreCliente = 'Luisa';
        // console.log(nombreCliente);
     
    //// Let - La mas utilizada, no se puede volver a declarar pero si sobrescribir 
        // let nombre = 'Karen';
        //// let nombre = 'Luisa'; //error
        // console.log(nombre);

    //// Const - variable constante, no se pude sobrescribir ni volver a declarar 
        // const cliente = 'juan';
        //// cliente = 'pedro'; // error
        // console.log(cliente);
        // const divmensaje = document.getElementById('mensaje');

        


















//////--------------------------------------------------------------------------------------//////
//////--------------- * * * | | | | | HERRAMIENTAS DE STRING | | | | | * * * ---------------//////
//////--------------------------------------------------------------------------------------//////

    //// Lenght - para contar cantidad de elementos
        // let cancion = 'ASadman';
        // nombre;
        // let banda = 'Banda';
        // nombre = banda + ' ' + cancion;
        // console.log(banda.length + ' adw ' + banda);
        // console.log(nombre);

    //// Concat - agregarle texto
        // nombre = nombre.concat(' '+'esto se concateno o agrego');
        // console.log(nombre); 

    //// Todas las letras a Mayusculas
        // nombre = nombre.toUpperCase();
        // console.log(nombre);

    //// Todas las letras a minusculas
        // nombre = nombre.toLowerCase();
        // console.log(nombre);

    //// Split - divide por palabras un string 
        // let actividad = 'Estoy aprendiendo java script';
        // nombre1 = actividad.split(' ');
        // console.log(nombre1);
        // let listaSuper = 'pan, harina, coca, waro, lcd';
        // nombre2=listaSuper.split(', ');
        // console.log(nombre2);

    //// Replace - remplaza un elemento 
        // let cancionl = ' Puedo agarrarte a besos';
        // nombre3 = cancionl.replace('besos','chingadasos');
        // console.log(nombre3);

    //// Includes - revisa si esta el elemento
        // nombre3 = cancionl.includes('ella');
        // console.log(nombre3); //false
        // nombre3 = cancionl.includes('besos');
        // console.log(nombre3); //true
        // let correo = 'correomail.com';
        // nombre3 = correo.includes('@');
        // console.log(nombre3);

    //// Repeat - para repetir un elemento
        // let letra = 'wou ';
        // let letra2 = 'sweet child of mine';
        // console.log(letra.repeat(4) + letra2);




















//////-------------------------------------------------------------------------------------------//////        
//////--------------- * * * | | | | | HERRAMIENTAS DE LOS ENTEROS | | | | | * * * ---------------//////
//////-------------------------------------------------------------------------------------------//////

    //// Math. - calculos matematicos

    //// Aproximar el resultado 
        // let resultado= 2.5;
        // resultado = Math.round(resultado);
        // console.log(resultado);

    //// Aproxima el numero descendentemente
        // resultado = 2.999;
        // resultado = Math.floor(resultado);
        // console.log(resultado);

    //// Aproxima el numero ascendentemente
        // resultado= 2.001;
        // resultado = Math.ceil(resultado);
        // console.log(resultado);

    //// Raiz cuadrada
        // resultado = Math.sqrt(144);
        // console.log(resultado);

    //// Valor absoluto
        // resultado = Math.abs(-23);
        // console.log(resultado);

    //// Potencia
        // resultado = Math.pow(8, 3);
        // console.log(resultado);

    //// Encontrar el numero minimo
        // resultado = Math.min(123, 23, 12, 59);
        // console.log(resultado);

    //// Encontrar el numero mayor
        // resultado = Math.max(322, 2432, 2341,12);
        // console.log(resultado);

    //// ++ suma 1 
    //// -- resta 1 
    //// += suma un valor al que ya tienes
    //// -= resta un valor al que ya tienes




















//////--------------------------------------------------------------------------------------------//////
//////--------------- * * * | | | | | CONVERSION DE TIPOS DE DATOS | | | | | * * * ---------------//////
//////--------------------------------------------------------------------------------------------//////

    //// Convertir string a numero
        // let num1 = 5,
        //     num2 = '6',
        //     num3 = 34.52;
        // console.log(num1 + num2);
        // console.log(parseInt(num2) + num1);
        // console.log(parseInt(num3) + num1);
        // console.log(Number(num3) + num1);
        // console.log(parseFloat(num3) + num1);
        // let dato = Number(true); //1
        // dato = Number(false); //0
        // dato = Number(null); //0

    //// Tofixed - cantidad de decimales
        // let numDecimal= '2133.123213';
        // console.log(Number(numDecimal).toFixed(1));

    //// Convertir numero a string
        // dato = 1812024793820947;
        // // dato = String(dato);
        // console.log(dato);
        // console.log(String(dato).length);

    //// Convertir booleano a string
        // dato = String(true);
        // console.log(dato);
        // console.log(dato.length);
        // dato = String(new Date()) ;
        // console.log(dato);
        // console.log(dato.length);
        // dato = String([1,2,3,3,5]);
        // console.log(dato);
        // console.log(dato.length);




















//////--------------------------------------------------------------------------------//////        
//////---------------- * * * | | | | | TIPOS DE DATOS | | | | | * * * ----------------//////
//////--------------------------------------------------------------------------------//////

    //// String - Cadena de Texto
        // let string = 'ggggggg';
        // console.log(typeof string);
        // let valor; 
        // console.log(typeof valor);
        // valor = 'que tal';
        // console.log(typeof valor);
        // valor = '22';
        // console.log(typeof valor);

    //// Number - Numero, decimal o entero       
        // valor = 22;
        // console.log(typeof valor);

    //// Booleano - True o False   
        // valor = true;
        // console.log(typeof valor);
        // valor = false;
        // console.log(typeof valor);

    //// Null - valor nulo 
        // valor = null;
        // console.log(typeof valor);
    
    //// Undefinded - valor indefinido
        // let valorI;
        // console.log(typeof valorI);    
        // valor = undefined;
        // console.log(typeof valor);

    //// Objeto - (Arreglos, objetos, funciones, fecha)
        //// Arrays o Arreglo 
            // valor = ['mota', 'mato', 'hijos'];
            // console.log(typeof valor);
        //// Objeto    
            // valor = {
            //     nombre:'pablo',
            //     edad:7
            // };
            // console.log(typeof valor);
        //// Fecha    
            // valor = new Date();
        //// console.log(typeof valor);




















//////---------------------------------------------------------------------------------//////
//////--------------- * * * | | | | | ARRAYS O ARREGLOS | | | | | * * * ---------------//////
//////---------------------------------------------------------------------------------//////

    // const numeros = new Array(8, 7, 4, 5);
    // console.table(numeros); //mostrarlos en tabla
    // const dias = ['Lunes', 'Martes', 'Miercoles', 2, 5];
    // console.log(dias);
    // console.log(dias[0]);
    // console.log(Array.isArray(dias));

    //// Agrega en una posicion especifica
        // dias[3]= 'abril';
        // console.log(dias);

    //// Agrega al final
        // dias.push('Abril');
        // console.log(dias);

    //// Agrega al principio
        // dias.unshift(442 );
        // console.log(dias);

    //// Elimina el ultimo
        // dias.pop();
        // console.log(dias);

    //// Elimina el primero
        // dias.shift();
        // console.log(dias);

    //// Elimina en un rango
        // dias.splice(0, 2);
        // console.log(dias);

    //// Voltear orden de la lista
        // dias.reverse();
        // console.log(dias);
    
    //// Ordenar alfabeticamente
        // dias.sort();
        // console.log(dias);




















//////--------------------------------------------------------------------------------//////
//////---------------- * * * | | | | | TIPOS DE DATOS | | | | | * * * ----------------//////
//////--------------------------------------------------------------------------------//////

    //// Forma 1 - Object Literal 
        // const datos = {
        //     nombre: 'pablo',
        //     edad: 17,
        //     estudia: true,
        //     musica: ['Hip-Hop', 'Baladas', 'Rock'],
        //     vivienda: {
        //         pais:'Guatemala',
        //         ciudad:'Villanueva',
        //         mas:'SanJose',
        //     }
        // };
        // console.log(datos);
        // console.log(datos.estudia);
        // console.log(datos.vivienda.pais);
        // console.log(datos.musica[2]);
        // console.log(datos['vivienda']);

    //// Forma 2 - Object Construction y This
        // const info = {
        //     nombre: 'Pablo',
        //     edad: 17,
        //     nacimiento: ()=> new Date().getFullYear() - this.edad
        // }
        // console.log(info.edad);

        // class Tareas{
        //     constructor(tarea, importancia){
        //         this.tarea = tarea;
        //         this.importancias = importancia;
        //     }
        // }
        // const tarea1 = new Tareas('Aprender Java', 'urgente');
        // const tarea2 = new Tareas('Terminar Template', 'medio');
        // const tarea3 = new Tareas('Soporte Computadoras', 'bajo');
        // const tarea4 = new Tareas('Aprender Italiano', '0');
        // console.log(tarea1);
        // console.log(tarea2);
        // console.log(tarea3);
        // console.log(tarea4);




















//////--------------------------------------------------------------------------------//////
//////--------------- * * * | | | | | TEMPLATE STRINGS | | | | | * * * ---------------//////
//////--------------------------------------------------------------------------------//////

    // nombre = 'Pablo Angel',
    //         cargo = 'Practicante experto';
    // console.log(`Nombre: ${nombre}, Cargo: ${cargo}`); // template
    // console.log('Nombre: ' + nombre + ', Cargo: ' + cargo); // normal, obsoleta
    // let cont1 = document.querySelector('#inicio1');
    // let cont2 = document.querySelector('#inicio2');

    //// Forma 1 - obsoleta
        // let mensaje1 = '<h1>Nombre: </h1><h3>' + nombre + '</h3>'+
        //              '<h1>Cargo: </h1><h3>' + cargo + '</h3>';
        // cont1.innerHTML = mensaje1;

    //// Forma 2 - mas efeciva, limpia 
        // let mensaje2 = `<h1>Nombre: </h1>
        //                 <h3>${nombre}</h3>
        //                 <h1>Cargo: </h1>
        //                 <h3>${cargo}</h3>
        //                 `    
        // cont2.innerHTML = mensaje2;




















//////---------------------------------------------------------------------------------//////
//////------------------- * * * | | | | | FUNCIONES | | | | | * * * -------------------//////
//////---------------------------------------------------------------------------------//////

    //// Function Declaration - Forma 1 , se puede llamar antes de declararla, son reutilizables
        // saludo1('Luisa', 'Matar a alguien');
        // function saludo1(nombre = 'Visitante', verbo = 'Aun no sabemos'){
        //     console.log(`Hola, Bienvenido ${nombre}, Hoy tienes que ${verbo}`);
        // }
        // saludo1('Pablo', 'Lavar carros');
        // saludo1('Karen');
        // saludo1('Juan', 'investigar tecnicas de trabajo');
        // saludo1(undefined,'Cocinar desayuno');

    //// Function Expresion - Forma 2 , no se puede llamar antes de declararla, son reutilizables
        //// suma1() // error
        // const suma1 = function(a = 0, b = 0){
        //     console.log(a*b);
        // }
        // suma1();
        // suma1(8,9);
        // suma1(5,9);

    //// IIFE - esta funcion se llama solo al instante, no reutilizable
        // (function iffe(dificultad = 'Nose'){
        //     console.log(`Esto es un IFFE, JavaScript se nos hace ${dificultad}`);
        // })('facil');
        


    //// Metodos o Funciones dentro de objetos
        // const musica = {
        //     cancion:function(cancion){
        //         console.log(`Reproduciendo la Cancion ${cancion}`);
        //     }, 
        //     pausa:function(){
        //         console.log(`Pausando la Cancion...`);
        //     },
        // }
        // musica.borrar = function(numero){
        //     console.log(`Eliminando la Cancion numero ${numero}...`)
        // }
        // musica.cancion('Sweet child of mine');
        // musica.pausa();
        // musica.borrar('#44');

    //// Return - para retornar un valor a la funcion para utilizarlo despues
        // // Multiplica y Suma
        // const mult = function(a, b){
        //     return a * b;
        // };
        // // const mult = (a, b) => a*b; // Arrow Function
        // let total1 = mult(9 , 5);
        // console.log(total1);
        // suma = function(a) {
        //     return a + 9;
        // };
        // // const suma = a => a + 9; // Arrow Function
        // let total = suma(total1);
        // console.log(total);

    //// Arrow Functions - return simplificado
        // // let viajando = function(destino) {
        // //     return 'Viajando a la ciudad de ' + destino;    // Forma Normal
        // // };
        // let viajando = destino => 'Viajando a la ciudad de ' + destino;
        // let viaje = viajando('Paris');
        // console.log(viaje);




















//////-------------------------------------------------------------------------//////
//////---------------- * * * | | | | | FECHAS | | | | | * * * -----------------//////
//////-------------------------------------------------------------------------//////       

    //// Extraer Fecha Completa
        // const fecha = new Date();
        // console.log(fecha);

    //// Mes del Año, enero = 0
        // let mes = fecha.getMonth();
        // console.log(mes);

    //// Año Actual
        // let anio = fecha.getFullYear();
        // console.log(anio);

    //// Resetear el año
        // // let reset = fecha.setFullYear(1999);
        // // console.log(reset);
        // // anio = fecha.getFullYear();
        // // console.log(anio);

    //// Dia del mes
        // let diaDelMes = fecha.getDate();
        // console.log(diaDelMes);

    //// Dia de la semana, domingo = 0
        // let diaDeLaSemana = fecha.getDay();
        // console.log(diaDeLaSemana);

    //// Hora del dia, 24hrs
        // let hora = fecha.getHours();
        // console.log(hora);

    //// Minuto de la hora
        // let minuto = fecha.getMinutes();
        // console.log(minuto);

    //// Segundo del minuto
        // let segundo = fecha.getSeconds();
        // console.log(segundo);

    //// Tiempo en milisegundos
        // let time = fecha.getTime();
        // console.log(time);

    //// Extrae datos de una fecha especifica
        // const naci = new Date('3-21-2002');
        // let dsn;
        // dsn = naci.getDay();
        // console.log(dsn);




















//////-------------------------------------------------------------------------//////
//////-------------- * * * | | | | | CONDICIONES | | | | | * * * --------------//////
//////-------------------------------------------------------------------------//////

    // let puntaje = 100;

    //// IF, si se cumple
        // if (puntaje){
        //     console.log('Su puntaje es de ' + puntaje + ' pts');
        //     if (puntaje >=1000){
        //         console.log('Felicidades, Paso de nivel');
        //     }   else{
        //         console.log('Lo sentimos, no paso de nivel ):');
        //     }
        // }
    
    //// ELSE, no se cumple   
        // else {
        //     console.log('No hay puntaje');
        // };
    
    //// EJEMPLO Complejo
        // let edad = 8;
        // if (edad >= 18){
        //     console.log('Usted es mayor de edad');
        // }
        // else {
        //     console.log('No es mayor de edad');
        // };

        // let log = true;
        // if (log){
        //     console.log('Bienvenido, usted ingreso correctamente');
        // }
        // else {
        //     console.log('no se a podido ingresar, desea volver a intentar?');
        // };




















//////----------------------------------------------------------------------------------------//////
//////--------------- * * * | | | | | OPERADORES Y EL TERNARIO | | | | | * * * ---------------//////
//////----------------------------------------------------------------------------------------//////

    //// Else If - Entonces Si, otra opcion del if

    //// Or '||' , una de las dos condiciones debe ser verdadera
        // let dinero = 300;
        // let carrito = 400;
        // let tarjeta = false;
        // if(dinero >= carrito || tarjeta){
        //     console.log('Pago realizado exitosamente');
        // }
        // else{
        //     console.log('NO hay suicientes fondos');
        // }

    //// Y '&&' , las dos deben ser verdaderas
        // hora = 9;
        // if (hora >= 1 && hora <= 11){
        //     console.log('Buenos Dias');
        // }else if(hora >= 12 && hora <= 18){
        //     console.log('Buenas Tardes');
        // }else if(hora >= 19 && hora <= 24){
        //     console.log('Buenas Noches');
        // }else{
        //     console.log('Hora no Valida');
        // }

    //// Ternario, Una condicion de forma resumida
        // puntaje = 1000;
        // console.log(puntaje ? 'Tiene Puntaje' : 'No tiene puntaje');




















//////----------------------------------------------------------------------------------------//////
//////------------------- * * * | | | | | SWITCH STATEMENT | | | | | * * * -------------------//////
//////----------------------------------------------------------------------------------------//////

    //// Sintaxis Switch, lo mismo que una condicion, mas limpio y facil de leer
        // const metodopago = 'tarjeta';
        // switch(metodopago){
        //     case 'efectivo': 
        //         efectivo();    
        //         break;
        //     case 'cheque':
        //         cheque();
        //         break;
        //     case 'tarjeta': 
        //         console.log(`Revisando Credenciales...  Pago realizado, pago con ${metodopago}`)
        //         break;
        //     default:
        //         console.log('No se ha completado el pago')
        //         break;
        // };

    //// Incluso se pueden incluir funciones facilmente    
        // function efectivo(){
        //     console.log(`Pago completado, pago en ${metodopago}`);
        // }
        // function cheque(){
        //     console.log(`Revisando Fondos...  Pago Completado, pago con ${metodopago}`);
        // }




















//////----------------------------------------------------------------------------------------//////
//////-------------------- * * * | | | | | LOOPS O CICLOS | | | | | * * * --------------------//////
//////----------------------------------------------------------------------------------------//////

    //// For - Loop, condicion en el parametro, mas confeccionable
        // for(let i = 0; i<=10; i++){
        //     if (i===1){
        //         console.log(`${i} borracho`);
        //     }else{
        //         console.log(`${i} borrachos`);
        //     }
        // }

    //// While - Loop, solo condicion en el parametro, misma funcion del for
        // let i = 0;
        // while(i<=10){
        //     if (i===1){
        //         console.log(`${i} borracho`);
        //     }else{
        //         console.log(`${i} borrachos`);
        //     }
        //     i++;
        // }

    //// Do While - Loop, no muy utilizada, ejecuta antes de verificar, almenos 1 vez
        // i = 0;
        // do{
        //     if (i===1){
        //         console.log(`${i} borracho`);
        //     }else{
        //         console.log(`${i} borrachos`);
        //     }
        //     i++
        // }
        // while(i<=10);

    //// Diferencia: for igual a while verifican antes de ejecutar
    //// Do while al contrario, ejecuta almenos una vez antes de verificar 

    //// Loop - Recorrer lista o Array
        // const artistas = ['Gonzalo Genek', 'Delaossa', 'Babi', 'Zeballos', 'Sofia Gabbana'];
        // for(let i = 0; i<artistas.length; i++){
        //     console.log(`Cancion de : ${artistas[i]}`);
        // }




















//////----------------------------------------------------------------------------------------//////
//////---------------- * * * | | | | | OTROS ITERADORES EN JS | | | | | * * * ----------------//////
//////----------------------------------------------------------------------------------------//////        

    //// Recorrer - Array
        // const materias = ['Matemática', 'Sociales', 'Quimica', 'Ciencias', 'Ingles'];  
        //// For
            // for(materia of materias){
            //     console.log(materia);
            // }
        //// ForEach - no se copia solo se muestra
            // materias.forEach(mat =>{ 
            //     console.log(mat);
            //     }       
            // );
        //// Map - recorrerla y copiarla 
            // let nuevoarray = materias.map(mat => { 
            //     console.log(mat);
            //     return mat;
            //     }       
            // );
            // console.log(nuevoarray);

    //// Recorrer - Un Array con Objetos
        // const canciones =[
            //     {nombre: 'Dime si valio la Pena', autor:'Gonzalo Genek' },
            //     {nombre: 'Sweet child of mine', autor:'Guns`n Roses' },
            //     {nombre: 'Fui Silencio', autor:'Sofia Gabanna' },
            //     {nombre: 'Solo eso', autor:'Zeballos' },
            //     {nombre: 'La ladrona', autor:'Diego verdaguer' }
            // ] 
        //// For
            // for(cancion of canciones){
            //     console.log(cancion);
            //     console.log(cancion.nombre);
            //     console.log(cancion.autor);
            // }      
        //// ForEach - no se copia solo se muestra    
            // canciones.forEach(cancion => {
            //     console.log(cancion);
            //     console.log(cancion.nombre);
            //     console.log(cancion.autor);
            // })
        //// Map - recorrerla y copiarla     
            // let nuevoArray2 = canciones.map(cancion => {
            //     console.log(cancion);
            //     console.log(cancion.nombre);
            //     console.log(cancion.autor);
            //     return cancion;
            // });
            // console.log(nuevoArray2);

    //// Recorrer - Un Objeto
        // const compu = {
        //     marca: 'hp',
        //     ram: '4gb',
        //     discoduro: '460gb',
        //     so: ['windows', 'ubuntu'],
        //     pantalla: '19\''
        // }
        //// For
            // for(car of Object.keys(compu)){
            //  console.log(car);
            // }
            // for(car of Object.values(compu)){
            //  console.log(car);
            // }
        //// ForEach - no se copia solo se muestra       
            // Object.values(compu).forEach(car => {
            //     console.log(car);
            //     return car;
            // });
        //// Map - recorrerla y copiarla    
            // let object2 = Object.values(compu).map(car => {
            //     console.log(car);
            //     return car;
            // });
            // console.log(object2);




















//////----------------------------------------------------------------------------------------//////
//////---------- * * * | | | | | SCOPE, VARIABLES LOCALES Y GLOBALES | | | | | * * * ---------//////
//////----------------------------------------------------------------------------------------//////            





    //// cualquier variable declarada funciona solo dentro de su Entidad

    //// Este es uno de los problemas con var
        // var color = 'azul';
        // function abc() {
        //     var color = 'rojo';
        //     console.log(color)
        // }
        // abc();
        // console.log(color);

    //// Esto nos sucede con let y cont    
        // color = 'azul';
        // function abc() {
        //     let color = 'rojo';
        //     console.log(color)
        // }
        // abc();
        // console.log(color);
























//////----------------------------------------------------------------------------------------//////
//////------------------ * * * | | | | | DESTRUCTURING OBJECT | | | | | * * * ----------------//////
//////----------------------------------------------------------------------------------------//////
        
    //// Para extrar un valor de un Objeto

    // cliente1 = {
    //     nombre: 'Gabriela',
    //     apellido: 'Morales',
    //     tipo:'premium',
    //     datos:{
    //         ubicacion:{
    //             ciudad: 'Villanueva',
    //             pais: 'Guatemala'
    //         },
    //         personales:{
    //             edad: 18,
    //             saldo: 7000
    //         }
    //     },
    //     gustos:{
    //         musica:['rock', 'Hip-hop', 'Grafiti']
    //     }
    // }

    //// Forma Anterior - obsoleta
        // let nombree = cliente1.nombre;
        // let apellidoo = cliente1.apellido;
        // let tipoo = cliente1.tipo;
        // let ciudaad = cliente1.datos.ubicacion.ciudad;
        // let edaad = cliente1.datos.personales.edad;
        // let gustoss = cliente1.gustos.musica;
        // console.log(nombree);
        // console.log(apellidoo);
        // console.log(tipoo);
        // console.log(ciudaad);
        // console.log(edaad);
        // console.log(gustoss);

    //// Forma Destructuring Object - nuevos frameworks JS, limpio
        //  let {nombre11, apellido, tipo} = cliente1;
        // console.log(`${nombre11} ${apellido} ${tipo}`);

        // let {datos:{ubicacion:{ciudad, pais}}} = cliente1;
        // console.log(`${ciudad}, ${pais}`);

        // let {datos:{personales:{edad1, saldo}}} = cliente1;
        // console.log(`${edad1}, ${saldo}`);

        // let {gustos:{musica:[r, h, g]}} = cliente1;
        // console.log(`${r}, ${h}, ${g}`);




















//////----------------------------------------------------------------------------------------//////
//////--------------- * * * | | | | | OBJECT LITERAL ENHACEMENT | | | | | * * * --------------//////
//////----------------------------------------------------------------------------------------//////        

    //// Para agregar un valor a un Objeto

    //      banda = 'Parley',
    //      genero = 'Hip-Hop Old School',
    //   cancioness = ['Mix max mux', 'Justicia sin ley', 'Pexcatum', 'Atofagaste'];

    //// Forma anterior - obsoleta
        ////  const datos1 = {
        ////      banda:banda,
        ////      genero:genero,
        ////      cancioness:cancioness
        ////  }
        //// console.log(datos1);
        
    //// Forma object literal enhacement, nuevos frameworks de JS, limpio
        // datos1 = {banda, genero, cancioness};
        // console.log(datos1);




















//////----------------------------------------------------------------------------------------//////
//////------------------- * * * | | | | | OTROS METODOS JS | | | | | * * * -------------------//////
//////----------------------------------------------------------------------------------------//////   
    
    //// Metodos .filter .find .reduce JS

    // const personas = [
    //     {nombre:'Pablo', edad:17, sexo:'Masculino'},
    //     {nombre:'Eldin', edad:23, sexo:'Otaku'},
    //     {nombre:'Linguini', edad:14, sexo:'Indefinido'},
    //     {nombre:'Miguel', edad:95, sexo:'Prefiero no Decirlo'},
    //     {nombre:'Jennifer', edad:33, sexo:'Femenino'}
    // ]

    //// Filter - filtra resultados
        // nombre = personas.filter(persona => persona.edad > 25);
        // console.log(nombre);

    //// Find - reune los resultados de una persona
        // let id = personas.find(persona => persona.nombre == 'Pablo');
        // console.log(id);
        // let {sexo} = id;
        // console.log(sexo);

    //// Reduce - acumula datos
        // total = personas.reduce((suma, persona) => suma + persona.edad, 0);
        // console.log (`${total}`);




















//////----------------------------------------------------------------------------------------//////
//////---------------------- * * * | | | | | FETCH API | | | | | * * * -----------------------//////
//////----------------------------------------------------------------------------------------////// 

    //// Misma funcion de Ajax, ajax es antiguo con 
    //// mas soporte, pero este se esta implementando para el futuro

    ////EJEMPLO USUARIOS ALEATORIOS
        // usuarios(30);

        // function usuarios(cantidad = 1) {
            
        //     let api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;
            
        //     // llamar a Fetch
        //     fetch(api)
        //         .then(datos => datos.json())    
        //         .then(datos => imprimirHTML(datos.results));
        // }

        // function imprimirHTML(datos) {
            
        //     datos.forEach(user => {  
        //         console.log(user);
        //         let li = document.createElement('h1');
        //         const {gender, name:{first, last, title}, picture:{large}} = user;

        //         li.innerHTML = `
        //             Genero : ${gender} <br>
        //             Nombre : ${first} ${last}<br>
        //             Imagen : <br> <img src="${large}"><br><br>
        //         `;
        //         document.querySelector('#appi').appendChild(li);
        //     });
        // }

        
    //// EJEMPLO POKEDEX
        // pokec();

        // function pokec() {
        //     let api = `https://pokeapi.co/api/v2/pokemon/`
            
        //     fetch(api)
        //     .then(datos => datos.json())
        //     .then(datos => cont(datos.results));
        //     let cont = datos => {
        //         let nn = Object.keys(datos).length

        //         for (let i = 1; i < nn ; i++) {
        //             poke(i);
        //             function poke(i) {
        //                 let api = `https://pokeapi.co/api/v2/pokemon/${i}`;
        //                 fetch(api)
        //                 .then(datos => datos.json())
        //                 .then(datos => mostrar(datos));
        //             }    
        //         }
        //     };
        // }
        // function mostrar(datos) {
        //     console.log(datos);
        //     let {name, id, sprites:{front_default} } = datos;
        //     let img = front_default;
        //     console.log(img);

        //     let h3 = document.createElement('h3');
        //     h3.innerHTML = `
        //         Nombre = ${name} <br>
        //         Numero = ${id} <br>
        //         <img src="${img}"><br><br><br>
        //     `;
        //     document.querySelector('#appi').appendChild(h3);
            
        // }




