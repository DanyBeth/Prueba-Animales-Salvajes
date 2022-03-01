import Animales from "./consulta.js";
import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/especies.js";

//2.Acá se genera la interacción del botón "ver imágenes"

const {animales} = await Animales.getData();
console.log(animales);

document.getElementById("animal").addEventListener("click", async() => {
    const animalSelected = document.getElementById("animal").value;
    const imagenTemplate = animales.find(p => p.name == animalSelected).imagen;
    document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/${imagenTemplate})`;
    
    
})



let seleccionados = [];

document.getElementById("btnRegistrar").addEventListener("click", () => {
    let animal = document.getElementById("animal").value;
    let edad = document.getElementById("edad").value;
    let imgSrc = animales.find(p => p.name == animal).imagen;
    console.log(imgSrc);
    let comentarios = document.getElementById("comentarios").value;
    let sonido = animales.find(p => p.name == animal).sonido;
    console.log(sonido);

    let nuevoAnimal;

    switch (animal) {
        case "Leon":
            nuevoAnimal = new Leon(animal, edad, imgSrc, comentarios, sonido)
            break;
        case "Lobo":
            nuevoAnimal = new Lobo(animal, edad, imgSrc, comentarios, sonido)
            break;
        case "Oso":
            nuevoAnimal = new Oso(animal, edad, imgSrc, comentarios, sonido)
            break;
        case "Serpiente":
            nuevoAnimal = new Serpiente(animal, edad, imgSrc, comentarios, sonido)
            break;
        case "Aguila":
            nuevoAnimal = new Aguila(animal, edad, imgSrc, comentarios, sonido)
            break;
    }
    if(animal && edad && comentarios){
        seleccionados.push(nuevoAnimal);
       /*  animal.selectedIndex = 0
        edad.selectedIndex = 0
        previewElement.style.backgroundImage = "none"
        imagenSrcBg = previewElement.style.backgroundColor = "#f0f0f0"
        comentario = "" */
        reloadTable();
    } else {
        alert("Faltan datos por llenar");
    }
});


const reloadTable = () => {
    const animalesTemplate = document.getElementById("Animales");
    animalesTemplate.innerHTML = "";
    seleccionados.forEach( (p) => {
        animalesTemplate.innerHTML += `
        <div class="card bg-secondary m-1" style="width: 8rem; length:10rem ">
            <img class="card-img-top img-fluid fotosAnimales" src="./assets/imgs/${p.getImg()}" alt="Card image cap">
            <div class="card-body">
              <img class="iconoAudio" src="./assets/imgs/audio.svg" alt="icono audio" value="PLAY" onclick="play()">
              <audio id="audio" src="./assets/sounds/${p.getSonido()}"></audio>
            </div>
        </div>
        `
    });
}

console.log(seleccionados);