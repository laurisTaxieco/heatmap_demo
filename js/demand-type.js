const pickUpBtn = document.querySelector("#pick-up");
const dropOffBtn = document.querySelector("#drop-off");

pickUpBtn.addEventListener("click", () => {
  if (demandType_sBtn_text.innerText !== "Pick Up") {
    demandType_sBtn_text.innerText = "Pick Up";
    is_pick_up = true;
    resetSlider();
  }
  demandTypeMenu.classList.remove("active");
});

dropOffBtn.addEventListener("click", async () => {
  if (demandType_sBtn_text.innerText !== "Drop Off") {
    demandType_sBtn_text.innerText = "Drop Off";
    is_pick_up = false;
    resetSlider();
  }
  demandTypeMenu.classList.remove("active");
});
