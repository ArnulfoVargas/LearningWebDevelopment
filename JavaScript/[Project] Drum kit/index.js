let htmlDrums = document.getElementsByClassName("drum");

document.addEventListener("keypress", function(e){
    pressHandler(e.key)
})

function Drum(sound){
    this.sound = sound;
    this.play = function(){
        new Audio(this.sound).play()
    }
}

for (let drum of htmlDrums){
    drum.addEventListener("click", function () {
        pressHandler(this.textContent)
    });
}

function pressHandler(keyPressed){

    animation(keyPressed)
    switch(keyPressed){
        case "w":
            new Drum("./sounds/tom-1.mp3").play();
            break;
        case "a":
            new Drum("./sounds/tom-2.mp3").play()
            break;
        case "s":
            new Drum("./sounds/tom-3.mp3").play()
            break;
        case "d":
            new Drum("./sounds/tom-4.mp3").play()
            break;
        case "j":
            new Drum("./sounds/crash.mp3").play()
            break;
        case "k":
            new Drum("./sounds/snare.mp3").play()
            break;
        case "l":
            new Drum("./sounds/kick-bass.mp3").play()
            break;
    }
}

function animation(key){
    let button = document.getElementsByClassName(key)[0];
    button.classList.add("pressed");
    setTimeout(function () {button.classList.remove('pressed')}, 100);
}