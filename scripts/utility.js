function hideElementById(elementId){
    const element = document.getElementById('home-screen');
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById('play-ground');
    element.classList.remove('hidden');
}

function GetARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}