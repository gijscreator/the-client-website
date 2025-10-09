document.addEventListener("DOMContentLoaded", function () {

  const button = document.querySelector(".grid-list-toggle");
  const gallery = document.querySelector("article.images ul");
  if (button && gallery) {
    button.addEventListener("click", () => {
      const showingGrid = gallery.classList.contains("images-grid");
      gallery.classList.toggle("images-grid", !showingGrid);
      gallery.classList.toggle("images-list", showingGrid);
    });
  }
});

// Make sure this file is included with <script src="/scripts/script.js" defer></script>
(() => {
  const images = [
    { src: "assets/handgeschaaft.jpg", alt: "Handgeschaaft", name: "Anna van Veen", location: "Amsterdam Oost" },
    { src: "assets/autofiat.jpg",       alt: "Auto Fiat",     name: "Bram de Groot", location: "Rotterdam Centrum" },
    { src: "assets/bikerental.jpg",     alt: "Bike rental",   name: "Clara Meijer",  location: "Utrecht Zuid" },
    { src: "assets/fietaanpaal.jpg",    alt: "Fiets aan paal",name: "Daan Visser",   location: "Den Haag" },
    { src: "assets/fietsbijtrap.jpg",   alt: "Fiets bij trap",name: "Eva Janssen",   location: "Leiden" },
    { src: "assets/fietsbord.jpg",      alt: "Fietsbord",     name: "Finn Bakker",   location: "Haarlem" },
    { src: "assets/onibus.jpg",         alt: "Bus",           name: "Gwen Vos",      location: "Eindhoven" },
    { src: "assets/stoplicht.jpg",      alt: "Stoplicht",     name: "Hugo Peters",   location: "Groningen" },
    { src: "assets/bikerental.jpg",     alt: "Bike rental",   name: "Clara Meijer",  location: "Utrecht Zuid" },
    { src: "assets/fietaanpaal.jpg",    alt: "Fiets aan paal",name: "Daan Visser",   location: "Den Haag" },
    { src: "assets/fietsbijtrap.jpg",   alt: "Fiets bij trap",name: "Eva Janssen",   location: "Leiden" },
    { src: "assets/fietsbord.jpg",      alt: "Fietsbord",     name: "Finn Bakker",   location: "Haarlem" },
    { src: "assets/onibus.jpg",         alt: "Bus",           name: "Gwen Vos",      location: "Eindhoven" }
  ];

  // Detect page type
  const detailImg   = document.getElementById("detail-image");
  const detailName  = document.getElementById("detail-name");
  const detailLoc   = document.getElementById("detail-location");
  const isDetail    = !!(detailImg && detailName && detailLoc);

  // DETAIL PAGE: fill existing elements by ID
  if (isDetail) {
    const params = new URLSearchParams(location.search);
    const idxStr = params.get("i");
    const idx = idxStr !== null ? parseInt(idxStr, 10) : NaN;
    const item = Number.isInteger(idx) ? images[idx] : null;

    if (item) {
      detailImg.src = item.src;
      detailImg.alt = item.alt || "";
      detailName.textContent = item.name;
      detailLoc.textContent  = item.location;
    } else {
      // Graceful fallback if no/invalid ?i
      detailImg.remove();
      const fig = document.querySelector(".detail-card") || document.querySelector("figure");
      if (fig) {
        fig.insertAdjacentHTML("beforeend", `<p style="margin-top:12px;">Foto niet gevonden.</p>`);
      }
    }
    return; // done on detail page
  }

  // LIST PAGE: render into <article class="images"><ul class="images-grid|images-list"></ul>
  const gallery = document.querySelector("article.images ul");
  if (!gallery) return; // no list container on this page

  // Default to grid if no mode is set
  if (!gallery.classList.contains("images-grid") && !gallery.classList.contains("images-list")) {
    gallery.classList.add("images-grid");
  }

  // Render items
  gallery.innerHTML = images.map((it, i) => `
    <li data-index="${i}">
      <figure>
        <img src="${it.src}" alt="${it.alt}" loading="lazy">
        <article>
          <h4>${it.name}</h4>
          <h5>${it.location}</h5>
        </article>
      </figure>
    </li>
  `).join("");

  // Click → navigate to detail
  gallery.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const i = li.dataset.index;
    if (i != null) location.href = `detailpagina.html?i=${encodeURIComponent(i)}`;
  });

  // Optional: grid/list toggle if you keep a button with this class
  const toggleBtn = document.querySelector(".grid-list-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isGrid = gallery.classList.contains("images-grid");
      gallery.classList.toggle("images-grid", !isGrid);
      gallery.classList.toggle("images-list",  isGrid);
    });
  }
})();

