document.addEventListener('DOMContentLoaded', () => {
 let timerInterval;
 const startButton = document.getElementById('start-button');
 const pauseButton = document.getElementById('pause-button');
 const resetButton = document.getElementById('reset-button');
 const minutesInput = document.getElementById('minutes');
 const secondsInput = document.getElementById('seconds');
 const timerDisplay = document.getElementById('timer-display');
 const notification = document.getElementById('notification');

 function updateDisplay(minutes, seconds) {
 timerDisplay.textContent = 
 String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
 }

 function startTimer() {
 let totalSeconds = parseInt(minutesInput.value || 0) * 60 + parseInt(secondsInput.value || 0);
 if (isNaN(totalSeconds) || totalSeconds <= 0) return;
 clearInterval(timerInterval);
 timerInterval = setInterval(() => {
 if (totalSeconds <= 0) {
 clearInterval(timerInterval);
 notification.textContent = 'Time is up!';
 alert('Time is up!');
 } else {
 totalSeconds--;
 const minutes = Math.floor(totalSeconds / 60);
 const seconds = totalSeconds % 60;
 updateDisplay(minutes, seconds);
 }
 }, 1000);
 }

 function pauseTimer() {
 clearInterval(timerInterval);
 }

 function resetTimer() {
 clearInterval(timerInterval);
 updateDisplay(0, 0);
 minutesInput.value = '';
 secondsInput.value = '';
 notification.textContent = '';
 }

 startButton.addEventListener('click', startTimer);
 pauseButton.addEventListener('click', pauseTimer);
 resetButton.addEventListener('click', resetTimer);
});
