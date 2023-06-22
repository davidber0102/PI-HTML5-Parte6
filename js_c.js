
function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");
    
    lienzo.beginPath();
    lienzo.arc(200, 200, 150, 0, Math.PI, true);
    // lienzo.closePath();
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(250, 250);
    lienzo.quadraticCurveTo(100, 250, 350, 350);
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(600, 50);
    lienzo.bezierCurveTo(400, 200, 750, 300, 550, 395);
    lienzo.stroke();

}

window.addEventListener("load", comenzar,   false);