document.addEventListener("click", function(event) {

  let clickedElement = event.target.closest(".gridselector");
  let element = document.querySelector(".images-list");

  if (!clickedElement) {
    return;
  }

  element.style.display = "none";
});
