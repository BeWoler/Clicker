let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector("#display");
const displayCounter = document.querySelector("#display__counter");
const button = document.querySelector("#button");
const restartBtn = document.querySelector("#button__restart");
const counter = document.querySelector("#counter");

button.onclick = start;

function start() {
  const startTime = Date.now();

  display.textContent = formatTime(TIMEOUT);
  button.onclick = () => (counter.textContent = ++clicks);

  const interval = setInterval(() => {
    const delta = Date.now() - startTime;
    display.textContent = formatTime(TIMEOUT - delta);
  }, 100);

  const timeout = setTimeout(() => {
    button.onclick = null;
    display.textContent = "Game Over";
    displayCounter.textContent = `You clicked ${clicks} times!`;

    restartBtn.style.display = "block";
    restartBtn.onclick = restart;

    clearInterval(interval);
    clearTimeout(timeout);
  }, TIMEOUT);
}

function restart() {
  restartBtn.style.display = "none";

  clicks = 0;

  counter.textContent = clicks;
  displayCounter.textContent = null;

  start();
}

function formatTime(ms) {
  return Number.parseFloat(ms / 1000).toFixed(2);
}
