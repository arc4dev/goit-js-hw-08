// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const container = document.querySelector('.gallery');

const showImages = imgs => {
  imgs.forEach(img => {
    const html = `
    <a class="gallery__item" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
    </a>`;
    container.insertAdjacentHTML('beforeend', html);
  });
};
/////////////

showImages(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
