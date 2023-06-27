
var y=300;
var estado="bajando";
var arriba=y;
var horizintal=0;

function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");
 
    setInterval(animation, 30);    
}

function animation(){
    if(y<850 && estado=="bajando"){
    lienzo.clearRect(0,0,1200, 900);
    lienzo.beginPath();
    lienzo.arc(500+horizintal,y,40,0,Math.PI*2, false);
    lienzo.fill();
    y+=50; 
    horizintal+=4;
    }  
if(y==850){
    arriba+=50;
    estado="subiendo";
}
    if(y>=arriba && estado=="subiendo"){ 
    lienzo.clearRect(0,0,1200, 900);
    lienzo.beginPath();
    lienzo.arc(500+horizintal,y,40,0,Math.PI*2, false);
    lienzo.fill();
    y-=50;
    horizintal+=4;
    }   

    if(y==arriba){
        estado="bajando";

    }
        

}

window.addEventListener("load", comenzar,  false);