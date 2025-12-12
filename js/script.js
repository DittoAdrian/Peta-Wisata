// =======================
// INISIALISASI MAP
// =======================
// Tentukan zoom berdasarkan ukuran layar
let initialZoom = window.innerWidth <= 768 ? 10  : 11;

// Inisialisasi peta dengan zoom responsive
var map = L.map("map").setView([0.896615, 111.080641], initialZoom);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Fungsi icon
function createIcon(filename) {
  return L.icon({
    iconUrl: `../icon/${filename}`,
    iconSize: [45, 45],
    iconAnchor: [22, 45],
  });
}

// Kumpulan icon
const icons = {
  point: createIcon("point.png"),
  airTerjun: createIcon("waterfall.png"),
  danau: createIcon("lake.png"),
  monument: createIcon("landmark.png"),
  sungai: createIcon("river.png"),
  gunung: createIcon("mountain.png"),
};

// =======================
// DATA WISATA
// =======================
var wisata = [
  {
    nama: "Air terjun Dusun Belubu",
    koordinat: [0.95123, 111.29413],
    foto: "images/airTerjunDusunBelubu.jpg",
    deskripsi:
      "Air Terjun Dusun Belubu merupakan salah satu objek wisata alam yang terdapat di Kecamatan Ketungau Hulu",
    icon: "airTerjun",
  },
  {
    nama: "Air Terjun Sungai Kelingkang",
    koordinat: [1.06071, 111.16583],
    foto: "images/SungaiKelingkang.png",
    deskripsi:
      "Air Terjun Sungai Kelingkang merupakan salah satu objek wisata alam yang terdapat di Kecamatan Ketungau Hulu, Kabupaten Sintang, Kalimantan Barat. Air terjun ini berada di kawasan Desa Nanga Bayan, sebuah wilayah perbukitan di bagian hulu daerah Ketungau. Lokasinya dikelilingi oleh hutan tropis yang masih terjaga, sehingga memberikan suasana alam yang sejuk, tenang, dan alami.Bentang air yang jatuh melalui tebing batu membentuk beberapa tingkatan yang indah. Aliran airnya jernih dan mengalir menuju sungai yang lebih rendah sehingga menghasilkan suara gemericik yang menenangkan. Vegetasi di sekitarnya rapat, terdiri dari pepohonan tinggi, tanaman bawah, serta semak belukar yang menjadi habitat berbagai jenis fauna hutan.",
    icon: "airTerjun",
  },
  {
    nama: "Tugu Garuda",
    koordinat: [1.000472, 111.135722],
    foto: "images/TuguGaruda.jpg",
    deskripsi:
      "Tugu Garuda di Desa Jasa merupakan salah satu penanda wilayah yang memiliki nilai simbolik dan historis bagi masyarakat setempat di Kecamatan Ketungau Hulu. Tugu ini berdiri kokoh di ruang terbuka desa sebagai representasi lambang negara Indonesia, yaitu burung Garuda, yang mencerminkan semangat persatuan, keberanian, dan nasionalisme.Secara visual, tugu ini berbentuk tiang beton dengan ornamen Garuda Pancasila di bagian atasnya. Struktur ini menjadi titik orientasi bagi warga, serta sering dijadikan tempat berkumpul pada kegiatan sosial dan peringatan kenegaraan. Keberadaannya mempertegas identitas desa sebagai wilayah yang berada di daerah perbatasan, sekaligus menjadi pengingat akan pentingnya menjaga kedaulatan wilayah dan rasa kebangsaan",
    icon: "monument",
  },
  {
    nama: "Sungai Kelik",
    koordinat: [1.012431, 111.217461],
    foto: "images/sungaiKelik.jpg",
    deskripsi:
      "Sungai Kelik merupakan salah satu aliran sungai yang berada di wilayah Kecamatan Ketungau Hulu, Kabupaten Sintang. Sungai ini menjadi bagian dari jaringan sungai pedalaman yang mengalir melalui kawasan hutan, ladang masyarakat, dan permukiman desa. Aliran airnya relatif tenang pada musim kemarau, sementara pada musim hujan debitnya meningkat dan membuat sungai tampak lebih lebar.Lingkungan di sekitar Sungai Kelik didominasi oleh vegetasi tropis, dengan pepohonan rindang yang tumbuh di sepanjang tepi sungai. Kondisi alam yang masih alami ini menjadikan sungai sebagai habitat berbagai jenis ikan sungai dan satwa kecil lainnya. Bagi penduduk setempat, sungai ini memiliki peran penting dalam kehidupan sehari-hari. Selain menjadi sumber air untuk kebutuhan domestik, Sungai Kelik juga digunakan untuk memancing, mencuci, serta menjadi tempat rekreasi alami bagi warga desa.",
    icon: "sungai",
  },
  {
    nama: "Air Terjun Bayan",
    koordinat: [0.973222, 111.019916],
    foto: "images/airTerjunBayan.jpg",
    deskripsi:
      "Air Terjun Bayan merupakan salah satu potensi alam yang berada di wilayah pedalaman Kecamatan Ketungau Hulu. Air terjun ini dikenal oleh masyarakat sekitar sebagai aliran air berbentuk terjunan yang berasal dari sungai kecil di kawasan hutan, dengan arus yang mengalir dari dataran lebih tinggi menuju lembah. Suara gemuruh air yang jatuh ke kolam alami di bawahnya menciptakan suasana yang sejuk dan tenang, serta menjadi ciri khas lingkungan hutan tropis di daerah ini.Lingkungan di sekitar Air Terjun Bayan masih sangat alami, dikelilingi pepohonan tinggi, semak-semak hijau, dan formasi batuan yang membingkai aliran air. Tempat ini menjadi titik perhentian alami bagi warga yang datang untuk beristirahat, mandi, atau menikmati pemandangan. Pada musim penghujan, debit air meningkat dan air terjun tampak lebih lebar dan kuat, sementara pada musim kemarau alirannya lebih tenang, menampakkan bebatuan dasar yang halus",
    icon: "airTerjun",
  },
  {
    nama: "Sungai Ketungau Marakai ",
    koordinat: [0.38305, 111.63305],
    foto: "images/sungaiKetungauMarakai.jpg",
    deskripsi:
      "Sungai Ketungau Marakai merupakan salah satu aliran sungai yang berada di wilayah perbatasan Kecamatan Ketungau Hulu, Kabupaten Sintang. Sungai ini menjadi bagian dari sistem Sungai Ketungau yang mengalir dari daerah pedalaman menuju wilayah selatan Sintang. Aliran airnya melewati kawasan hutan tropis, ladang masyarakat, serta perkampungan yang berada di sepanjang bantaran sungai.",
    icon: "sungai",
  },
  {
    nama: "Danau Jamelak",
    koordinat: [0.08285, 111.543],
    foto: "images/danauJamelak.png",
    deskripsi:
      'sebuah kawasan ekowisata dan area konservasi alam yang terletak di Kelurahan Akcaya, Kecamatan Sintang, Kabupaten Sintang, Kalimantan Barat. Kawasan ini sering dijuluki sebagai "surganya Kota Sintang" dan dikelola oleh masyarakat setempat untuk menjaga kelestarian lingkungan dan mempromosikan potensi wisata',
    icon: "danau",
  },
  {
    nama: "Danau Jemut",
    koordinat: [0.36428, 111.58677],
    foto: "images/danauJemut.png",
    deskripsi:
      "Danau alami yang berperan penting sebagai habitat ikan air tawar di daerah aliran Sungai Ketungau",
    icon: "danau",
  },
  {
    nama: "Bukit Kelam",
    koordinat: [0.074873, 111.654927],
    foto: "images/bukitKelam.png",
    deskripsi:
      "Bukit Kelam adalah sebongkah batu granit raksasa (monolit) yang membentang dari barat ke timur sepanjang sekitar 2-3 kilometer, dengan ketinggian mencapai 1.002 meter di atas permukaan laut (mdpl). Keunikannya terletak pada strukturnya yang hampir vertikal dan vegetasi hijau lebat yang tumbuh di lerengnya, menjadikannya pemandangan alam yang dramatis.",
    icon: "gunung",
  },
  {
    nama: "Bukit Saran",
    koordinat: [-0.4222539, 111.29438],
    foto: "images/bukitSaran.png",
    deskripsi:
      'Bukit Saran, atau terkadang disebut Gunung Saran, terletak di Kecamatan Tempunak. Bukit ini menawarkan pemandangan alam yang luas dengan hamparan hutan hujan tropis. Dikenal juga sebagai bagian dari inisiatif "Heart of Borneo", kawasan ini memiliki keanekaragaman hayati yang tinggi dan suasana yang masih sangat alami. Mendaki Bukit Saran menyajikan pengalaman petualangan di tengah hutan lebat khas Kalimantan.',
    icon: "gunung",
  },
];

// =======================
// GENERATE LIST WISATA
// =======================
let listContainer = document.getElementById("list-wisata");

wisata.forEach((item, index) => {
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
    <h4>${item.koordinat}</h4>
  `;

  div.appendChild(detail);
  listContainer.appendChild(div);

  // klik list → zoom map
  div.addEventListener("click", function () {
    map.setView(item.koordinat, 13, { animate: true });

    // toggle detail
    if (detail.style.display === "block") {
      detail.style.display = "none";
    } else {
      document
        .querySelectorAll(".detail")
        .forEach((d) => (d.style.display = "none"));
      detail.style.display = "block";
    }
  });
});

// =======================
// MARKER MAP
// =======================
wisata.forEach((item, index) => {
  let marker = L.marker(item.koordinat, { icon: icons[item.icon] }).addTo(map);

  marker.on("click", function () {
    let detail = document.getElementById("detail-" + index);

    // scroll ke list
    detail.parentElement.scrollIntoView({ behavior: "smooth" });

    // toggle
    if (detail.style.display === "block") {
      detail.style.display = "none";
    } else {
      document
        .querySelectorAll(".detail")
        .forEach((d) => (d.style.display = "none"));
      detail.style.display = "block";
    }
  });
});

// === MEMUAT GEOJSON ===
fetch("data/kec_ketungau_hulu.geojson")
  .then((response) => response.json())
  .then((data) => {
    L.geoJSON(data, {
      style: {
        color: "red",
        weight: 2,
        fillOpacity: 0.1,
      },
    }).addTo(map);
  });
fetch("data/kwsn_trans_ketungau_hulu.geojson")
  .then((response) => response.json())
  .then((data) => {
    L.geoJSON(data, {
      style: {
        color: "yellow",
        weight: 2,
        fillOpacity: 0.3,
      },
    }).addTo(map);
  });
