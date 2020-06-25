const container = document.querySelector(".container");
const guess = document.querySelector(".guess");
let count = 0;
const circle = document.getElementById("circle");
const middle = document.getElementById("middle");
const lefthand = document.getElementById("lefthand");
const righthand = document.getElementById("righthand");
const leftleg = document.getElementById("leftleg");
const rightleg = document.getElementById("rightleg");
const one = document.querySelectorAll(".one");
const keypad = document.querySelector(".keypad");
const retry = document.getElementById("retry");
const result = document.getElementById("result");

let words = [
  "java",
  "ruby",
  "javascript",
  "python",
  "jquery",
  "php",
  "sql",
  "swift",
  "typescript",
  "perl",
];
let guessLeter = [];

let question = Math.floor(Math.random() * words.length);
function intial() {
  for (let i = 0; i < words[question].length; i++) {
    guessLeter[i] = "_";
    guess.innerHTML = guessLeter.join(" ");
  }
}

window.addEventListener("load", (event) => {
  intial();
});

let answer = words[question];
console.log(answer);

function something(value) {
  if (answer.indexOf(value) == -1) {
    count++;
    counter();
    console.log(count);
  } else {
    for (let i = 0; i < answer.length; i++) {
      if (value == answer[i]) {
        guessLeter[i] = value;
        guess.textContent = guessLeter.join(" ");
      }
      hello();
    }
  }
}

let final = answer.split("").join(" ");
function hello() {
  if (guess.textContent == final) {
    result.innerHTML = "          Congrats! You Won!!!";
    result.classList.remove("hide");
    keypad.classList.add("hide");
    retry.classList.remove("hide");
  }
}

for (let i = 0; i < one.length; i++) {
  one[i].addEventListener("click", () => {
    one[i].disabled = true;
  });
}

function counter() {
  if (count == 1) {
    circle.classList.remove("hide");
  }
  if (count == 2) {
    middle.classList.remove("hide");
  }
  if (count == 3) {
    lefthand.classList.remove("hide");
  }
  if (count == 4) {
    righthand.classList.remove("hide");
  }
  if (count == 5) {
    leftleg.classList.remove("hide");
  }
  if (count == 6) {
    rightleg.classList.remove("hide");
  }
  if (count >= 7) {
    keypad.classList.add("hide");
    retry.classList.remove("hide");
    result.innerHTML = "The answer is : " + answer;
    result.classList.remove("hide");
  }
}

retry.addEventListener("click", () => {
  guessLeter = [];
  intial();
  keypad.classList.remove("hide");
  retry.classList.add("hide");
  result.classList.add("hide");
  circle.classList.add("hide");
  middle.classList.add("hide");
  lefthand.classList.add("hide");
  righthand.classList.add("hide");
  leftleg.classList.add("hide");
  rightleg.classList.add("hide");
  count = 0;
  for (let i = 0; i < one.length; i++) {
    one[i].disabled = false;
  }
});
