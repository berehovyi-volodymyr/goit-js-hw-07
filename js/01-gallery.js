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
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"/>
            </a>
        </div >`
    )
    .join("");
}

ref.gallery.insertAdjacentHTML("beforeend", galleryMarkup);
ref.gallery.addEventListener('click', onImage)

function onImage(e) {
    if (e.target === e.currentTarget) {
        return
    }
    e.preventDefault()
    const instance = basicLightbox.create(`
		<img src="${e.target.dataset.source}">
	`)
    instance.show()
    document.addEventListener("keydown", closeModal);
    function closeModal({key}) {
    if (key === "Escape") {
        instance.close()
    }
}
}

