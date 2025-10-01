const button = document.querySelector(".gridselector");
const grid = document.querySelector(".images-grid");
const list = document.querySelector(".images-list");

function toggleView() {
  const listIsActive = list.classList.contains("active");

  if (listIsActive) {

    list.classList.remove("active");
    grid.classList.add("active");
    button.classList.remove("list-active");
  } else {

    grid.classList.remove("active");
    list.classList.add("active");
    button.classList.add("list-active");
  }
}


button.addEventListener("click", toggleView);

button.addEventListener("pointerup", toggleView);
