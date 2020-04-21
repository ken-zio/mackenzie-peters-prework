"use strict";

// available artists
let artists = [
  "EMINEM",
  "KANYE",
  "JAYZ",
  "LILWAYNE",
  "DRAKE",
  "NICKIMINAJ",
  "TRAVISSCOTT",
];

// baselines
const maxTries = 10;
let guessed = [];
let currentRapperIndex;
let guessingArtist = [];
let guessesRemaining = 0;
let finished = false;
let wins = 0;

// FUNCTIONS:

function updateDisplay() {
  document.getElementById("totalWins").innerText = wins;
  let guessingArtistText = "";
  for (let i = 0; i < guessingArtist.length; i++) {
    guessingArtistText += guessingArtist[i];
  }
  document.getElementById("currentArtist").innerText = guessingArtistText;
  document.getElementById("guessesRemaining").innerText = guessesRemaining;
  document.getElementById("guessed").innerText = guessed;
}

function game() {
  guessesRemaining = maxTries;
  currentRapperIndex = Math.floor(Math.random() * artists.length);
  guessed = [];
  guessingArtist = [];
  document.getElementById("hangmanImage").src = "";
  for (let i = 0; i < artists[currentRapperIndex].length; i++) {
    guessingArtist.push("_");
  }
  document.getElementById("pressKeyTryAgain").style.cssText = "display: none";
  document.getElementById("loser-image").style.cssText = "display: none";
  document.getElementById("winner-image").style.cssText = "display: none";
  updateDisplay();
}

function hangmanUpdate() {
  document.getElementById("hangmanImage").src =
    "assets/images/" + (maxTries - guessesRemaining) + ".png";
}

function checkGuess(letter) {
  let positions = [];
  for (let i = 0; i < artists[currentRapperIndex].length; i++) {
    if (artists[currentRapperIndex][i] === letter) {
      positions.push(i);
    }
  }
  if (positions.length <= 0) {
    guessesRemaining--;
    hangmanUpdate();
  } else {
    for (let i = 0; i < positions.length; i++) {
      guessingArtist[positions[i]] = letter;
    }
  }
}

function checkWin() {
  if (guessingArtist.indexOf("_") === -1) {
    document.getElementById("winner-image").style.cssText = "display: block";
    document.getElementById("pressKeyTryAgain").style.cssText =
      "display: block";
    wins++;
    finished = true;
  }
}

function checkLoss() {
  if (guessesRemaining <= 0) {
    document.getElementById("loser-image").style.cssText = "display: block";
    document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
    finished = true;
  }
}

function guess(letter) {
  if (guessesRemaining > 0) {
    // Make sure we didn't use this letter yet
    if (guessed.indexOf(letter) === -1) {
      guessed.push(letter);
      checkGuess(letter);
    }
  }
}
// END FUNCTIONS

// EVENT LISTENERS
document.onkeydown = function (event) {
  if (finished) {
    game();
    finished = false;
  } else {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      guess(event.key.toUpperCase());
      updateDisplay();
      checkWin();
      checkLoss();
    }
  }
};
// END EVENT LISTENERS
