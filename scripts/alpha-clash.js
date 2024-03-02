function play(){
    const homeSction = document.getElementById('home')
    homeSction.classList.add('hidden');
    const playgroundsection = document.getElementById('play-ground');
    playgroundsection.classList.remove('hidden')
}

function continueGame(){
    const alphabet = getElementById();
    console.log("Your random alphabet", alphabet)
    
    const currentAlphabetElement = document.getElementById('current-aplhabet');
    currentAlphabetElement.innerText = alphabet;
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqstuvzxyz'
    const alphabets = alphabetString.split();

    const randomNumber = Math.round()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets [index];
    return alphabet
}