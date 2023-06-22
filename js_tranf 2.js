
function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");
    lienzo.transform(2, 0, 0, 1, 10, 10)
    lienzo.font="bold 24px verdana";
    lienzo.fillText("-Hola Visitantes-", 30, 30);
    lienzo.setTransform(1, 0, 0, 5, 20, 30);
    lienzo.font="bold 24px verdana";
    lienzo.fillText("-Hola Visitantes-", 50, 50);

    lienzo.font="bold 20px verdana";
    lienzo.save();
    lienzo.fillText("-Seguimos-", 18, 25);
    lienzo.translate(30, 70);
    lienzo.rotate(Math.PI/180*55);
    lienzo.fillText("-Visitantes-", 0, 0);
    lienzo.font="bold 10px verdana";
    //lienzo.rotate(-Math.PI/180*55);
    lienzo.restore();
    lienzo.translate(300, 400);
    lienzo.scale(2, 2);
    lienzo.fillText("Visitantes II-", 20, 10);


 
   


     


}

window.addEventListener("load", comenzar,  false);