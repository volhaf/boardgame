'use strict';

const score0Element = document.querySelector('#score-0');
const score1Element = document.getElementById('score-1');
const current0Element = document.getElementById('current-0');
const current1Element = document.getElementById('current-1');


const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

//
diceElement.classList.add('hidden');

// хранит текушие очки
let currentScore = 0;

//roll the dice
btnRoll.addEventListener('click', function(){

    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if(diceNumber !== 1) {
        currentScore += diceNumber;
        current0Element.textContent = currentScore; // change later
    } else {

    }
    // diceElement.classList.remove('hidden');
    // diceElement.src = `dice${diceNumber}.png`;

});

