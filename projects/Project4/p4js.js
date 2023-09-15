let randint = parseInt(Math.random()*100+1)
console.log(randint);

const submit = document.querySelector('#sub')
const userinp = document.querySelector('#inp')
const guessSlot = document.querySelector('.pguess')
const guess_rem = document.querySelector('.tguess')
const loworhi = document.querySelector('.loworhi')
const startover = document.querySelector('.result')
 
const  p = document.createElement('p')
// let prevguess = []
let numgues = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const gues = parseInt(userinp.value)
        // console.log(gues);
        validateGuess(gues)
    })
}
function validateGuess(gues){
    if (isNaN(gues)) {
        alert('please enter a valid number')
    }
    else if(gues<0){
        alert('please enter a number greater or equal to zero')
    }
    else if(gues>100){
        alert('please enter a number lesser or equal to zero')
    }
    else{
        // prevguess.push(gues)
        if(numgues === 10){
            displayGuess(gues)
            displayMessage(`Game over. random number was ${randint}`)
            endGame()
        }
        else{
            displayGuess(gues)
            checkGuess(gues)
        }
    }
}
function checkGuess(gues){
    if(gues === randint){
        displayMessage('You have won the game')
        endGame()
    }
    else if(gues<randint){
        displayMessage('Your guess is lower')
    }
    else if(gues>randint){
        displayMessage('Your guess is higher')
    }
}
function displayGuess(gues){
    userinp.value = ''
    guessSlot.innerHTML += `${gues}, `
    numgues++ 
    guess_rem.innerHTML = `${11-numgues}`
}
function displayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
  userinp.value = '';
  userinp.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randint = parseInt(Math.random() * 100 + 1);
    // prevguess = [];
    numgues = 1;
    guessSlot.innerHTML = '';
    guess_rem.innerHTML = `${11 - numgues} `;
    userinp.removeAttribute('disabled');
    startover.removeChild(p);
    playGame = true;
  }); 
}



