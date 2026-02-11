export function initHeaderMenu() {
  const header = document.querySelector(".js-header");
  const toggle = document.querySelector(".js-menu-toggle");
  const overlay = document.querySelector(".js-menu-overlay");

  if (!header || !toggle || !overlay) return;

  const close = () => {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    header.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    header.classList.contains("is-open") ? close() : open();
  });

  overlay.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

document.addEventListener("DOMContentLoaded", initHeaderMenu);