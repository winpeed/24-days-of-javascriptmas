const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const myAudio = document.getElementById("myAudio");

function playAudio() {
  myAudio.play();
}

function pauseAudio() {
  myAudio.pause();
}

function stopAudio() {
  myAudio.pause();
  myAudio.currentTime = 0;
}

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);
