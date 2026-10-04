// ---------------- NAV SCROLL EFFECT ----------------

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");

  // Adds 'scrolled' class when user scrolls down
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 10);
    });
  }

  // ---------------- MOBILE MENU ----------------

  const hamburger = document.getElementById("hamburger");
  const drawer = document.getElementById("drawer");

  // Opens/closes mobile menu
  if (hamburger && drawer) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      drawer.classList.toggle("open");
    });
  }
});
