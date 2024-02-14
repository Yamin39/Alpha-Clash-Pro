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
  const alphabet = generateRandomWorld();
  // display generated alphabet
  document.getElementById("word-display").innerText = alphabet;
  // highlight the generated alphabet on keyboard layout
  setBgColor(alphabet);
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
document.addEventListener("keyup", () => {
  homeToPlay();
});
