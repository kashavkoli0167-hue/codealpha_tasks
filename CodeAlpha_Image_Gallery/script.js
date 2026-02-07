const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox img");
const counter = document.querySelector("#counter");

let index = 0;

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    index = i;
    openLightbox();
  });
});
function openLightbox() {
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
  updateCounter();
}
function closeLightbox() {
  lightbox.style.display = "none";
}
function nextImage() {
  index = (index + 1) % images.length;
  openLightbox();
}
function prevImage() {
  index = (index - 1 + images.length) % images.length;
  openLightbox();
}
function updateCounter() {
  counter.innerText = `${index + 1}/ ${images.length}`;
}

document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeLightbox();
  }
});

function filterImages(category, btn) {
  document
    .querySelectorAll(".filters button")
    .forEach((btn) => btn.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.style.display =
      category === "all" || item.classList.contains(category)
        ? "block"
        : "none";
  });
}
