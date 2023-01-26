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

let currentScore;
let activePlayer;
let scores;
let playing;

function start() {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  currentScore0Element.textContent = 0;
  currentScore1Element.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;

  player1Element.classList.remove("player--active");
  player0Element.classList.add("player--active");
  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");
  dice.classList.add("hidden");
}

start();

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function () {
  if (playing) {
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
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", start);
