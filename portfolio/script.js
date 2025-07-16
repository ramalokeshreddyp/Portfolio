const textList = [
  "Data Analyst 👨‍💻",
  "Machine Learning Enthusiast 🤖",
  "Web Developer 💻",
  "Problem Solver 🔍"
];

let index = 0;
let charIndex = 0;
const typingText = document.querySelector(".typing-text");

function typeEffect() {
  if (charIndex < textList[index].length) {
    typingText.textContent += textList[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = textList[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 40);
  } else {
    index = (index + 1) % textList.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
