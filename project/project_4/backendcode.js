let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt');
const userInpt =document.querySelector('#guessField');
const guessSlot =document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')
let prevGuess=[];
let NumGuess=1;
let playgame=true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInpt.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number");
    }else if(guess<1){
        alert("please enter A number more than 1")
    }else if(guess>100){
        alert('please enter a number more than 100')
    }else{
        prevGuess.push(guess)
        if(NumGuess==11){
            displayGuess(guess);
            displayMesssage(`Game over.Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess==randomNumber){
        displayMesssage('you guessed it right')
        endGame();
    }else if(guess<randomNumber){
        displayMesssage('number is low...')
    }else{
        displayMesssage('number is high...')
    }
}
function displayGuess(guess){
    userInpt.value='';
    guessSlot.innerHTML+=`${guess} `;
    NumGuess++;
    remaining.innerHTML=`${11-NumGuess} `;
}

function displayMesssage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInpt.value='';
    userInpt.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">start new Game</h2>`;
    startOver.appendChild(p);
    playgame=false;
    newGame();
};
function newGame(){
    const newgamebutton=document.querySelector('#newGame')
    newgamebutton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        NumGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-NumGuess} `;
        userInpt.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame=true;
    })
}