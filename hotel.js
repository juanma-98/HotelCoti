function Img1(){
    const imagen=document.getElementById("habitacion");
    Image.src
    imagen.src = "./img/pieza1.jpg";
    
}

function Img2(){
    const imagen=document.getElementById("habitacion");
    imagen.src = "./img/pieza2.jpg";
}

function cotizar(){
    const nrPerso=document.getElementById("nrPerso").value;
    const nrDia=document.getElementById("nrDia").value;
    const valoPer=document.getElementById("valoPer").value;
    const ntotal = Number(nrPerso)*Number(nrDia)*Number(valoPer);
    document.getElementById("resultado").textcontext=ntotal;
    alert("scrapt")
}   