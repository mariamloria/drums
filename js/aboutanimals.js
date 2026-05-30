
export function createAnimal(animal){
    let article = document.createElement("article");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let section = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    img.setAttribute("src","assets/img/" + animal.image);
    div.appendChild(img);
    h2.textContent = animal.name;
    p.textContent = animal.about;
    section.appendChild(h2);
    section.appendChild(p);

    article.appendChild(div);
    article.appendChild(section);
    article.classList = "flex";

    document.getElementById("aboutanimalscont").appendChild(article);
}



