const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", (e) => {
  if (e.target.className === "play-again") window.location.reload();
});

guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max)
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct!, YOU WIN!!`);
  } else {
    guessLeft -= 1;
    if (guessLeft === 0) {
      gameOver(
        false,
        `Game Over, you lost. the correct number was ${winningNum}`
      );
    } else {
      guessInput.style.borderColor = "red";
      setMessage(`${guess} is not correct, ${guessLeft} guesses left`, "red");
    }
  }
});

const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};

const gameOver = (won, msg) => {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
};
