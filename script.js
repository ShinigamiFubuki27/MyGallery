const galleryData = [
  { id: 1, type: "image", category: "Vtuber", title: "Shirakami Fubuki X Ookami Mio", desc: "", file: "gambar/Vtuber/1.jpg" },
  { id: 2, type: "image", category: "Vtuber", title: "Shirakami Fubuki", desc: "Fubuki in shrine", file: "gambar/Vtuber/2.jpg" },
  { id: 3, type: "image", category: "Vtuber", title: "Nanashi Mumei", desc: "Nanashi Mumei make a wish", file: "gambar/Vtuber/3.jpg" },
  { id: 4, type: "image", category: "Vtuber", title: "Kurokami Fubuki", desc: "Sister's Shirakami Fubuki", file: "gambar/Vtuber/4.jpg" },
  { id: 5, type: "image", category: "Vtuber", title: "Family time", desc: "", file: "gambar/Vtuber/5.jpg" },
  { id: 6, type: "image", category: "Vtuber", title: "Aitsuki Nakuru", desc: "Thubnail myocerly", file: "gambar/Vtuber/6.jpg" },
  { id: 7, type: "image", category: "Vtuber", title: "Kurokami Fubuki", desc: "Art in Fubuking animation", file: "gambar/Vtuber/7.jpg" },
  { id: 8, type: "image", category: "Vtuber", title: "Kanata x Towa", desc: "", file: "gambar/Vtuber/8.png" },
  { id: 9, type: "image", category: "Vtuber", title: "Nakiri Ayame", desc: "", file: "gambar/Vtuber/9.png" },
  { id: 10, type: "image", category: "Vtuber", title: "Shirakami Fubuki", desc: "", file: "gambar/Vtuber/11.jpg" },
  { id: 11, type: "image", category: "Vtuber", title: "Pokejan", desc: "Mini game ini HoloDream", file: "gambar/Vtuber/10.png" },
  { id: 12, type: "image", category: "Manosaba", title: "witch Ema", desc: "", file: "gambar/manosaba/1.jpg" },
  { id: 13, type: "image", category: "Manosaba", title: "Witch Ema2", desc: "", file: "gambar/manosaba/2.jpg" },
  { id: 14, type: "image", category: "Manosaba", title: "Manosaba", desc: "Family time", file: "gambar/manosaba/3.png" },
  { id: 15, type: "image", category: "Manosaba", title: "Manosaba collaboration", desc: "Cafe", file: "gambar/manosaba/4.jpg" },
  { id: 16, type: "image", category: "Manosaba", title: "Nikaido Hiro", desc: "Nikaido hiro Suicide", file: "gambar/manosaba/5.jpg" },
  { id: 17, type: "image", category: "Manosaba", title: "Manosaba Anniversery 1th", desc: "Manosaba art Anniversery", file: "gambar/manosaba/6.jpg" },
  { id: 18, type: "image", category: "Manosaba", title: "Yogasaki Noah", desc: "Yogasaki Noah death", file: "gambar/manosaba/7.jpg" },
  { id: 19, type: "image", category: "Manosaba", title: "Ema x Hiro x Yuki", desc: "Broken Promise", file: "gambar/manosaba/8.jpg" },
  { id: 20, type: "image", category: "Manosaba", title: "Witch Ema(Bad end)", desc: "Minna Shinu ba ii", file: "gambar/manosaba/10.png" },
  { id: 21, type: "image", category: "touhou", title: "Sakuya Izayoi", desc: "Night of Knights", file: "gambar/touhou/1.jpg" },
  { id: 22, type: "image", category: "touhou", title: "Koishi Komeiji", desc: "", file: "gambar/touhou/2.jpg" },
  { id: 23, type: "image", category: "touhou", title: "Koishi Komeiji", desc: "", file: "gambar/touhou/3.jpg" },
  { id: 24, type: "image", category: "touhou", title: "Koishi Komeiji", desc: "", file: "gambar/touhou/4.jpg" },
  { id: 25, type: "audio", category: "touhou", title: "Last Remote R3 Music box", desc: "Koishi Komeiji's Theme", file: "gambar/touhou/10.mp3" },
  { id: 26, type: "image", category: "lainnya", title: "Alice", desc: "", file: "gambar/lainnya/1.jpg" },
  { id: 27, type: "image", category: "lainnya", title: "Tuyu", desc: "All Tuyu Character", file: "gambar/lainnya/3.jpg" },
  { id: 28, type: "image", category: "lainnya", title: "Under kids", desc: "Under kids character", file: "gambar/lainnya/4.jpg" },
  { id: 29, type: "video", category: "lainnya", title: "sparxie", desc: "I get you", file: "gambar/lainnya/5.mp4" },
  { id: 30, type: "image", category: "umamusume", title: "Stay Gold", desc: "", file: "gambar/Umamusume1/1.jpg" },
  { id: 31, type: "image", category: "umamusume", title: "Manhatahan Cafe X Agnes Tacyon", desc: "", file: "gambar/Umamusume1/2.jpg" },
  { id: 32, type: "image", category: "umamusume", title: "Kitasan Black", desc: "", file: "gambar/Umamusume1/3.jpg" },
  { id: 33, type: "image", category: ["gundam", "Vtuber"], title: "Hakui Koyori X FREEDOM GUNDAM", desc: "Hololive X Gundam", file: "gambar/gundam/GxH_KV_UP_hakuikoyori.jpg" },
  { id: 34, type: "image", category: ["gundam", "Vtuber"], title: "Houshou Marine X CROSSBONE GUNDAM X1", desc: "Hololive X Gundam", file: "gambar/gundam/GxH_KV_UP_houshoumarine.jpg" },
  { id: 35, type: "image", category: ["gundam", "Vtuber"], title: "IRYS X DESTINY GUNDAM", desc: "Hololive X Gundam", file: "gambar/gundam/GxH_KV_UP_irys.jpg" },
  { id: 36, type: "image", category: ["gundam", "Vtuber"], title: "Mori Calliope X GUNDAM EPYON", desc: "Hololive X Gundam", file: "gambar/gundam/GxH_KV_UP_moricalliope.jpg" },
  { id: 37, type: "image", category: ["gundam", "Vtuber"], title: "Oozora Subaru X WING GUNDAM ZERO [EW]", desc: "Hololive X Gundam", file: "gambar/gundam/GxH_KV_UP_oozorasubaru.jpg" },
  { id: 38, type: "image", category: ["gundam", "Vtuber"], title: "Rindo Chihaya X UNICORN GUNDAM 02 BANSHEE NOAN", desc: "Hololive X Gundam", file: "gambar/gundam/GxH_KV_UP_rindochihaya.jpg" },
  { id: 39, type: "image", category: ["gundam", "Vtuber"], title: "Todoroki Hajime X GUNDAM ASTRAY GOLD FRAME AMATSU MINA", desc: "Hololive X Gundam", file: "gambar/gundam/GxH_KV_UP_todorokihajime.jpg" },
  { id: 40, type: "image", category: ["gundam", "Vtuber"], title: "Tsunomaki Watame X POVIDENCE GUNDAM", desc: "Hololive X Gundam", file: "gambar/gundam/GxH_KV_UP_tsunomakiwatame.jpg" },
];

// ===== STATE =====
let currentFilter = "all";
let selectedTypes = new Set(["all"]);
let currentSearchTerm = "";
let currentLightboxIndex = -1;
let currentLightboxList = [];
let idleTimer = null;

// ===== DOM REFS =====
const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightboxContent");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const searchInputMain = document.getElementById("searchInputMain");
const searchClear = document.getElementById("searchClear");
const searchBtn = document.getElementById("searchBtn");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const topNav = document.getElementById("topNav");
const backToGalleryBtn = document.getElementById("backToGallery");
const filterBtns = document.querySelectorAll(".filter-btn");
const typeBtns = document.querySelectorAll(".type-btn");
const sidebarLinks = document.querySelectorAll(".sidebar-link");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

// ===== BINTANG =====
function createStars() {
  const starsContainer = document.getElementById("stars");
  const count = 150;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.setProperty("--duration", Math.random() * 3 + 2 + "s");
    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.opacity = Math.random() * 0.5 + 0.1;
    fragment.appendChild(star);
  }
  starsContainer.appendChild(fragment);
}
createStars();

// ===== SIDEBAR =====
function openSidebar() {
  sidebar.classList.add("show");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openSidebar);
overlay.addEventListener("click", closeSidebar);

// ===== PAGE SWITCHING =====
function switchPage(pageName) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  sidebarLinks.forEach((l) => l.classList.remove("active"));

  document.getElementById(`page-${pageName}`).classList.add("active");
  document.querySelector(`.sidebar-link[data-page="${pageName}"]`).classList.add("active");

  if (backToGalleryBtn) {
    backToGalleryBtn.classList.toggle("hidden", pageName !== "contact");
  }

  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    switchPage(link.dataset.page);
  });
});

if (backToGalleryBtn) {
  backToGalleryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchPage("gallery");
  });
}

// ===== SEARCH =====
searchBtn.addEventListener("click", () => {
  const container = document.querySelector(".search-main-container");
  if (container) {
    container.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => searchInputMain.focus(), 400);
  }
});

searchInputMain.addEventListener("input", (e) => {
  currentSearchTerm = e.target.value;
  searchClear.classList.toggle("hidden", currentSearchTerm.trim() === "");
  renderGallery();
});

searchClear.addEventListener("click", () => {
  searchInputMain.value = "";
  currentSearchTerm = "";
  searchClear.classList.add("hidden");
  searchInputMain.focus();
  renderGallery();
});

// ===== UPDATE UI TIPE =====
function updateTypeButtonsUI() {
  typeBtns.forEach((btn) => {
    const type = btn.dataset.type;
    btn.classList.remove("active", "multi-active");

    if (selectedTypes.size === 0 || selectedTypes.has("all")) {
      if (type === "all") btn.classList.add("active");
    } else {
      if (type !== "all" && selectedTypes.has(type)) {
        btn.classList.add("active", "multi-active");
      }
    }
  });
}

// ===== FILTER =====
function getFilteredItems() {
  let items = galleryData;

  if (selectedTypes.size > 0 && !selectedTypes.has("all")) {
    items = items.filter((item) => selectedTypes.has(item.type));
  }

  if (currentFilter !== "all") {
    items = items.filter((item) => {
      if (Array.isArray(item.category)) {
        return item.category.includes(currentFilter);
      }
      return item.category === currentFilter;
    });
  }

  if (currentSearchTerm.trim() !== "") {
    const term = currentSearchTerm.toLowerCase().trim();
    items = items.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.desc.toLowerCase().includes(term) ||
        (Array.isArray(item.category)
          ? item.category.some((cat) => cat.toLowerCase().includes(term))
          : item.category.toLowerCase().includes(term))
    );
  }

  return items;
}

// ===== RENDER CARD =====
function createMediaElement(item, forThumb = false) {
  const wrapper = document.createElement("div");
  wrapper.className = "media-thumb";

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.file;
    img.alt = item.title;
    img.loading = "lazy";
    img.decoding = "async";
    img.fetchPriority = "low";
    wrapper.appendChild(img);
  } else if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.file;
    video.muted = true;
    video.playsInline = true;
    video.preload = "none";
    wrapper.appendChild(video);
    if (forThumb) {
      const icon = document.createElement("div");
      icon.className = "play-icon";
      icon.textContent = "▶";
      wrapper.appendChild(icon);
    }
  } else if (item.type === "audio") {
    const icon = document.createElement("div");
    icon.style.cssText =
      "font-size:4rem; color:white; background:#8b5cf6; width:100%; height:100%; display:flex; align-items:center; justify-content:center;";
    icon.textContent = "🎵";
    wrapper.appendChild(icon);
  }
  return wrapper;
}

function renderCard(item) {
  const div = document.createElement("div");
  div.className = `gallery-item type-${item.type}`;
  div.dataset.id = item.id;

  div.appendChild(createMediaElement(item, true));

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h3");
  title.textContent = item.title;

  const desc = document.createElement("p");
  desc.textContent = item.desc;

  const fileType = document.createElement("div");
  fileType.className = "file-type";
  const typeMap = { image: "Image", video: "Video", audio: "Audio" };
  fileType.textContent = typeMap[item.type] || item.type;

  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(fileType);
  div.appendChild(content);

  return div;
}

function renderGallery() {
  const filtered = getFilteredItems();
  galleryGrid.innerHTML = "";

  if (filtered.length === 0) {
    galleryGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#94a3b8; padding:2rem;">Tidak ada item yang cocok.</p>`;
  } else {
    const fragment = document.createDocumentFragment();
    filtered.forEach((item) => fragment.appendChild(renderCard(item)));
    galleryGrid.appendChild(fragment);
  }

  updateResultInfo(filtered);
}

// ===== UPDATE RESULT INFO =====
function updateResultInfo(filtered) {
  const resultText = document.getElementById("resultText");
  const statTotal = document.getElementById("statTotal");
  const statCategories = document.getElementById("statCategories");
  const statTypes = document.getElementById("statTypes");

  const total = galleryData.length;

  if (statTotal) statTotal.textContent = total;

  if (statCategories) {
    const uniqueCategories = new Set();
    galleryData.forEach((item) => {
      if (Array.isArray(item.category)) {
        item.category.forEach((c) => uniqueCategories.add(c));
      } else {
        uniqueCategories.add(item.category);
      }
    });
    statCategories.textContent = uniqueCategories.size;
  }

  if (statTypes) {
    const uniqueTypes = new Set();
    galleryData.forEach((item) => uniqueTypes.add(item.type));
    statTypes.textContent = uniqueTypes.size;
  }

  if (resultText) {
    const shown = filtered ? filtered.length : total;
    resultText.textContent =
      shown === total
        ? `Showing all ${total} items`
        : `Showing ${shown} of ${total} items`;
  }
}

// ===== CUSTOM AUDIO PLAYER =====
function createCustomAudioPlayer(src, title, desc) {
  const container = document.createElement("div");
  container.className = "custom-audio-player";
  container.innerHTML = `
      <div class="audio-controls">
          <button class="play-btn" id="playBtn">▶</button>
          <div class="time-display" id="timeDisplay">0:00 / 0:00</div>
          <div class="progress-container" id="progressContainer">
              <div class="progress-bar" id="progressBar"></div>
          </div>
          <div class="volume-control">
              <span class="volume-icon">🔊</span>
              <input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="0.8" />
          </div>
      </div>
  `;

  const audio = document.createElement("audio");
  audio.src = src;
  audio.preload = "metadata";
  audio.volume = 0.8;

  const playBtn = container.querySelector("#playBtn");
  const progressBar = container.querySelector("#progressBar");
  const progressContainer = container.querySelector("#progressContainer");
  const timeDisplay = container.querySelector("#timeDisplay");
  const volumeSlider = container.querySelector("#volumeSlider");

  let isDragging = false;

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  function updateProgress() {
    if (!isDragging) {
      const percent = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
      progressBar.style.width = percent + "%";
    }
    timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  }

  audio.addEventListener("loadedmetadata", () => {
    timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
  });
  audio.addEventListener("timeupdate", updateProgress);

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  });

  audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
    progressBar.style.width = "0%";
    timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
  });

  progressContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = progressContainer.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const clamped = Math.min(1, Math.max(0, x));
    if (audio.duration) {
      audio.currentTime = clamped * audio.duration;
      progressBar.style.width = clamped * 100 + "%";
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const rect = progressContainer.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const clamped = Math.min(1, Math.max(0, x));
      if (audio.duration) {
        audio.currentTime = clamped * audio.duration;
        progressBar.style.width = clamped * 100 + "%";
      }
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = parseFloat(volumeSlider.value);
  });

  audio.play().catch(() => {});
  playBtn.textContent = "⏸";

  container.audio = audio;
  audio.addEventListener("play", () => { playBtn.textContent = "⏸"; });
  audio.addEventListener("pause", () => { playBtn.textContent = "▶"; });

  return container;
}

// ===== LIGHTBOX =====
function openLightbox(item) {
  currentLightboxList = getFilteredItems();
  currentLightboxIndex = currentLightboxList.findIndex((d) => d.id === item.id);
  if (currentLightboxIndex === -1) {
    currentLightboxList = [item];
    currentLightboxIndex = 0;
  }
  renderLightboxContent(item);
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
  resetIdleTimer();
}

function renderLightboxContent(item) {
  lightboxContent.innerHTML = "";
  fullscreenBtn.classList.remove("hidden");
  prevArrow.classList.remove("hidden");
  nextArrow.classList.remove("hidden");

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.file;
    img.alt = item.title;
    img.id = "lightboxMedia";
    lightboxContent.appendChild(img);
  } else if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.file;
    video.controls = true;
    video.autoplay = true;
    video.id = "lightboxMedia";
    video.style.maxWidth = "100%";
    video.style.maxHeight = "80vh";
    video.addEventListener("dblclick", () => toggleFullscreen());
    lightboxContent.appendChild(video);
  } else if (item.type === "audio") {
    fullscreenBtn.classList.add("hidden");
    const player = createCustomAudioPlayer(item.file, item.title, item.desc);
    player.id = "lightboxMedia";
    lightboxContent.appendChild(player);
    lightboxContent._audioPlayer = player;
  }

  if (currentLightboxList.length <= 1) {
    prevArrow.classList.add("hidden");
    nextArrow.classList.add("hidden");
  }

  lightboxCaption.textContent = item.desc
    ? `${item.title} — ${item.desc}`
    : item.title;
}

function navigateLightbox(direction) {
  if (currentLightboxList.length <= 1) return;

  const media = lightboxContent.querySelectorAll("video, audio");
  media.forEach((m) => m.pause());
  if (lightboxContent._audioPlayer?.audio) {
    lightboxContent._audioPlayer.audio.pause();
    lightboxContent._audioPlayer.audio.currentTime = 0;
  }
  lightboxContent._audioPlayer = null;

  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) currentLightboxIndex = currentLightboxList.length - 1;
  if (currentLightboxIndex >= currentLightboxList.length) currentLightboxIndex = 0;

  renderLightboxContent(currentLightboxList[currentLightboxIndex]);

  const imgOrVideo = lightboxContent.querySelector("img, video");
  if (imgOrVideo) {
    imgOrVideo.classList.remove("slide-left", "slide-right");
    void imgOrVideo.offsetWidth;
    imgOrVideo.classList.add(direction === -1 ? "slide-left" : "slide-right");
  }
}

function closeLightboxFn() {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    return;
  }

  lightbox.classList.remove("active");
  document.body.style.overflow = "";

  if (lightboxContent._audioPlayer?.audio) {
    lightboxContent._audioPlayer.audio.pause();
    lightboxContent._audioPlayer.audio.currentTime = 0;
  }
  lightboxContent.querySelectorAll("video, audio").forEach((m) => m.pause());
  lightboxContent.innerHTML = "";
  lightboxContent._audioPlayer = null;
  fullscreenBtn.classList.remove("hidden");
  prevArrow.classList.remove("hidden");
  nextArrow.classList.remove("hidden");
  currentLightboxIndex = -1;
  currentLightboxList = [];

  if (idleTimer) clearTimeout(idleTimer);
  lightbox.classList.remove("idle");
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    if (lightbox.requestFullscreen) lightbox.requestFullscreen();
    else if (lightbox.webkitRequestFullscreen) lightbox.webkitRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  }
}

// ===== IDLE DETECTION =====
function resetIdleTimer() {
  lightbox.classList.remove("idle");
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    if (lightbox.classList.contains("active")) {
      lightbox.classList.add("idle");
    }
  }, 2000);
}

// ===== EVENT LISTENERS — FILTER =====
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderGallery();
  });
});

typeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    if (type === "all") {
      selectedTypes.clear();
      selectedTypes.add("all");
    } else {
      selectedTypes.delete("all");
      if (selectedTypes.has(type)) {
        selectedTypes.delete(type);
      } else {
        selectedTypes.add(type);
      }
      if (selectedTypes.size === 0) selectedTypes.add("all");
    }

    updateTypeButtonsUI();
    renderGallery();
  });
});

// ===== EVENT LISTENERS — GALLERY =====
galleryGrid.addEventListener("click", (e) => {
  const itemEl = e.target.closest(".gallery-item");
  if (!itemEl) return;
  const id = parseInt(itemEl.dataset.id);
  const item = galleryData.find((d) => d.id === id);
  if (item) openLightbox(item);
});

// ===== EVENT LISTENERS — LIGHTBOX =====
closeLightbox.addEventListener("click", closeLightboxFn);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightboxFn();
});

prevArrow.addEventListener("click", (e) => {
  e.stopPropagation();
  navigateLightbox(-1);
});

nextArrow.addEventListener("click", (e) => {
  e.stopPropagation();
  navigateLightbox(1);
});

fullscreenBtn.addEventListener("click", toggleFullscreen);

// ===== EVENT LISTENERS — IDLE =====
lightbox.addEventListener("mousemove", resetIdleTimer);
lightbox.addEventListener("touchstart", resetIdleTimer);
lightbox.addEventListener("touchmove", resetIdleTimer);

// ===== EVENT LISTENERS — KEYBOARD (GABUNG) =====
document.addEventListener("keydown", (e) => {
  // Sidebar close
  if (e.key === "Escape" && sidebar.classList.contains("show")) {
    closeSidebar();
    return;
  }

  // Lightbox navigation
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "Escape") closeLightboxFn();
  if (e.key === "ArrowLeft") {
    navigateLightbox(-1);
    resetIdleTimer();
  }
  if (e.key === "ArrowRight") {
    navigateLightbox(1);
    resetIdleTimer();
  }
});

// ===== NAVBAR AUTO-HIDE (THROTTLED) =====
let lastTopScrollY = window.scrollY;
let scrollTicking = false;

window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;

  requestAnimationFrame(() => {
    const currentY = window.scrollY;

    if (currentY < 60) {
      topNav.classList.remove("hide");
    } else if (currentY > lastTopScrollY + 5) {
      topNav.classList.add("hide");
    } else if (currentY < lastTopScrollY - 5) {
      topNav.classList.remove("hide");
    }

    lastTopScrollY = currentY;
    scrollTicking = false;
  });
});

// ===== INIT =====
updateTypeButtonsUI();
renderGallery();