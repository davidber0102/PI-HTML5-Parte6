
function comenzar(){
    var elemento =document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");
    
    /*
    --sobreosciones
    lienzo.fillStyle="red";
    lienzo.fillRect(400, 20, 300, 100);
    lienzo.globalCompositeOperation='source-over';    
    lienzo.fillStyle="#ffffff";
    lienzo.font="bold 80px serif";
    lienzo.textAlign="center";
    lienzo.textBaseline="middle";
    lienzo.fillText("Hola Visitantes", 500, 40);
    
    --cargar imagen
    var imagen=new Image();
    imagen.src="img03.jpg";
    imagen.addEventListener("load", function(){lienzo.drawImage(imagen,50,10,75,75,0,0,300,300)},false);
    */

    var imagen=new Image();
    imagen.src="imh/img03.jpg";
    imagen.addEventListener("load", manipilarimagen, false);
}

function manipilarimagen(e){
    imagen=e.target;
    lienzo.drawImage(imagen,0,0);
    var info_img=lienzo.getImageData(0,0,195,195);
    var posicion;

    for (x=0;x<=195;x++){
        for(y=0;y<=195;y++){
            posicion=(info_img.width*4*y)+(x*4);

            info_img.data[posicion]=255-info_img.data[posicion];
            info_img.data[posicion+1]=255-info_img.data[posicion+1];
            info_img.data[posicion+2]=255-info_img.data[posicion+2];
        }

    }

    lienzo.putImageData(info_img,0,0);
    // video 36 munuto 18


}

window.addEventListener("load", comenzar,  false);