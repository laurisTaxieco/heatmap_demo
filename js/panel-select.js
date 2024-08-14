const demandTypeMenu = document.querySelector("#demand-type-selector"),
  demandTypeSelectBtn = demandTypeMenu.querySelector(".panel-select-btn"),
  demandTypeOptions = demandTypeMenu.querySelectorAll(".option"),
  demandType_sBtn_text = demandTypeMenu.querySelector(".sBtn-text");

demandType_sBtn_text.innerText =
  demandTypeOptions[0].querySelector(".option-text").innerText;

demandTypeSelectBtn.addEventListener("click", () =>
  demandTypeMenu.classList.toggle("active")
);

const dataVersionMenu = document.querySelector("#data-version-selector"),
  dataVersionSelectBtn = dataVersionMenu.querySelector(".panel-select-btn"),
  dataVersionOptions = dataVersionMenu.querySelectorAll(".option"),
  dataVersion_sBtn_text = dataVersionMenu.querySelector(".sBtn-text");

dataVersion_sBtn_text.innerText =
  dataVersionOptions[0].querySelector(".option-text").innerText;

dataVersionSelectBtn.addEventListener("click", () =>
  dataVersionMenu.classList.toggle("active")
);

dataVersionOptions.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    dataVersion_sBtn_text.innerText = selectedOption;

    dataVersionMenu.classList.remove("active");
  });
});
