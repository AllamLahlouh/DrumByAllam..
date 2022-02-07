function playSound(char) {
    switch (char) {
        case "w":
            const musicW = new Audio("sounds/s1.mp3");
            musicW.play();
            break;
        case "a":
            const musicA = new Audio("sounds/s2.mp3");
            musicA.play();
            console.log(char);
            break;
        case "s":
            const musicS = new Audio("sounds/s3.mp3");
            musicS.play();
            console.log(char);
            break;
        case "d":
            const musicD = new Audio("sounds/s4.mp3");
            musicD.play();
            console.log(char);
            break;
        case "j":
            const musicJ = new Audio("sounds/s5.mp3");
            musicJ.play();
            console.log(char);
            break;
        case "k":
            const musicK = new Audio("sounds/s6.mp3");
            musicK.play();
            console.log(char);
            break;
        case "l":
            const musicL = new Audio("sounds/s7.mp3");
            musicL.play();
            console.log(char);
            break;
        default:
            console.log('Wrong Input!');
            break;
    }
}

function keyAnimation(char) {
    var pressedKey = document.getElementById(char);
    pressedKey.classList.add("clickedButton");
    setTimeout(function()
        {pressedKey.classList.remove("clickedButton");}, 100);
}

var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
    var getA = buttons[i].getAttribute('id');
    buttons[i].addEventListener("click", function( ) {
        var buttoninnerHTHML = this.getAttribute('id');
        playSound(buttoninnerHTHML);
        keyAnimation(buttoninnerHTHML);
    })
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    var B = document.getElementById(event.key);
    keyAnimation(event.key);
    console.log(B);
})


