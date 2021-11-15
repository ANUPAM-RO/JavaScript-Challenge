const handledrumClick = (event) =>{
    var innerHTML = event.target.innerHTML;
    animate(innerHTML);
    makeSound(innerHTML)
}
var drums = document.querySelectorAll(".drum")
for(let i =0 ; i<drums.length ; i++){
    drums[i].addEventListener("click", handledrumClick)
}
const animate = (key)=>{
    const currentKey = document.querySelector(`.${key}`)
    currentKey.classList.add('pressed')
    setTimeout(()=>{
        currentKey.classList.remove('pressed')
    },300)

}
const playMusic = (path) =>{
    const audio = new Audio(path);
    audio.play();

}
document.addEventListener("keypress",(event)=>{
    const triggerKey = event.key;
    makeSound(triggerKey)
    animate(triggerKey)

})
const makeSound = (key) =>{
    switch(key){
        case "w":
            playMusic("sounds/boom.wav");
            break;
        case "a":
            playMusic("sounds/clap.wav");
            break;
        case "s":
            playMusic("sounds/kick.wav");
            break;
        case "d":
            playMusic("sounds/hihat.wav");
            break;
        case "j":
                playMusic("sounds/openhat.wav");
                break;
        case "k":
                playMusic("sounds/ride.wav");
                break;
        case "l":
                playMusic("sounds/snare.wav");
                break;
        case "m":
                playMusic("sounds/tink.wav");
                break;
        case "n":
                playMusic("sounds/tom.wav");
                break;
        default:
            console.log("wrong button")
    }


}