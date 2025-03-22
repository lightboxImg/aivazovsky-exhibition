
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const thumbnails = document.querySelectorAll('.gallery-grid .thumb');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.getAttribute('data-full');
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
