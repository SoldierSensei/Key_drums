function buttonAnimation(currkey){
    var activeButton = document.querySelector("."+currkey); 
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed"); 
    },100);
}
function handleCilck(){
    
    var buttonsI = this.innerHTML;
    makesound(buttonsI);
    buttonAnimation(buttonsI); 
}
function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play(); 
        case "k":
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
        case "l":
            var snare= new Audio("./sounds/snare.mp3");
            snare.play();
        
        default:
            console.log(this.innerHTML);
            break;
    }
}
//detecting button pressed
var buttons =  document.querySelectorAll(".drum").length;
for(var i=0;i<buttons;++i){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleCilck);
}
//keypressed
document.addEventListener("keydown",function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
});
//var audio = new Audio("./sounds/tom-1.mp3");
//audio.play();