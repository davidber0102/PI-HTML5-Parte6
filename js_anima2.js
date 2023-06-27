
var y=300;
var estado="bajando";
var arriba=y;
var horizintal=0;

function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d"); 
    window.addEventListener("mousemove", animation, false); 
}

function animation(e){   
    lienzo.clearRect(0,0,1200,900);
    var xdelraton=e.clientX;
    var ydelraton=e.clientY;
    var xcentro=550;
    var ycentro=325;
    var angulo=Math.atan2(xdelraton-xcentro, ydelraton-ycentro);
    var x=xcentro+Math.round(Math.sin(angulo)*10);
    var y=ycentro+Math.round(Math.cos(angulo)*10);
    lienzo.beginPath();
    lienzo.arc(xcentro, ycentro,20,0,Math.PI*2,false);
    lienzo.moveTo(600,325);
    lienzo.arc(600,ycentro,20,0,Math.PI*2,false);
    lienzo.stroke();   

    lienzo.beginPath();
    lienzo.arc(x,y,10,0,Math.PI*2,false);
    lienzo.moveTo(x,y);
    lienzo.arc(x+50,y,10,0,Math.PI*2,false);
    lienzo.fill();

}

window.addEventListener("load", comenzar,  false);