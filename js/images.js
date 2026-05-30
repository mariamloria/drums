import * as sound from "./sound.js";

export function createImage(animal){
    let div = document.createElement("div");
    let img = document.createElement("img");
    
    img.setAttribute("src", "assets/img/" + animal.image);
    div.classList = "flex animal " + animal.image.slice(0,1);

    div.appendChild(img);

    div.addEventListener("click", () => {
        sound.playsound(animal);
    });
    
    document.getElementById("animalscont").appendChild(div);

}
