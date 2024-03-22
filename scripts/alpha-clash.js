// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function handleKeyboardKeyUpEvent(){
    const playerPressed = event.key;
    // console.log('Player Prssed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlhabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlhabet);

    if(playerPressed === expectedAlhabet){
        // console.log("You get a point");
        continueGame();
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
    }
    else{
        // console.log("Oppps you missed. try again");
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
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
    showElementById('play-ground');
    continueGame();
}