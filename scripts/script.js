const button = document.querySelector(".gridselector");
const grid = document.querySelector(".images-grid");
const list = document.querySelector(".images-list");

function toggleView() {
  const listIsActive = list.classList.contains("active");

  // Grid view active
  if (listIsActive) {
    list.classList.remove("active");
    grid.classList.add("active");
    button.classList.remove("list-active");
    console.log("Now showing GRID");

    // List view active

  } else {
    grid.classList.remove("active");
    list.classList.add("active");
    button.classList.add("list-active");
    console.log("Now showing LIST");
  }
}