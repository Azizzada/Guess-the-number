"use strict";

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random(1) * 20 + 1);

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // WHEN NO INPUT
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    // WHEN WIN
    displayMessage("🎉 Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    } else {
      document.querySelector(".highscore").textContent = highScore;
    }
    // } else if (guess > secretNumber) {
    //   // WHEN HIGH
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "📈 Too high ";
    //     score -= 1;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "💥 You lost the game!";
    //     document.querySelector(".score").textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   // WHEN LOW
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "📉 Too low ";
    //     score -= 1;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "💥 You lost the game!";
    //     document.querySelector(".score").textContent = 0;
    //   }

    // SCORE IS NOT EQUAL ALSO REFACTORY ABOVE CODE
  } else if (score !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage("📈 Too high ")
        : displayMessage("📉 Too low ");
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    secretNumber = Math.trunc(Math.random(1) * 20 + 1);
  });
});
