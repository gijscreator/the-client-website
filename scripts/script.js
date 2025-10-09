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

  const iconsHTML = `
    <ul>
      <li>
        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 25.9167L12.11 24.0208C5.09 17.7917 0.5 13.5938 0.5 8.44792C0.5 4.25 3.74 1 7.925 1C10.22 1 12.515 2.08333 14 3.84375C15.485 2.08333 17.78 1 20.075 1C24.26 1 27.5 4.25 27.5 8.44792C27.5 13.5938 22.91 17.7917 15.89 24.0208L14 25.9167V25.9167Z" fill="#4E6977"/>
        </svg>
      </li>
      <li>
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5301 4.67491C14.9858 4.33067 15.5577 3.98098 16.2427 3.71417C17.5141 3.21897 19.4512 3.36571 21.5844 4.70746C21.5844 4.70746 20.3662 6.17788 19.093 6.78523C17.8885 7.35984 17.2782 7.4127 17.0725 7.43052L17.0413 7.43332C17.9011 8.01952 18.6696 8.99653 19.0601 10.5988C19.0601 10.5988 17.1996 10.8316 16.0379 10.4002C14.8761 9.9687 13.9341 9.37756 13.4032 7.97393C13.4009 7.98153 13.3974 8.00035 13.3921 8.02885L13.3921 8.02891C13.3385 8.31784 13.1007 9.60103 12.0061 10.2927C10.8034 11.0527 9.47565 11.4912 8.15669 11.2892C8.06876 11.2762 8.23811 8.67412 10.5178 7.46914C10.3973 7.49845 9.39956 7.67522 8.00363 7.47891C6.6077 7.28261 5.38199 6.34884 4.5613 5.14386C4.49943 5.04942 7.41417 2.82509 10.6416 4.30038L10.6426 4.30088C10.6799 4.31917 11.704 4.82082 12.5481 5.42628C12.5981 4.98003 12.7094 4.30666 12.9572 3.47751C13.4193 1.93122 14.192 0.665276 14.192 0.665276L16.2718 0.651123C16.2718 0.651123 15.5352 1.45814 15.0434 2.83206C14.8537 3.36183 14.6764 4.04069 14.5301 4.67491ZM19.8248 8.16966C20.8431 10.0776 21.0252 11.8279 21.0252 11.8279C21.0252 11.8279 20.0993 12.2915 17.989 12.233C16.2359 12.1845 14.7424 11.7644 13.6273 10.8965C12.5216 12.206 10.9656 12.9212 9.11579 12.9212C8.72596 12.9212 8.3166 12.8902 7.9043 12.8258C7.21681 12.7212 6.67164 12.2005 6.54886 11.5309C6.458 11.0261 6.57948 10.0149 7.07091 8.95322C6.10856 8.67151 5.40739 8.45331 4.45644 7.46556C1.94097 9.81982 0.0517578 12.1291 0.0517578 15.7685C0.0517578 22.9264 6.09651 28.7311 13.5514 28.7311C21.007 28.7311 27.0504 22.9267 27.0504 15.7685C27.0504 11.7507 24.8222 9.13885 21.8345 6.75951C21.3053 7.28611 20.8431 7.63816 19.8248 8.16966Z" fill="#4E6977"/>
        </svg>
      </li>
      <li>
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 22.1611L23.152 27.325L20.863 17.5861L28.5 11.0368L18.4326 10.1819L14.5 1L10.5674 10.1819L0.5 11.0368L8.137 17.5861L5.848 27.325L14.5 22.1611Z" fill="#4E6977"/>
        </svg>
      </li>
    </ul>
  `;

  const list = document.querySelector(".images-list");
  if (list) {
    list.innerHTML = "";
    for (let i = 0; i < images.length; i++) {
      const it = images[i];
      list.innerHTML += `
        <li data-index="${i}">
          <figure>
            <img src="${it.src}" alt="${it.alt}" loading="lazy">
            <article>
              <h4>${it.name}</h4>
              <h5>${it.location}</h5>
              ${iconsHTML}
            </article>
          </figure>
        </li>
      `;
    }

    list.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li) return;
      const i = li.getAttribute("data-index");
      if (i !== null) {
        window.location.href = `detailpagina.html?i=${encodeURIComponent(i)}`;
      }
    });

    return;
  }

  const params = new URLSearchParams(window.location.search);
  if (params.has("i")) {
    const index = parseInt(params.get("i"), 10);
    const item = images[index];
    const main = document.querySelector("main") || document.body;

    if (!item) {
      main.innerHTML = `
        <p>Foto niet gevonden.</p>
      `;
      return;
    }

    main.innerHTML = `
      <figure class="detail-figure">
        <img src="${item.src}" alt="${item.alt}">
        <figcaption>
          <h4>${item.name}</h4>
          <h4>${item.location}</h4>
        </figcaption>
      </figure>
    `;
  }
});
