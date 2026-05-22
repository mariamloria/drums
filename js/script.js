// შექმნა მასივი
let animals = document.querySelectorAll(".animal");

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


function playsound(letter){
    let soundsrc;
    if(letter == "D"){
            soundsrc = "assets/audio/dog.wav";
            
        }else if(letter == "P"){
            soundsrc = "assets/audio/puppy.wav";
            
        }else if(letter == "L"){
            soundsrc = "assets/audio/lion.wav";
            
        }else if(letter == "V"){
            soundsrc = "assets/audio/saddonkey.wav";
            
        }else if(letter == "C"){
            soundsrc = "assets/audio/caw.wav";
        
        }else if(letter == "K"){
            soundsrc= "assets/audio/cat.wav";
        
        }else if(letter == "A"){
            soundsrc = "assets/audio/angrycat.wav";

        }
        let sound = new Audio(soundsrc);
            sound.play();
}

for(let i=0; i< animals.length; i++){
    animals[i].addEventListener("click", function(){
        playsound(animals[i].innerHTML); 

        // let catsound = new Audio("assets/audio/cat.wav");
        // catsound.play();
    })
}
