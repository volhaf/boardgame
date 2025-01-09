'use strict';

const score0Element = document.querySelector('#score-0');
const score1Element = document.getElementById('score-1');
const current0Element = document.getElementById('current-0');
const current1Element = document.getElementById('current-1');


const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const player0Element = document.querySelector('.player-0');
const player1Element = document.querySelector('.player-1');

//
diceElement.classList.add('hidden');

// хранит текушие очки
// const totalScores = [0,0];
let currentScore = 0;
let activePlayer = 0;

//roll the dice
btnRoll.addEventListener('click', function(){

    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if(diceNumber !== 1) {
        currentScore += diceNumber;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
        currentScore = 0;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        current0Element.textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle('player-active');
        player1Element.classList.toggle('player-active');

    }

});

