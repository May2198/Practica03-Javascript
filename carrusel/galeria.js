var imagenes=['D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban1.jpg', 
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban2.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban3.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban4.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban5.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban6.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban7.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban8.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban9.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban10.jpg'];
function reinicio(){
var imagenes=['D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban1.jpg', 
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban2.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban3.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban4.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban5.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban6.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban7.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban8.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban9.jpg',
              'D:/Archivos%20Universidad/Hypermedial/carrusel/images/ban10.jpg'];
}

var num=0;

    function aleatorio(){
        num=0;
        reinicio();
        for(i=0;i<5;i++){
            var aleimagen=  Math.floor((Math.random()*9)+1);  
            aux=imagenes[i];
            imagenes[i]=imagenes[aleimagen];
            imagenes[aleimagen]=aux;

        }
        deshabilitar();

    }
              

function deshabilitar(){
    var boton1=document.getElementById("boton1");
    var boton3=document.getElementById("boton3");
    boton1.disabled=true;
    boton3.disabled=false
}
function habilitar(){

}
function adelante(){
    boton1.disabled=false
    num++;
    if(num==4){
    boton3.disabled=true
    }

    foto.src=imagenes[num];
}

function atras(){
    boton3.disabled=false

    num--;
    if(num==0)
    boton1.disabled=true  
    //num=5;

    foto.src=imagenes[num];   
    
}