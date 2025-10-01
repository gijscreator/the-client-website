console.log("init toggle");

document.addEventListener("click", function (event) {
  const trigger = event.target.closest(".gridselector");
  if (!trigger) return; 

  const list = document.querySelector(".images-list");
  const grid = document.querySelector(".images-grid");

  if (!list || !grid) {
    console.warn("Missing .images-list or .images-grid");
    return;
  }

  const listIsActive = list.classList.contains("active");
  list.classList.toggle("active", !listIsActive);
  grid.classList.toggle("active", listIsActive);

  console.log("toggled:", { listActive: list.classList.contains("active"), gridActive: grid.classList.contains("active") });
});
