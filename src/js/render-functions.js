import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { gallery } from '../main';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function renderPhotos(data) {
  const markup = data.hits
    .map(data => {
      return `<li class="gallery-item"><a href="${data.largeImageURL}">
        <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
        <div class="modat-text">
          <div class="modal-element"><p>Likes</p><span>${data.likes}</span></div>
          <div class="modal-element"><p>Views</p><span>${data.views}</span></div>
          <div class="modal-element"><p>Comments</p><span>${data.comments}</span></div>
          <div class="modal-element"><p>Downloads</p><span>${data.downloads}</span></div>
        </div>
      </li>`;
    })
    .join('');

  if (lightbox) {
    lightbox.destroy();
  }

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  lightbox.on('show.simplelightbox', function (e) {
    const { alt } = e.target.querySelector('img');
    e.caption.innerHTML = alt;
  });
  lightbox.refresh();
}
