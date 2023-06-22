
function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");   

    //se genera el circulo de la cara
    lienzo.arc(200, 150, 100, 0, Math.PI*2, false);
    lienzo.stroke();
    // se genera la sonrisa de la cara
    lienzo.lineWidth =10;
    lienzo.lineCap="round";
    lienzo.beginPath();
    lienzo.arc(200, 170, 60, 0, Math.PI, false);
    lienzo.stroke();
    // se genera la nariz de la cara
    lienzo.lineWidth =5;
    lienzo.lineJoin = 'miter';
    lienzo.miterLimit =10;
    lienzo.beginPath();
    lienzo.moveTo(195, 135);
    lienzo.lineTo(215, 155);
    lienzo.lineTo(195, 155);
    lienzo.stroke();
    // se genera el relleno de los ojos de la cara
    lienzo.lineWidth =3;
    lienzo.beginPath();
    lienzo.arc(175, 110, 7, 0, Math.PI*2, false);
    lienzo.arc(225, 110, 7, 0, Math.PI*2, false);
    lienzo.fill();
    // se genera los ojos de la cara
    lienzo.beginPath();
    lienzo.arc(168, 106, 15, 0, Math.PI*2, false);
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.arc(232, 106, 15, 0, Math.PI*2, false);
    lienzo.stroke();



 

}

window.addEventListener("load", comenzar,  false);