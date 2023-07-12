$(document).ready(init);

let buttons = $(".btn");
let sounds = ["./sounds/green.mp3", "./sounds/red.mp3", "./sounds/yellow.mp3", "./sounds/blue.mp3"];
let colors = [];
let buttons_dic = {};

let index = 0;
let round = [];

function Button(sound){
    this.sound = sound;
    this.audio = new Audio(this.sound)
    this.play = function(){
        this.audio.play()
    }
}

function init(){
    $(document).keypress(startGame);
    $(document).click(startGame);

    initButtons()
}

function initButtons(){
    for(b of buttons){
        let atr = $(b).attr("id");
        buttons_dic[atr] = new Button(sounds[index])

        colors.push(atr);

        $(b).click(function () {
            let atrr = this.id;
            
            animateOnClick(this);
            checkItsCorrect(atrr)
        });

        index++;
    }
}

function checkItsCorrect(attr){
    if(attr == round[index])
        {
            index++;
            index = index % round.length;

            buttons_dic[attr].play();

            if(index == 0)
                setTimeout(function(){
                    round.push(getRandomColor());
                }, 500);
        }
    else{
        gameOver()
    }
    
}

function animateOnClick(id){
    $(id).addClass("pressed");
    setTimeout(function (){
        $(id).removeClass("pressed");
    }, 100)

}

function gameOver(){
    $(document).off();
    $(".btn").off();
    new Audio("./sounds/wrong.mp3").play();

    $("body").addClass("game-over")
    setTimeout(function (){
        $("body").removeClass("game-over")
        init()
    }, 200)
    
}

function getRandomColor(){
    let randomI = Math.random() * 4;
    randomI = Math.floor(randomI);
    
    let attribute = colors[randomI];
    buttons_dic[attribute].play();

    animateOnClick("#" + attribute);

    return attribute;
}

function startGame(e){
    $(document).off();
    round = []
    index = 0;

    round.push(getRandomColor())
}