import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/especies.js";

let seleccionados = [];

document.getElementById("btnRegistrar").addEventListener("click", () => {
    let animal = document.getElementById("animal").value;
    let edad = document.getElementById("edad").value;
    let previewElement = document.getElementById("preview");
    let imagenSrcBg = previewElement.style.backgroundImage;
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length-2).value;
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
    if(animal && edad && comentario){
        seleccionados.push(nuevoAnimal);
        /* animal.selectedIndex = 0
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
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/imgs/${p.getNombre}" alt="Card image cap">
            <div class="card-body">
                <audio controls>
                    <source src="./assets/sounds/${p.getSonido}" type="audio/mp3">
                </audio>
            </div>
        </div>
        `
    });
}