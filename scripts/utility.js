function hideElementById(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

function showElementById(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

function generateRandomWord() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const index = Math.round(Math.random() * 25);
  return alphabet[index];
}

function setBgColorById(elementId) {
  document.getElementById(elementId).style.backgroundColor = "#FFA500";
}

function removeBgColorById(elementId) {
  document.getElementById(elementId).style.backgroundColor = "#FFF";
}

function gameOver(expectedInput) {
  hideElementById("playground");
  showElementById("result");
  removeBgColorById(expectedInput);
  document.getElementById("life-display").innerText = "5";
  document.getElementById("score-display").innerText = "0";
}
