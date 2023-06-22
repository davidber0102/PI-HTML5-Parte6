
function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");
    lienzo.font="bold 24px verdana";
    lienzo.fillText("-Hola Visitantes-", 20, 20);
    lienzo.translate(100, 100);
    lienzo.scale(4, 2);
    lienzo.rotate(Math.PI);
    lienzo.fillText("-Hola Visitantes-", -200, -150);

   


     


}

window.addEventListener("load", comenzar,  false);