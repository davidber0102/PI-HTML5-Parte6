
function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");
    //var degradado= lienzo.createLinearGradient(0, 150, 500, 150); 
    var degradado= lienzo.createRadialGradient(250, 150, 100, 250, 150, 300); 
 
    degradado.addColorStop(0.1, "red");   
    degradado.addColorStop(1, "blue");
    lienzo.fillStyle = degradado;
    lienzo.fillRect(0, 0, 500, 300);
    lienzo.fillStyle = "black";
    lienzo.font = "40px Arial";
    lienzo.textAlign = "center";
    lienzo.fillText("¡Bienvenido!", 500/2, 500/2, );
    lienzo.text = "green";





  
    }



window.addEventListener("load", comenzar,   false);