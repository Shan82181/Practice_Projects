function startGame() {
    document.getElementById('play-button').style.display = 'none';
    document.getElementById('box').style.display = 'block'; 
}
const userHand = document.getElementById('user-hand');
const computerHand = document.getElementById('computer-hand');


function run(userInput){
    const choices = ["Rock","Paper","Scissor"];
    const computerChoices = choices[Math.floor(Math.random()*3)];
    //document.getElementById('user-hand').src = `images/${userInput}R.png`;
    //document.getElementById('computer-hand').src = `images/${computerChoices}L.png`;

    //const userHand = document.getElementById('user-hand');
    //const computerHand = document.getElementById('computer-hand');

    userHand.src = `images/${userInput} R.png`;
    computerHand.src = `images/${computerChoices} L.png`;

    userHand.classList.add('animate');
    computerHand.classList.add('animate');
    shakeSound.currentTime = 0;
    shakeSound.play();

    setTimeout(() => {
      userHand.classList.remove('animate');
      computerHand.classList.remove('animate');
      shakeSound.pause();
    }, 1000);
    
}   
