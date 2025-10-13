document.addEventListener("DOMContentLoaded", () => {
  // --- Array of images ---
  const images = [
    { src: "assets/handgeschaaft.jpg", alt: "Handgeschaaft",  name: "Anna van Veen",  location: "Amsterdam Oost" },
    { src: "assets/autofiat.jpg",       alt: "Auto Fiat",      name: "Bram de Groot", location: "Rotterdam Centrum" },
    { src: "assets/bikerental.jpg",     alt: "Bike rental",    name: "Clara Meijer",  location: "Utrecht Zuid" },
    { src: "assets/fietaanpaal.jpg",    alt: "Fiets aan paal", name: "Daan Visser",   location: "Den Haag" },
    { src: "assets/fietsbijtrap.jpg",   alt: "Fiets bij trap", name: "Eva Janssen",   location: "Leiden" },
    { src: "assets/fietsbord.jpg",      alt: "Fietsbord",      name: "Finn Bakker",   location: "Haarlem" },
    { src: "assets/onibus.jpg",         alt: "Bus",            name: "Gwen Vos",      location: "Eindhoven" },
    { src: "assets/stoplicht.jpg",      alt: "Stoplicht",      name: "Hugo Peters",   location: "Groningen" },
    { src: "assets/bikerental.jpg",     alt: "Bike rental",    name: "Clara Meijer",  location: "Utrecht Zuid" },
    { src: "assets/fietaanpaal.jpg",    alt: "Fiets aan paal", name: "Daan Visser",   location: "Den Haag" },
    { src: "assets/fietsbijtrap.jpg",   alt: "Fiets bij trap", name: "Eva Janssen",   location: "Leiden" },
    { src: "assets/fietsbord.jpg",      alt: "Fietsbord",      name: "Finn Bakker",   location: "Haarlem" },
    { src: "assets/onibus.jpg",         alt: "Bus",            name: "Gwen Vos",      location: "Eindhoven" }
  ];

  // --- Get page elements ---
  const toggleButton = document.querySelector(".grid-list-toggle");
  const galleryList  = document.querySelector("article.images ul");

  // --- Detail page elements ---
  const detailImage     = document.getElementById("detail-image");
  const detailNameLabel = document.getElementById("detail-name");
  const detailLocation  = document.getElementById("detail-location");
  const isDetailPage    = !!(detailImage && detailNameLabel && detailLocation);

  // --- Detail page logic ---
  if (isDetailPage) {
    const urlParams = new URLSearchParams(location.search);
    const index = Number.parseInt(urlParams.get("i") ?? "", 10);
    const selectedImage = Number.isInteger(index) ? images[index] : null;

    if (selectedImage) {
      detailImage.src = selectedImage.src;
      detailImage.alt = selectedImage.alt || "";
      detailNameLabel.textContent = selectedImage.name;
      detailLocation.textContent  = selectedImage.location;
    } else {
      detailImage.remove();
      const figureElement = document.querySelector(".detail-card") || document.querySelector("figure");
      if (figureElement) {
        figureElement.insertAdjacentHTML(
          "beforeend",
          `<p style="margin-top:12px;">Foto niet gevonden.</p>`
        );
      }
    }
    return; // stop function after handling detail page
  }

  // --- Gallery guard ---
  if (!galleryList) return;

  // --- Ensure layout class exists ---
  if (
    !galleryList.classList.contains("images-grid") &&
    !galleryList.classList.contains("images-list")
  ) {
    galleryList.classList.add("images-grid");
  }

  // --- Render gallery items ---
  galleryList.innerHTML = images
    .map((image, index) => `
      <li data-index="${index}">
        <figure>
          <img src="${image.src}" alt="${image.alt}" loading="lazy">
          <article>
            <h4>${image.name}</h4>
            <h5>${image.location}</h5>
          </article>
        </figure>
      </li>
    `)
    .join("");

  // --- Click-through to detail page ---
  galleryList.addEventListener("click", (event) => {
    const clickedListItem = event.target.closest("li");
    if (!clickedListItem) return;

    const imageIndex = clickedListItem.dataset.index;
    if (imageIndex != null) {
      location.href = `detailpagina.html?i=${encodeURIComponent(imageIndex)}`;
    }
  });

  // --- Toggle grid/list layout ---
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const isCurrentlyGrid = galleryList.classList.contains("images-grid");
      galleryList.classList.toggle("images-grid", !isCurrentlyGrid);
      galleryList.classList.toggle("images-list",  isCurrentlyGrid);
    });
  }
});
