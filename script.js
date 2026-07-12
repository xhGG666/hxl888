const header = document.querySelector("[data-header]");
const progressBar = document.querySelector(".reading-progress span");
const revealItems = document.querySelectorAll("[data-reveal]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector(".lightbox-close");
const photoButtons = document.querySelectorAll("[data-full]");

const updateScrollUi = () => {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;

  header?.classList.toggle("is-scrolled", scrollTop > 24);
  progressBar?.style.setProperty("transform", `scaleX(${progress})`);
};

updateScrollUi();
window.addEventListener("scroll", updateScrollUi, { passive: true });
window.addEventListener("resize", updateScrollUi);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const resetLightbox = () => {
  document.body.classList.remove("lightbox-open");
  if (!lightboxImage) return;
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "";
};

const closeLightbox = () => {
  if (!lightbox?.open) return;
  lightbox.close();
  resetLightbox();
};

photoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = button.dataset.full ?? "";
    lightboxImage.alt = button.dataset.alt ?? "黄晓璐的照片";
    document.body.classList.add("lightbox-open");
    lightbox.showModal();
  });
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

lightbox?.addEventListener("close", () => {
  resetLightbox();
});

lightbox?.addEventListener("cancel", resetLightbox);

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
