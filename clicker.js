let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;

function start() {
  button.onclick = () => counter.textContent = clicks++;
}