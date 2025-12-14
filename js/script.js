// =======================
// INISIALISASI MAP
// =======================

// Tentukan zoom berdasarkan ukuran layar
let initialZoom = window.innerWidth <= 768 ? 9 : 11;

// Inisialisasi peta
var map = L.map("map").setView([0.896615, 111.080641], initialZoom);

//Base Peta yang akan Digunakan
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


// =======================
// ICON
// =======================
function createIcon(filename) {
  return L.icon({
    iconUrl: `../icon/${filename}`,
    iconSize: [45, 45],
    iconAnchor: [22, 45],
  });
}
const icons = {
  point: createIcon("point.png"),
  airTerjun: createIcon("waterfall.png"),
  danau: createIcon("lake.png"),
  monument: createIcon("landmark.png"),
  sungai: createIcon("river.png"),
  gunung: createIcon("mountain.png"),
  titik: createIcon("pointRed.png"),
};

// =======================
// JUDUL LIST BERDASARKAN TEMA
// =======================
const titleMap = {
  semua: "Semua Informasi",
  wisata: "Potensi Wisata",
  pertanian: "Potensi Pertanian",
  alam: "Potensi Alam",
  infrastruktur: "Informasi Administrasi",
  administrasi: "Informasi Administrasi",
};

// =======================
// DATA WISATA
// =======================
let wisata = [];

fetch("../data/wisata.json")
  .then((res) => res.json())
  .then((data) => {
    wisata = data;
    renderData("semua");
  })
  .catch((err) => console.error("Gagal memuat data wisata", err));

// =======================
// LAYER GROUP MARKER
// =======================
let markerGroup = L.layerGroup().addTo(map);
let listContainer = document.getElementById("list-wisata");

// =======================
// RENDER DATA (FILTER)
// =======================
function renderData(filter) {
  markerGroup.clearLayers();
  listContainer.innerHTML = "";

  wisata.forEach((item, index) => {
    if (filter !== "semua" && !item.tipe.includes(filter)) return;

    // === MARKER ===
    let marker = L.marker(item.koordinat, {
      icon: icons[item.icon] || icons.point,
    }).addTo(markerGroup);

    // === LIST ===
    let div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `<b>${item.nama}</b>`;

    let detail = document.createElement("div");
    detail.className = "detail";
    detail.id = "detail-" + index;
    detail.innerHTML = `
      <img src="${item.foto}">
      <h3>${item.nama}</h3>
      <p>${item.deskripsi}</p>
      <small>${item.koordinat}</small>
    `;

    div.appendChild(detail);
    listContainer.appendChild(div);

    // Klik list → zoom
    div.addEventListener("click", () => {
      map.setView(item.koordinat, 13, { animate: true });
      toggleDetail(index);
    });

    // Klik marker → buka detail
    marker.on("click", () => {
      div.scrollIntoView({ behavior: "smooth" });
      toggleDetail(index);
    });
  });
}

// =======================
// TOGGLE DETAIL
// =======================
function toggleDetail(index) {
  document.querySelectorAll(".detail").forEach((d) => {
    d.style.display = "none";
  });

  let detail = document.getElementById("detail-" + index);
  if (!detail) return;

  detail.style.display = "block";
}

// =======================
// FILTER BUTTON EVENT
// =======================
document.querySelectorAll(".map-filter button").forEach((btn) => {
  btn.addEventListener("click", function () {
    // aktif button
    document
      .querySelectorAll(".map-filter button")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    // ambil filter
    const filter = this.dataset.filter;

    // render data
    renderData(filter);

    // UBAH JUDUL LIST
    const title = document.getElementById("list-title");
    title.textContent = titleMap[filter] || "Informasi";
  });
});

// =======================
// GEOJSON (TIDAK TERFILTER)
// =======================
fetch("data/kec_ketungau_hulu.geojson")
  .then((res) => res.json())
  .then((data) => {
    L.geoJSON(data, {
      style: {
        color: "green",
        weight: 0,
        fillOpacity: 0.1,
      },
    }).addTo(map);
  });

fetch("../data/Batas_Desa_Ketungau_Hulu3.geojson")
  .then((res) => {
    if (!res.ok) throw new Error("GeoJSON gagal dimuat");
    return res.json();
  })
  .then((data) => {
    let batasDesa = L.geoJSON(data, { 
      style: {
        color: 'green',
        weight: 1,
        fillOpacity: 0,
      },
    }).addTo(map);

    map.fitBounds(batasDesa.getBounds());
  })
  .catch((err) => console.error(err));

  fetch("data/kwsn_trans_ketungau_hulu.geojson")
  .then((res) => res.json())
  .then((data) => {
    L.geoJSON(data, {
      style: {
        color: "yellow",
        weight: 0,
        fillOpacity: 0.7,
      },
    }).addTo(map);
  });
