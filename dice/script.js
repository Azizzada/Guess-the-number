"use strict";

const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const currentScore0Element = document.querySelector("#current--0");
const currentScore1Element = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
score0Element.textContent = 0;
score1Element.textContent = 0;
dice.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function () {
  const diceRoll = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove("hidden");
  dice.src = `dice-${diceRoll}.png`;
  if (diceRoll !== 1) {
    currentScore += diceRoll;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  // if (scores[activePlayer] >= 100) {
  //   console.log("winner");
  // }
  // scores[1] = scores[1] + currentScore
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();
});
