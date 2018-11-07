import document from 'document';
import { vibration } from 'haptics';
import { calcTimerLabel } from './calcTimerLabel';

const durations = document.getElementById('durations');
const timer = document.getElementById('timer');
const txtTimer = document.getElementById('txtTimer');
const rectTimer = document.getElementById('rectTimer');
let intervalId, timeoutId;

reset();
document.onkeypress = reset;

const btns = document.getElementsByClassName('duration-btn');
btns.forEach(function(btn) {
  btn.onactivate = function() {
    const duration = Number(btn.text.replace('min', '')) * 60 * 1000;
    durations.style.display = 'none';
    startTimer(duration);
  }
});

function reset() {
  clearInterval(intervalId);
  clearTimeout(timeoutId);
  vibration.stop();
  timer.style.display = 'none';
  durations.style.display = 'inline';
}

function startTimer(duration) {
  timer.style.display = 'inline';
  setTimerColor('fb-mint', 'fb-white');
  const before = new Date();
  tick();
  intervalId = setInterval(tick, 1000);

  timeoutId = setTimeout(function() {
    setTimerColor('fb-red', 'fb-red');
    vibration.start('ring');
  }, duration);

  function tick() {
    const after = new Date();
    const timerLabel = calcTimerLabel(duration, before, after);
    txtTimer.text = timerLabel.toMonoDigits();
  }
}

function setTimerColor(rectColor, txtColor) {
  rectTimer.style.fill = rectColor;
  txtTimer.style.fill = txtColor;
}
