
function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");
    lienzo.fillStyle="red";
    lienzo.fillRect(400, 20, 300, 100);
    lienzo.globalCompositeOperation='source-over';    
    lienzo.fillStyle="#ffffff";
    lienzo.font="bold 80px serif";
    lienzo.textAlign="center";
    lienzo.textBaseline="middle";
    lienzo.fillText("Hola Visitantes", 500, 40);

    var imagen = new Image();
    imagen.src='C:\David\Cursos\HTML 5\Ejercicio Video25\imh\img01.jpg';


}

window.addEventListener("load", comenzar,  false);