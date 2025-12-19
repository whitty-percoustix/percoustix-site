/* =========================
   Footer year
========================= */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* =========================
   Mobile navigation toggle
========================= */
const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.getElementById("mobile-nav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when a link is clicked
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && !navToggle.contains(e.target)) {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu when resizing back to desktop
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 981px)").matches) {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* =========================
   Pad-card click-to-reveal
   (Why Percoustix)
========================= */
document.querySelectorAll(".pad-card").forEach((card) => {
  const toggleFlip = () => {
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", flipped ? "true" : "false");
  };

  card.addEventListener("click", toggleFlip);

  // Keyboard accessibility (Enter / Space)
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  });
});
