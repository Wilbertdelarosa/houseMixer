
var numberOfButtons = document.querySelectorAll(".beat").length;

//Detecting buttton press
for (var i = 0; i < numberOfButtons ; i++){
    document.querySelectorAll(".beat")[i].addEventListener("click", function(){ 
        var buttonKey = this.innerHTML; 
        keyandSound(buttonKey); 
        buttonAnimation(buttonKey);
    });
}
    
document.addEventListener("keypress", function(event){ 
    keyandSound(event.key); 
    buttonAnimation(event.key);
});


function keyandSound(key){
    switch (key) {
        case "a":
            var beatA = new Audio('house-samples/A.WAV');
            beatA.play();
            break;

        case "b":
            var beatB = new Audio('house-samples/B.WAV');
            beatB.play();
        break;

        case "c":
            var beatC = new Audio('house-samples/C.WAV');
            beatC.play();
        break;

        case "d":
            var beatD = new Audio('house-samples/D.WAV');
            beatD.play();
        break;

        case "e":
            var beatE = new Audio('house-samples/E.WAV');
            beatE.play();
        break;

        case "f":
            var beatF = new Audio('house-samples/F.WAV');
            beatF.play();
        break;

        case "g":
            var beatF = new Audio('house-samples/G.WAV');
            beatF.play();
        break;

        case "h":
            var beatH = new Audio('house-samples/H.WAV');
            beatH.play();
        break;

        case "i":
            var beatI = new Audio('house-samples/I.WAV');
            beatI.play();
        break;

        case "j":
            var beatJ = new Audio('house-samples/J.WAV');
            beatJ.play();
        break;

        case "k":
            var beatK = new Audio('house-samples/K.WAV');
            beatK.play();
        break;

        case "l":
            var beatL = new Audio('house-samples/A.WAV');
            beatL.play();
        break;
    
        default:
            console.log(buttonKey);
    }
}


function buttonAnimation(keyPressedorClicked){

    var buttonPR = document.querySelector("." + keyPressedorClicked); 

    buttonPR.classList.add("pressed"); 

    setTimeout(function(){ 
       buttonPR.classList.remove("pressed"); 
    }, 100);
    
}