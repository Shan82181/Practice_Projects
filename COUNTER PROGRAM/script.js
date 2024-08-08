const screen = document.getElementById("screen");
const clickSound = document.getElementById('click-sound');
let count  = 0;
function increment(){
    clickSound.play();
    count = count + 1;
    screen.textContent = count;
}
function decrement(){
    clickSound.play();
    count = count - 1;
    screen.textContent = count;
}
function reset(){
    clickSound.play();
    count = 0;
    screen.textContent = count;
}