import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const elemGallery = galleryItems.map((image) => {
    const elemLink = document.createElement('a');
    elemLink.classList.add('gallery__item');
    elemLink.href = image.original;

    const elemImg = document.createElement('img');
    elemImg.classList.add('gallery__image');
    elemImg.src = image.preview;
    elemImg.alt = image.description;
    elemImg.dataset.source = image.original;

    elemLink.append(elemImg);
    return elemLink;
});

gallery.append(...elemGallery);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
});