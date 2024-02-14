// adding tailwind custom color classes
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "primary-dark": "#010313",
        golden: "#FFA500",
      },
    },
  },
};

function continueGame() {
  // generate a random alphabet
  const alphabet = generateRandomWord();
  // display generated alphabet
  document.getElementById("word-display").innerText = alphabet;
  // highlight the generated alphabet on keyboard layout
  setBgColorById(alphabet);
}

function homeToPlay() {
  // hide the home section
  hideElementById("home-screen");
  // show the playground section
  showElementById("playground");
  // continue game
  continueGame();
}

// go home section to playground by clicking enter on keyboard
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && document.getElementById("home-screen").classList.contains("hidden") === false) {
    homeToPlay();
  }
});

// check player pressed wrong key or right key
function checkPlayerInput(playerInput) {
  const expectedInput = document.getElementById("word-display").innerText.toLowerCase();
  // leave game
  if (playerInput === "escape") {
    gameOver(expectedInput);
  }
  if (playerInput === expectedInput) {
    //update score
    //1, get current score
    const currentScore = document.getElementById("score-display");
    //2, increase score
    const updatedScore = parseInt(currentScore.innerText) + 1;
    //3, display updated score
    currentScore.innerText = updatedScore;
    // show score in result ui
    document.getElementById("result-display").innerText = updatedScore;
    // start a new round
    removeBgColorById(expectedInput);
    continueGame();
  } else {
    const currentLife = document.getElementById("life-display");
    const updatedLife = parseInt(currentLife.innerText) - 1;
    currentLife.innerText = updatedLife;
    // game over
    if (updatedLife <= 0) {
      gameOver(expectedInput);
    }
  }
}

// keyboard
document.addEventListener("keyup", (e) => {
  const playerPress = e.key.toLowerCase();
  checkPlayerInput(playerPress);
});

// click
document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "kbd") {
    const playerClick = e.target.id;
    checkPlayerInput(playerClick);
  }
});

// play again
document.getElementById("play-again-btn").addEventListener("click", () => {
  // reset result
  document.getElementById("result-display").innerText = "0";
  hideElementById("result");
  showElementById("playground");
  continueGame();
});

document.getElementById("leave-btn").addEventListener("click", () => {
  const expectedInput = document.getElementById("word-display").innerText.toLowerCase();
  gameOver(expectedInput);
});

document.getElementById("go-home").addEventListener("click", () => {
  document.getElementById("life-display").innerText = "5";
  document.getElementById("score-display").innerText = "0";
  const expectedInput = document.getElementById("word-display").innerText.toLowerCase();
  removeBgColorById(expectedInput);
  hideElementById("playground");
  showElementById("home-screen");
});
