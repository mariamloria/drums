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
            image: row.c[2]?.v
        }
        createImage(animal);
    });
    
    })
    
}
function createImage(animal){
    let div = document.createElement("div");
    let img = document.createElement("img");
    
    img.setAttribute("src", "assets/img/" + animal.image);
    div.classList = "flex animal " + animal.image.slice(0,1);

    div.appendChild(img);
    
    document.getElementById("animalscont").appendChild(div);

}
