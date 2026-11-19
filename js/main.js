/* ==========================================================
   Candomblé, Roots of Fate - interactions
   Plain JavaScript, no libraries.
   ========================================================== */

// Change this to the real contact email for the film
const CONTACT_EMAIL = "yasmin@example.com";

// Trailer link. Use a YouTube or Vimeo EMBED link, or a local file such as "assets/video/trailer.mp4".
// Example: "https://www.youtube.com/embed/VIDEO_ID"
const TRAILER_URL = "";

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- Nav: solid on scroll + mobile menu + progress bar ---------- */
const nav = $("#nav");
const progress = $("#progress");
const navToggle = $("#navToggle");
const navLinks = $("#navLinks");

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("is-solid", y > 60);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
  // gentle parallax on the hero content
  const content = $(".hero__content");
  if (content && y < window.innerHeight) {
    content.style.transform = `translateY(${y * 0.18}px)`;
    content.style.opacity = 1 - y / (window.innerHeight * 0.9);
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open);
});
$$("a", navLinks).forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
$$(".reveal").forEach(el => revealObserver.observe(el));

/* ---------- Animated counters ---------- */
function runCounter(el) {
  const target = Number(el.dataset.count);
  const duration = 1600;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });
$$("[data-count]").forEach(el => counterObserver.observe(el));

/* ---------- Two terreiros tabs ---------- */
const terreirosSection = $("#terreiros");
$$(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const place = tab.dataset.place;
    $$(".tab").forEach(t => {
      const active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active);
    });
    $$(".panel").forEach(p => p.classList.toggle("is-active", p.dataset.panel === place));
    terreirosSection.dataset.place = place;
  });
});

/* ---------- Gallery filter ---------- */
$$(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    $$(".chip").forEach(c => c.classList.toggle("is-active", c === chip));
    $$(".gallery__item").forEach(item => {
      const tags = item.dataset.tags.split(" ");
      item.classList.toggle("is-hidden", filter !== "all" && !tags.includes(filter));
    });
  });
});

/* ---------- Modals ---------- */
const videoModal = $("#videoModal");
const videoBody = $("#videoBody");
const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");

function openModal(modal) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModals() {
  [videoModal, lightbox].forEach(m => {
    m.classList.remove("is-open");
    m.setAttribute("aria-hidden", "true");
  });
  videoBody.innerHTML = ""; // stops playback
  document.body.style.overflow = "";
}

function openVideo(url, title) {
  if (!url) {
    videoBody.innerHTML =
      `<div class="modal__msg"><strong>${title || "Video"} coming soon</strong>This video will be added shortly.</div>`;
  } else if (/\.(mp4|webm|mov)$/i.test(url)) {
    videoBody.innerHTML = `<video src="${url}" controls autoplay></video>`;
  } else {
    const sep = url.includes("?") ? "&" : "?";
    videoBody.innerHTML =
      `<iframe src="${url}${sep}autoplay=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${title || "Video"}"></iframe>`;
  }
  openModal(videoModal);
}

$$("[data-open-trailer]").forEach(btn =>
  btn.addEventListener("click", () => openVideo(TRAILER_URL, "Trailer")));
$$(".clip").forEach(btn =>
  btn.addEventListener("click", () => openVideo(btn.dataset.video, btn.dataset.title)));

$$(".gallery__item").forEach(item => {
  item.addEventListener("click", () => {
    const img = $("img", item);
    if (!img) return; // placeholder with no photo yet
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    openModal(lightbox);
  });
});

$$("[data-close]").forEach(el => el.addEventListener("click", closeModals));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModals(); });

/* ---------- Contact form (opens the visitor's email app) ---------- */
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent("Candomblé, Roots of Fate: message from " + data.get("name"));
  const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  $("#formNote").textContent = "Thank you. Your email app should open with the message ready to send.";
});

/* ---------- Footer year ---------- */
$("#year").textContent = new Date().getFullYear();
