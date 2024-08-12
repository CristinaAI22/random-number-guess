const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let running = true;

function handleFormSubmit(event) {
  event.preventDefault();
  if (running) {
    guess();
  }
}
document
  .getElementById("guessForm")
  .addEventListener("submit", handleFormSubmit);

function guess() {
  const input = document.getElementById("number");
  const result = document.getElementById("result");
  const message = document.getElementById("message");
  let guess = Number(input.value);
  console.log(`Guess: ${guess}`);
  if (isNaN(guess)) {
    message.textContent = `Please enter a valid number!`;
    input.value = "";
  } else if (guess < minNum || guess > maxNum) {
    message.textContent = `Please enter a number that is in the specified range.`;
    input.value = "";
  } else {
    attempts++;
    console.log(`Attempts: ${attempts}`);
    if (guess < answer) {
      message.textContent = `TOO LOW! TRY AGAIN!`;
      input.value = "";
    } else if (guess > answer) {
      message.textContent = `TOO HIGH! TRY AGAIN!`;
      input.value = "";
    } else {
      message.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
      console.log(attempts);
      running = false;
      answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      attempts = 0;
      input.value = "";
      running = true;
    }
  }
}
