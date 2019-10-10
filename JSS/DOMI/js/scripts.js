
// IFFE
// Indispenable, para que carge todo nuestro documento html y luego se ejecute nuestro JS
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){

  
    // // getElementById
    // let logo = document.getElementById('logo');
    // console.log(logo);
    // let navegacion = document.getElementById('navegacion');
    // console.log(navegacion);
    // logo.style.backgroundColor = "black",
    //           logo.style.width = "",
    //           logo.style.border = "10px solid red";
    //           logo.style.borderRadius = "40%";
    //           logo.style.textAlign = "center";


    // // getElementByClassName
    // let navegacionC = document.getElementsByClassName('navegacion');
    // console.log(navegacionC);
    // let contenidoC = document.getElementsByClassName('contenido');
    // console.log(contenido);
    // contenido.style.backgroundColor = 'green'; 

    
    // // getElementByTagName
    // let enlaces = document.getElementsByTagName('a');
    // console.log(enlaces);
    // console.log(enlaces.length);
    // for (let i = 0; i < enlaces.length; i++) {
    //   enlaces[i].setAttribute('target', 'blank');
    // };
    // let enlacesSidebar =document.getElementById('sidebar').getElementsByTagName('a');
    // console.log(enlacesSidebar);
    // for (let i = 0; i < enlacesSidebar.length; i++) {
    //   enlacesSidebar[i].setAttribute('href', 'http://www.google.com');  
    // };


    // // querySelector sintaxis css
    // let logo = document.querySelector('#logo, footer p');
    // console.log(logo);
    // let encabezado = document.querySelectorAll('h2, footer p');
    // console.log(encabezado);
    // let enlaces = document.querySelectorAll('a, footer p');
    // console.log(enlaces);
    // let enlacesb = document.querySelectorAll('a.boton');
    // console.log(enlacesb);


    // // querySelectorAll
    // let enlaces = document.querySelectorAll('a');
    // console.log(enlaces);
    // enlaces.forEach(enlace => console.log(enlace));


    // // Nodo
    // let enlaces = document.querySelectorAll('#menu ul li a');
    // console.log(enlaces);
    // enlaces.forEach(enlace => {
    //   console.log(enlace.nodeName),
    //   console.log(enlace.nodeType),
    //   console.log(enlace.attributes),
    //   console.log(enlace.firstChild),
    //   console.log(enlace.firstChild.nodeValue),
    //   enlace.firstChild.nodeValue = 'GGG LOL';   
    //   enlace.id = 'un_id_cualquiera'
    //   console.log('')
    // });


    // // Crear Contenido
    // let enlacesSidebar = document.querySelector('#sidebar ul');
    // console.log(enlacesSidebar);
    // let a = document.createElement('a');
    // a.setAttribute('href', 'http://www.google.com');
    // let text = document.createTextNode('Entrada 6');
    // let li = document.createElement('li');
    // a.appendChild(text);
    // li.appendChild(a);
    // enlacesSidebar.appendChild(li);
    

    // // Clonar Nodo
    // let main = document.querySelector('main');
    // let nuevoMain = main.cloneNode(true);
    // let side = document.querySelector('aside');
    // side.insertBefore(nuevoMain, side.childNodes[5]);


    // // Controlando Insercciones
    // let aside = document.querySelector('aside');
    // let h2 = document.createElement('h2');
    // let text = document.createTextNode('Post mas visitado');
    // h2.appendChild(text);
    // aside.insertBefore(h2, aside.childNodes[0]);

    // let h2s = document.querySelectorAll('main h2');

    // h2s.forEach(h2 => {
    //   let li = document.createElement('li');
    //   let text = document.createTextNode(h2.firstChild.nodeValue);
    //   li.appendChild(text);
    //   aside.insertBefore(li, aside.childNodes[1]);
    // });


    // // Eliminar un Nodo
    //   // elimina primer articulo
    // let articulo = document.querySelector('main article');
    // console.log(articulo);
    // articulo.parentNode.removeChild(articulo);
    //   // elimina inicio, primer enlace
    // let nav = document.querySelector('#menu ul li a');
    // console.log(nav);
    // nav.parentNode.removeChild(nav);


    // // Remplazar nodo
    // let antiguoh2 = document.querySelector('main h2');
    // let nuevoh2 = document.querySelector('footer h2');
    // antiguoh2.parentNode.replaceChild(nuevoh2, antiguoh2);


    // let h2 = document.createElement('h2'),
    //    text = document.createTextNode('Hola Mundo');
    //    h2.appendChild(text);

    // let antiguoh22 = document.querySelectorAll('main h2')[1]; 
    // antiguoh22.parentNode.replaceChild(h2, antiguoh22);
    



    console.log('2');   
  });
})();
