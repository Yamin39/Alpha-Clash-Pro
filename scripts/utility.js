function hideElementById(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

function showElementById(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

function generateRandomWorld() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const index = Math.round(Math.random() * 25);
  return alphabet[index];
}

function setBgColor(elementId) {
  document.getElementById(elementId).style.backgroundColor = "#FFA500";
}

function removeBgColor(elementId) {
  document.getElementById(elementId).style.backgroundColor = "#FFF";
}
