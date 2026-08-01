document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('lightbox-overlay');
    const overlayImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    if (!overlay || !overlayImg || !closeBtn) return;

    const images = Array.from(document.querySelectorAll('.gallery-item img'));
    let currentIndex = -1;

    function showImage(index) {
        if (!images.length) return;
        currentIndex = (index + images.length) % images.length;
        const img = images[currentIndex];
        overlayImg.src = img.src;
        overlayImg.alt = img.alt || '';
    }

    function openLightbox(index) {
        showImage(index);
        overlay.classList.add('open');
    }

    function closeLightbox() {
        overlay.classList.remove('open');
        overlayImg.src = '';
        currentIndex = -1;
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex + 1);
        });
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
});
