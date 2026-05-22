let bellboyname = "givi";
let bellboyage = 44;
let bellboyexperience = 20;

let bellboy = {
    name: "givi",
    age: 44,
    experience: 20,
    gamodzaxeba: function(){
        alert("movedi");
    }
}
// let bellboy2 = {
//     name: "maxo",
//     age: 22,
//     experience: 2,
//     gamodzaxeba: function(){
//         alert("movedi");
//     }
// }
// console.log(bellboy.name, bellboy2.name);

// let damlagebeli = {
//     name: "დალი",
//     experience: 20,
//     favouriteRoom: ["საძინებელი","ლობი","მისაღები"]
// }
// console.log(damlagebeli.name + "ს უყვარს შემდეგი ოთახების დალაგება: " + damlagebeli.favouriteRoom[0] + ", " + damlagebeli.favouriteRoom[1] + ", "+ damlagebeli.favouriteRoom[2]);

// console.log(bellboy.gamodzaxeba());


// class(კონსტრუქტორი ფუნქცია)
function Bellboy(firstname, bellboyage, bellboyexperience){
    this.name = firstname;
    this.age = bellboyage;
    this.experience = bellboyexperience;
}
let bellboy2 = new Bellboy("Luka",34,1)

// console.log(bellboy2)

// დავალება

function Housekeeper(firstname,housekeeperage,housekeeperexperience){
    this.name = firstname;
    this.age = housekeeperage;
    this.experience = housekeeperexperience;
}
let housekeeper1 = new Housekeeper("Dali", 45, 20);
let housekeeper2 = new Housekeeper("Miranda", 56, 21);
// console.log(housekeeper1);
// console.log(housekeeper2);


document.addEventListener("keydown", function(a){
    // console.log(a.key)
})