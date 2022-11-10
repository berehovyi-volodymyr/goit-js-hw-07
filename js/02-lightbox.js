import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ref = {
  gallery: document.querySelector(".gallery"),
};

const galleryMarkup = creatElementsMarkup();

function creatElementsMarkup() {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}" title="${description}" />
</a>`
    )
      .join("");
}

ref.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
});

