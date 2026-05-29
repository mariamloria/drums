let sheetid = "1kNTGU5gjaT1vFuD2wBzjPkTgx0jlC1r_BjuLV4BVsRQ";
let base = `https://docs.google.com/spreadsheets/d/${sheetid}/gviz/tq`;
let sheetname = "about";
let query = encodeURIComponent("Select *");
let url = `${base}?sheet=${sheetname}&tq=${query}`;

document.addEventListener("DOMContentLoaded", init);

function init(){
    // console.log("ready");
    fetch(url)
    .then(res =>res.text())
    .then(rep =>{
        const jsData = JSON.parse(rep.substring(47).slice(0,-2));
    //     console.log(jsData);
        
    // jsData.table.rows.forEach(element =>{
    //     document.getElementById("projectnumber").innerHTML = jsData.table.rows.length
    let rows = jsData.table.rows;

    rows.forEach(row => {
        let animal ={
            name: row.c[0]?.v,
            about: row.c[1]?.v,
            image: row.c[2]?.v,
            sound: row.c[3]?.v
        }
        createAnimal(animal);
    });
    
    })
    
}

function createAnimal(animal){
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

    article.addEventListener("click", function(){
        playsound(animal);
    });

    document.getElementById("aboutanimalscont").appendChild(article);
}



