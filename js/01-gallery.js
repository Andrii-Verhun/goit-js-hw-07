import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const elemGallery = galleryItems.map((image) => {
    const elemDiv = document.createElement('div');
    elemDiv.classList.add('gallery__item');

    const elemLink = document.createElement('a');
    elemLink.classList.add('gallery__link');
    elemLink.href = image.original;

    const elemImg = document.createElement('img');
    elemImg.classList.add('gallery__image');
    elemImg.src = image.preview;
    elemImg.alt = image.description;
    elemImg.dataset.source = image.original;

    elemDiv.append(elemLink);
    elemLink.append(elemImg);
    return elemDiv;
});

gallery.append(...elemGallery);

gallery.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') return;
    
    const closeEvent = (e) => {
        if (e.code === 'Escape') {
        modal.close();
    };};

    const modal = basicLightbox.create(`
    <img src="${e.target.dataset.source}" alt="${e.target.alt}">
	`, {
        onShow: () => {
            document.addEventListener('keyup', closeEvent);
        },

        onClose: () => {
            document.removeEventListener('keyup', closeEvent);
        }
    });
    modal.show();
});

