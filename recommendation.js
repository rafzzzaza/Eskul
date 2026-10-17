const form = document.querySelector("#interestForm");
const steps = [...document.querySelectorAll(".question-step")];
const prevButton = document.querySelector("#prevQuestion");
const quizError = document.querySelector("#quizError");
const progressBar = document.querySelector("#progressBar");
const stepLabel = document.querySelector("#stepLabel");
const progressPercent = document.querySelector("#progressPercent");
const quizCard = document.querySelector("#quizCard");
const resultsSection = document.querySelector("#recommendationResults");
const recommendationList = document.querySelector("#recommendationList");
const retakeButton = document.querySelector("#retakeQuiz");
let currentStep = 0;
let autoAdvanceTimeout;

const clubRecommendations = {
  paskibra: {
    id: "paskibra",
    name: "Paskibra",
    category: "Kepemimpinan",
    description:
      "Melatih kedisiplinan, tanggung jawab, kekompakan, dan jiwa kepemimpinan.",
    reason:
      "Cocok jika kamu suka kegiatan terstruktur, disiplin, dan kerja sama.",
  },
  panahan: {
    id: "panahan",
    name: "Panahan",
    category: "Olahraga",
    description: "Mengasah fokus, ketangkasan, ketenangan, dan akurasi.",
    reason: "Cocok jika kamu ingin melatih fokus, kesabaran, dan koordinasi.",
  },
  rohis: {
    id: "rohis",
    name: "Rohis",
    category: "Keagamaan",
    description: "Memperkuat iman, akhlak, dan ukhuwah.",
    reason:
      "Cocok jika kamu ingin bertumbuh secara rohani dan mempererat kebersamaan.",
  },
  pencakSilat: {
    id: "pencak-silat",
    name: "Pencak Silat",
    category: "Olahraga",
    description:
      "Seni bela diri Indonesia untuk mengembangkan kebugaran dan pengendalian diri.",
    reason:
      "Cocok jika kamu ingin mengembangkan kebugaran, disiplin, dan ketangguhan diri.",
  },
  futsal: {
    id: "futsal",
    name: "Futsal",
    category: "Olahraga",
    description:
      "Olahraga tim yang melatih kekompakan, kelincahan, dan semangat.",
    reason:
      "Cocok jika kamu menikmati permainan tim, gerak aktif, dan strategi bersama.",
  },
  pmr: {
    id: "pmr",
    name: "PMR",
    category: "Kemanusiaan",
    description:
      "Kegiatan kemanusiaan yang menumbuhkan kepedulian dan mengenalkan pertolongan pertama.",
    reason:
      "Cocok jika kamu peduli pada orang lain dan tertarik belajar keterampilan pertolongan pertama melalui pelatihan.",
  },
};
function selectedValue(name) {
  return form.querySelector(`input[name="${name}"]:checked`)?.value || "";
}
function updateStep() {
  steps.forEach((step, index) =>
    step.classList.toggle("active", index === currentStep),
  );
  const progress = Math.round(((currentStep + 1) / steps.length) * 100);
  progressBar.style.width = `${progress}%`;
  stepLabel.textContent = `PERTANYAAN ${currentStep + 1} DARI ${steps.length}`;
  progressPercent.textContent = `${progress}%`;
  prevButton.disabled = currentStep === 0;
  quizError.hidden = true;
  const note = document.querySelector("#quizAutoNote");
  if (note)
    note.textContent =
      currentStep === steps.length - 1
        ? "Jawaban terakhir dipilih? Hasil akan muncul otomatis."
        : "Pilih jawaban untuk lanjut otomatis.";
}
function stepIsAnswered() {
  return Boolean(steps[currentStep].querySelector("input:checked"));
}
function goNext() {
  if (!stepIsAnswered()) {
    quizError.hidden = false;
    return;
  }
  if (currentStep < steps.length - 1) {
    currentStep += 1;
    updateStep();
  } else {
    showRecommendations();
  }
}
function goPrevious() {
  if (currentStep > 0) {
    currentStep -= 1;
    updateStep();
  }
}
function buildRecommendations() {
  const scores = { Kepemimpinan: 0, Olahraga: 0, Keagamaan: 0, Kemanusiaan: 0 };
  ["interest", "activity", "goal"].forEach((name) => {
    const value = selectedValue(name);
    if (scores[value] !== undefined) scores[value] += 3;
  });
  if (selectedValue("style") === "tim") {
    scores.Kepemimpinan += 1;
    scores.Kemanusiaan += 1;
    scores.Olahraga += 1;
  }
  if (selectedValue("style") === "mandiri") {
    scores.Olahraga += 1;
    scores.Keagamaan += 1;
  }
  const experience = selectedValue("experience");
  if (experience === "disiplin") scores.Kepemimpinan += 2;
  if (experience === "tantangan") scores.Olahraga += 2;
  if (experience === "rohani") scores.Keagamaan += 2;
  if (experience === "peduli") scores.Kemanusiaan += 2;
  const rankedCategories = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([category]) => category);
  const categoryToClubs = {
    Kepemimpinan: ["paskibra"],
    Olahraga: ["panahan", "pencakSilat", "futsal"],
    Keagamaan: ["rohis"],
    Kemanusiaan: ["pmr"],
  };
  const rankedIds = [
    ...new Set(
      rankedCategories.flatMap((category) => categoryToClubs[category]),
    ),
  ];
  const topCategory = rankedCategories[0];
  const topScore = scores[topCategory];
  return {
    topCategory,
    clubs: rankedIds.slice(0, 3).map((id, index) => ({
      ...clubRecommendations[id],
      rank: index + 1,
      match: Math.max(
        55,
        Math.min(98, Math.round((topScore / 11) * 100) - index * 11),
      ),
    })),
  };
}
function showRecommendations() {
  if (!stepIsAnswered()) {
    quizError.hidden = false;
    return;
  }
  const { topCategory, clubs } = buildRecommendations();
  const descriptions = {
    Kepemimpinan:
      "Kamu tampaknya tertarik pada kedisiplinan, tanggung jawab, dan kerja sama. Paskibra bisa menjadi pilihan untuk kamu kenali.",
    Olahraga:
      "Kamu tampaknya menikmati gerak aktif, tantangan fisik, dan latihan keterampilan. Coba kenali Panahan, Pencak Silat, atau Futsal.",
    Keagamaan:
      "Kamu tampaknya ingin bertumbuh secara rohani dan membangun kebersamaan. Rohis bisa menjadi pilihan yang relevan.",
    Kemanusiaan:
      "Kamu tampaknya punya ketertarikan pada kepedulian dan membantu sesama. PMR bisa menjadi pilihan untuk kamu pelajari.",
  };
  recommendationList.innerHTML =
    `<div class="top-match">
      <span class="top-match-icon">✦</span>
      <div>
        <span>ARAH MINAT UTAMAMU</span>
        <h3>${topCategory}</h3>
        <p>${descriptions[topCategory]}</p>
      </div>
    </div>` +
    clubs
      .map(
        (club) =>
          `<article class="recommendation-card ${club.rank === 1 ? "recommendation-card-primary" : ""}">
            <div class="recommendation-dummy-media">
              <strong>DUMMY FOTO KEGIATAN</strong>
              <small>${club.name}</small>
            </div>
            <div class="recommendation-card-copy">
              <div class="recommendation-card-meta"><span>${club.category}</span>${club.rank === 1 ? "<strong>Paling cocok</strong>" : ""}</div>
              <h3>${club.name}</h3>
              <p>${club.description}</p>
              <small>${club.reason}</small>
            </div>
          </article>`,
      )
      .join("");
  quizCard.hidden = true;
  resultsSection.hidden = false;
  document.querySelector(".quiz-heading").hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function resetQuiz() {
  clearTimeout(autoAdvanceTimeout);
  form.reset();
  currentStep = 0;
  updateStep();
  resultsSection.hidden = true;
  quizCard.hidden = false;
  document.querySelector(".quiz-heading").hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
prevButton.addEventListener("click", () => {
  clearTimeout(autoAdvanceTimeout);
  goPrevious();
});
retakeButton.addEventListener("click", resetQuiz);
form.addEventListener("change", (event) => {
  quizError.hidden = true;
  if (event.target.matches("input[type=radio]") && event.target.checked) {
    clearTimeout(autoAdvanceTimeout);
    const selectedStep = currentStep;
    autoAdvanceTimeout = setTimeout(() => {
      if (currentStep !== selectedStep || !stepIsAnswered()) return;
      goNext();
    }, 350);
  }
});
updateStep();
