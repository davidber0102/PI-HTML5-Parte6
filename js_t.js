
function comenzar(){
    var elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");
    lienzo.beginPath();
    lienzo.moveTo(50,200);
    lienzo.lineTo(250,200);
    lienzo.lineTo(100,100);
    lienzo.lineTo(50,200);
    lienzo.clip();
    //lienzo.closePath();

    lienzo.beginPath();
    for (i=0; i<250; i+=10) {
           lienzo.moveTo(0, i);
           lienzo.lineTo(200, i);
        }

    lienzo.stroke();
    //lienzo.fill();


    




 
    
    }



window.addEventListener("load", comenzar,   false);