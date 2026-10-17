const clubs = [
  {
    id: "paskibra",
    name: "Paskibra",
    category: "Kepemimpinan",
    description:
      "Paskibra melatih kedisiplinan, ketangkasan baris-berbaris, dan jiwa kepemimpinan. Anggotanya terbiasa memimpin upacara, menjaga ketertiban, serta bekerja sama dalam satu barisan yang kompak. Tempat latihan pastinya belum diketahui, jadi perlu dikonfirmasi ke pihak sekolah.",
    day: "Jumat",
    time: "15.30–17.00",
    start: 930,
    end: 1020,
    location: "Area sekolah (konfirmasi)",
    coachName: "Nama pembina belum dikonfirmasi",
    benefits: [
      "Melatih kedisiplinan dan tanggung jawab.",
      "Mengembangkan jiwa kepemimpinan dan kekompakan.",
      "Membiasakan kerja sama dan ketelitian.",
    ],
    activityText: "DUMMY FOTO KEGIATAN PASKIBRA",
    coachText: "DUMMY FOTO PEMBINA PASKIBRA",
  },
  {
    id: "panahan",
    name: "Panahan",
    category: "Olahraga",
    description:
      "Panahan adalah olahraga yang melatih fokus, kesabaran, ketenangan, dan akurasi saat memanah. Kegiatan ini cocok untuk kamu yang ingin belajar mengendalikan diri sambil menambah keterampilan baru. Tempat latihan pastinya belum diketahui, jadi perlu dikonfirmasi ke pihak sekolah.",
    day: "Rabu",
    time: "15.30–17.00",
    start: 930,
    end: 1020,
    location: "Konfirmasi ke sekolah",
    coachName: "Nama pembina belum dikonfirmasi",
    benefits: [
      "Melatih fokus dan kesabaran.",
      "Mengembangkan koordinasi dan ketangkasan.",
      "Mengikuti arahan keselamatan dan pengawasan pembina.",
    ],
    activityText: "DUMMY FOTO KEGIATAN PANAHAN",
    coachText: "DUMMY FOTO PEMBINA PANAHAN",
  },
  {
    id: "rohis",
    name: "Rohis",
    category: "Keagamaan",
    description:
      "Rohis (Rohani Islam) membantu anggotanya memperkuat iman, mempererat ukhuwah, dan menumbuhkan akhlak yang baik. Kegiatannya berupa kajian, diskusi keagamaan, dan kegiatan sosial bersama teman. Lokasi kegiatannya belum diketahui secara pasti, jadi perlu dikonfirmasi ke pihak sekolah.",
    day: "Jumat",
    time: "15.30–17.00",
    start: 930,
    end: 1020,
    location: "Area sekolah (konfirmasi)",
    coachName: "Nama pembina belum dikonfirmasi",
    benefits: [
      "Memperkuat nilai keagamaan dan akhlak.",
      "Mempererat persaudaraan dan kebersamaan.",
      "Mengembangkan kepedulian serta kegiatan positif.",
    ],
    activityText: "DUMMY FOTO KEGIATAN ROHIS",
    coachText: "DUMMY FOTO PEMBINA ROHIS",
  },
  {
    id: "pencak-silat",
    name: "Pencak Silat",
    category: "Olahraga",
    description:
      "Pencak Silat mengenalkan seni bela diri tradisional Indonesia sekaligus membangun kebugaran dan ketangguhan diri. Latihannya melatih koordinasi, kelincahan, pengendalian diri, serta rasa percaya diri. Tempat latihan pastinya belum diketahui, jadi perlu dikonfirmasi ke pihak sekolah.",
    day: "Selasa",
    time: "15.30–17.00",
    start: 930,
    end: 1020,
    location: "Konfirmasi ke sekolah",
    coachName: "Nama pembina belum dikonfirmasi",
    benefits: [
      "Melatih kebugaran, koordinasi, dan ketangkasan.",
      "Membangun disiplin dan pengendalian diri.",
      "Mengenal seni bela diri tradisional Indonesia.",
    ],
    activityText: "DUMMY FOTO KEGIATAN PENCAK SILAT",
    coachText: "DUMMY FOTO PEMBINA PENCAK SILAT",
  },
  {
    id: "futsal",
    name: "Futsal",
    category: "Olahraga",
    description:
      "Futsal adalah olahraga tim yang melatih kekompakan, kelincahan, strategi, dan sportivitas. Kegiatan ini seru untuk kamu yang senang bergerak aktif dan bekerja sama mencapai tujuan bersama. Lapangan tempat latihan pastinya belum diketahui, jadi perlu dikonfirmasi ke pihak sekolah.",
    day: "Jumat",
    time: "16.00–17.30",
    start: 960,
    end: 1050,
    location: "Lapangan sekolah (konfirmasi)",
    coachName: "Nama pembina belum dikonfirmasi",
    benefits: [
      "Melatih kerja sama dan komunikasi tim.",
      "Mengembangkan kelincahan dan kebugaran.",
      "Belajar sportivitas dan disiplin.",
    ],
    activityText: "DUMMY FOTO KEGIATAN FUTSAL",
    coachText: "DUMMY FOTO PEMBINA FUTSAL",
  },
  {
    id: "pmr",
    name: "PMR",
    category: "Kemanusiaan",
    description:
      "PMR (Palang Merah Remaja) menumbuhkan kepedulian terhadap sesama sambil mempelajari dasar pertolongan pertama. Anggotanya belajar empati, ketenangan, dan kerja sama saat membantu orang lain. Lokasi kegiatannya belum diketahui secara pasti, jadi perlu dikonfirmasi ke pihak sekolah.",
    day: "Kamis",
    time: "15.30–17.00",
    start: 930,
    end: 1020,
    location: "Konfirmasi ke sekolah",
    coachName: "Nama pembina belum dikonfirmasi",
    benefits: [
      "Menumbuhkan empati dan kepedulian sosial.",
      "Mengenal dasar pertolongan pertama melalui pelatihan terarah.",
      "Melatih kerja sama, ketenangan, dan tanggung jawab.",
    ],
    activityText: "DUMMY FOTO KEGIATAN PMR",
    coachText: "DUMMY FOTO PEMBINA PMR",
  },
];
function getScheduleConflicts(club) {
  return clubs.filter(
    (other) =>
      other.id !== club.id &&
      other.day === club.day &&
      club.start < other.end &&
      other.start < club.end,
  );
}
function formatConflictNote(club) {
  const conflicts = getScheduleConflicts(club);
  if (conflicts.length)
    return {
      conflict: true,
      text: `Jadwal contoh bentrok dengan ${conflicts.map((item) => item.name).join(" dan ")}.`,
    };
  return {
    conflict: false,
    text: "Tidak bentrok dengan ekskul lain berdasarkan jadwal contoh ini.",
  };
}

const grid = document.querySelector("#clubGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const dialog = document.querySelector("#detailDialog");
const dialogContent = document.querySelector("#dialogContent");
const toast = document.querySelector("#toast");
let activeFilter = "Semua";
let toastTimer;
function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
}
function iconCalendar() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M7.5 3v4M16.5 3v4M3.5 10h17"/></svg>';
}
function iconPin() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
}
function renderClubs() {
  const query = searchInput.value.trim().toLocaleLowerCase("id");
  const visible = clubs.filter(
    (club) =>
      (activeFilter === "Semua" || club.category === activeFilter) &&
      `${club.name} ${club.category} ${club.description} ${club.location} ${club.benefits.join(" ")}`
        .toLocaleLowerCase("id")
        .includes(query),
  );
  resultCount.textContent = visible.length;
  grid.innerHTML = visible
    .map((club) => {
      const status = formatConflictNote(club);
      return `<article class="club-card">
    <div class="club-image-wrap dummy-media">
      <strong>DUMMY FOTO KEGIATAN</strong>
      <small>${escapeHTML(club.name)}</small>
      <span class="category-badge">${escapeHTML(club.category)}</span>
    </div>
    <div class="club-content"><div class="club-title-row"><h3>${escapeHTML(club.name)}</h3></div>
    <p class="club-description">${escapeHTML(club.description)}</p>
    <div class="club-meta">${iconCalendar()}<span>${escapeHTML(club.day)}, ${escapeHTML(club.time)}</span></div>
    <div class="schedule-status ${status.conflict ? "schedule-conflict" : "schedule-clear"}">${status.conflict ? "JADWAL BENTROK" : "JADWAL TIDAK BENTROK"}<p>${escapeHTML(status.text)}</p></div>
    <div class="club-meta">${iconPin()}<span>${escapeHTML(club.location)}</span></div>
    <div class="club-footer">
      <span>Kenali kegiatannya</span>
      <button class="detail-link" data-detail="${club.id}" aria-label="Lihat detail ${escapeHTML(club.name)}">Lihat detail <span>↗</span></button>
    </div></div></article>`;
    })
    .join("");
  emptyState.hidden = visible.length > 0;
  grid.hidden = visible.length === 0;
}
function openDetail(id) {
  const club = clubs.find((item) => item.id === id);
  if (!club) return;
  const status = formatConflictNote(club);
  dialogContent.innerHTML = `
    <div class="dialog-body">
      <span class="dialog-category">${escapeHTML(club.category)} · EKSTRAKURIKULER</span>
      <h2 id="dialogTitle">${escapeHTML(club.name)}</h2>
      <div class="dialog-intro">
        <div class="dialog-intro-copy">
          <p>${escapeHTML(club.description)}</p>
        </div>
        <div class="dialog-intro-media dummy-media">
          <strong>${escapeHTML(club.activityText)}</strong>
          <small>Dummy foto kegiatan</small>
        </div>
      </div>
      <h3>Foto pembina</h3>
      <div class="coach-profile">
        <div class="coach-photo dummy-media">
          <strong>${escapeHTML(club.coachText)}</strong>
        </div>
        <div class="coach-details">
          <span>Nama pembina</span>
          <strong>${escapeHTML(club.coachName)}</strong>
          <small>Data nama dan foto pembina belum dikonfirmasi pihak sekolah.</small>
        </div>
      </div>
      <div class="detail-info-grid">
        <div class="detail-info"><span>Jadwal contoh</span><strong>${escapeHTML(club.day)}<br>${escapeHTML(club.time)}</strong></div>
        <div class="detail-info"><span>Lokasi</span><strong>${escapeHTML(club.location)}</strong></div>
        <div class="detail-info"><span>Pembina</span><strong>${escapeHTML(club.coachName)}</strong></div>
        <div class="detail-info"><span>Kategori</span><strong>${escapeHTML(club.category)}</strong></div>
      </div>
      <div class="schedule-status ${status.conflict ? "schedule-conflict" : "schedule-clear"}">${status.conflict ? "JADWAL BENTROK" : "JADWAL TIDAK BENTROK"}<p>${escapeHTML(status.text)}</p></div>
      <h3>Manfaat dan hal yang bisa dikembangkan</h3>
      <ul class="dialog-benefits">${club.benefits.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
      <button class="button button-green" id="joinInfoButton">Informasi bergabung <span>→</span></button>
    </div>
  `;
  dialog.showModal();
  document.querySelector("#joinInfoButton").addEventListener("click", () => {
    dialog.close();
    showToast(
      "Akan ke direct ke WhatsApp Pembina",
    );
  });
}
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3600);
}
searchInput.addEventListener("input", renderClubs);
filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderClubs();
  }),
);
grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail]");
  if (button) openDetail(button.dataset.detail);
});
document.querySelector("#resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  activeFilter = "Semua";
  filterButtons.forEach((button) => {
    const selected = button.dataset.filter === "Semua";
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderClubs();
  searchInput.focus();
});
document
  .querySelector("#dialogClose")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Tutup navigasi" : "Buka navigasi",
  );
});
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }),
);
renderClubs();
