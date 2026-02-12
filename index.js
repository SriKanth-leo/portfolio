const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const typingSpan = document.querySelector('.typing');
const text = "Web Developer";
let i = 0;
function type() {
    if (i < text.length) {
        typingSpan.textContent = text.substring(0, i + 1);
        i++;
        setTimeout(type, 120);
    }
}
type();
document.addEventListener('DOMContentLoaded', () => {
    const certLinks = document.querySelectorAll('.cert-link');
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbClose = document.getElementById('lightbox-close');
    function openLightbox(src) {
        lbImg.src = src;
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
        lightbox.setAttribute('aria-hidden', 'true');
        lbImg.src = '';
        document.body.style.overflow = '';
    }
    certLinks.forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            openLightbox(a.href);
        });
    });
    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeLightbox();
    });
});
