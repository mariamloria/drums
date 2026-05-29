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
document.addEventListener("keydown", function(a){
    let soundsrc;
    if(a.key == "d" || a.key == "D"){
            soundsrc = "assets/audio/dog.wav";
            
        }else if(a.key == "p" || a.key == "P"){
            soundsrc = "assets/audio/puppy.wav";
            
        }else if(a.key == "l" || a.key == "L"){
            soundsrc = "assets/audio/lion.wav";
            
        }else if(a.key == "v" || a.key == "V"){
            soundsrc = "assets/audio/saddonkey.wav";
            
        }else if(a.key == "c" || a.key == "C"){
            soundsrc = "assets/audio/caw.wav";
        
        }else if(a.key == "k" || a.key == "K"){
            soundsrc= "assets/audio/cat.wav";
        
        }else if(a.key == "a" || a.key == "A"){
            soundsrc = "assets/audio/angrycat.wav";

        }
        let sound = new Audio(soundsrc);
            sound.play();

})


function playsound(animal){
    let soundsrc ="assets/audio/" + animal.sound;
        let sound = new Audio(soundsrc);
            sound.play();
}

function createAnimal(animal){

    let div = document.createElement("div");
    let img = document.createElement("img");
    
    img.setAttribute("src", "assets/img/" + animal.image);
    div.classList = "flex animal " + animal.image.slice(0,1);

    div.appendChild(img);


    div.addEventListener("click", function(){

        playsound(animal);

    });

    document.getElementById("animalscont").appendChild(div);
}