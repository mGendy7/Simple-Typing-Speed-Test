// Array Of Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

const lvl = {
  Easy: 4,
  Normal: 3,
  Hard: 2,
};

defaultLvlName = "Normal";
defaultLvlSeconds = lvl[defaultLvlName];

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

lvlNameSpan.innerHTML = defaultLvlName;
secondsSpan.innerHTML = defaultLvlSeconds;
timeLeftSpan.innerHTML = defaultLvlSeconds;
scoreTotal.innerHTML = words.length;

input.onpaste = function () {
  return false;
};

startButton.addEventListener("click", function () {
  this.remove();
  input.focus();
  generateWord();
});

function generateWord() {
  let randomWord = words[Math.trunc(Math.random() * words.length)];

  let randomWordIndex = words.indexOf(randomWord);

  words.splice(randomWordIndex, 1);

  theWord.innerHTML = randomWord;

  upcomingWords.innerHTML = "";

  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.append(txt);
    upcomingWords.append(div);
  }

  startGame();
}

function startGame() {
  timeLeftSpan.innerHTML = defaultLvlSeconds;

  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;

    if (timeLeftSpan.innerHTML == "0") {
      clearInterval(start);

      if (theWord.innerHTML.toLowerCase() == input.value.toLowerCase()) {
        input.value = "";

        scoreGot.innerHTML++;

        if (words.length > 0) {
          generateWord();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          let spanTxt = document.createTextNode("Congratiulations");
          span.append(spanTxt);
          finishMessage.append(span);

          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let spanTxt = document.createTextNode("Game Over");
        span.append(spanTxt);
        finishMessage.append(span);
      }
    }
  }, 1000);
}
