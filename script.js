document.addEventListener("DOMContentLoaded", function () {
  const descriptions = document.querySelectorAll(".project-description");
  const buttons = document.querySelectorAll(".expand-button");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (descriptions[index].classList.contains("collapsed")) {
        descriptions[index].classList.remove("collapsed");
        button.textContent = "Less";
      } else {
        descriptions[index].classList.add("collapsed");
        button.textContent = "More";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const descriptionContainers = document.querySelectorAll(".description-container");
  const descriptions = document.querySelectorAll(".project-description");

  descriptionContainers.forEach((container, index) => {
    container.addEventListener("click", function () {
      if (descriptions[index].classList.contains("collapsed")) {
        descriptions[index].classList.remove("collapsed");
      } else {
        descriptions[index].classList.add("collapsed");
      }
    });
  });
});