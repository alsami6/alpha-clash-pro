// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function handleKeyboardKeyUpEvent(){
    const playerPressed = event.key;
    // console.log('Player ', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        // console.log("You get a point");
        continueGame();
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
    }
    else{
        // console.log("oh you missed. try again");
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
         if(newLife === 0){
            console.log("game over");
            gameOver();
         }
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
    const alphabet = GetARandomAlphabet();
    // console.log('Your random alphabet is', alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValuebyId('current-score');
    setTextElementValueById('last-score', lastScore);
}