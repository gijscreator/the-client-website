
const button = document.querySelector(".grid-list-toggle");
const gallery = document.querySelector("article.images ul");

if (button && gallery) {
  button.addEventListener("click", () => {
    const showingGrid = gallery.classList.contains("images-grid");
    gallery.classList.toggle("images-grid", !showingGrid);
    gallery.classList.toggle("images-list", showingGrid);
    console.log(showingGrid ? "Now showing LIST" : "Now showing GRID");
  });
}
