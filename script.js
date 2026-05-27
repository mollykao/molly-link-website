const tabs = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");
const nav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector("[data-header]");

const panelColors = {
  pet: "linear-gradient(135deg, #fff0dc, #fff9ef)",
  builder: "linear-gradient(135deg, #eaf6ff, #effff9)",
  story: "linear-gradient(135deg, #fff0f6, #fff7e8)",
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === target;
      panel.classList.toggle("active", isActive);
      if (isActive) panel.style.background = panelColors[target];
    });
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

let lastScroll = 0;
window.addEventListener(
  "scroll",
  () => {
    const current = window.scrollY;
    header.style.transform = current > 80 && current > lastScroll ? "translateY(-110%)" : "translateY(0)";
    lastScroll = current;
  },
  { passive: true }
);
