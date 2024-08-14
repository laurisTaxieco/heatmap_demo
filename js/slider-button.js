const playButton = document.querySelector("#play-btn");
const pauseButton = document.querySelector("#pause-btn");
const resetButton = document.querySelector("#reset-btn");

let playInterval = null;

function resetSlider() {
  playButton.style.display = "block";
  pauseButton.style.display = "none";
  playInterval && clearInterval(playInterval);
  playInterval = null;
  sliderInput.value = 0;
  sliderInput.dispatchEvent(new Event("input"));
}

function pause() {
  if (playInterval) {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    clearInterval(playInterval);
    playInterval = null;
  }
}

function play() {
  if (!playInterval) {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
    playInterval = setInterval(() => {
      if (sliderInput.value < 23) {
        sliderInput.value++;
        sliderInput.dispatchEvent(new Event("input"));
      } else {
        pause();
      }
    }, 500);
  }
}

playButton.addEventListener("click", () => {
  play();
});
pauseButton.addEventListener("click", () => {
  pause();
});
resetButton.addEventListener("click", () => {
  resetSlider();
});
