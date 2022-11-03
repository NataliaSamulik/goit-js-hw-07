import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryImgMarkup(galleryItems);
galleryList.innerHTML = galleryMarkup;

function createGalleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    })
    .join('');
}

galleryList.addEventListener('click', onBigImgOpen);

function onBigImgOpen(evt) {
  evt.preventDefault();
  console.log(evt);

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  console.log(evt.target);
  const instance = basicLightbox.create(`<img src = ${evt.target.dataset.source}>`);
  instance.show();
}

console.log(galleryItems);
