
function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");
    lienzo.shadowColor="rgba(0,0,0,0.5)";
    lienzo.shadowOffsetX=10;
    lienzo.shadowOffsetY=-5;
    lienzo.shadowBlur=5;
    lienzo.font="bold 48px verdana";
    lienzo.textAlign="start";
    lienzo.textBaseline="bottom";
    lienzo.fillText(" --Hola Visitantes-- ", 100, 100);
    
    lienzo.moveTo(101, 101);
    lienzo.lineTo(535, 101);
    lienzo.stroke();

    var dimensiones=lienzo.measureText(" --Hola Visitantes-- ");
    lienzo.strokeRect(95,51,dimensiones.width+5,58);


     


}

window.addEventListener("load", comenzar,  false);