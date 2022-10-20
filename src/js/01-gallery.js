import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

import 'simplelightbox/dist/simple-lightbox.min.css';

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class=gallery__link href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                alt=${description}
            />
        </a>`
  )
  .join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
