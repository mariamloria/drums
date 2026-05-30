import * as aboutanimals from "./aboutanimals.js";
import * as images from "./images.js";


 export let sheetid = "1kNTGU5gjaT1vFuD2wBzjPkTgx0jlC1r_BjuLV4BVsRQ";
 export let base = `https://docs.google.com/spreadsheets/d/${sheetid}/gviz/tq`;
 export let sheetname = "about";
 export let query = encodeURIComponent("Select *");
 export let url = `${base}?sheet=${sheetname}&tq=${query}`;

document.addEventListener("DOMContentLoaded", init);

export function init(){
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

        if (document.getElementById("aboutanimalscont")) {
          aboutanimals.createAnimal(animal);
      }
        if (document.getElementById("animalscont")) {
          images.createImage(animal);
      }
    });
    
    })
    
}