// შექმნა მასივი

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


export function playsound(animal){
    let soundsrc ="assets/audio/" + animal.sound;
        let sound = new Audio(soundsrc);
            sound.play();
}



