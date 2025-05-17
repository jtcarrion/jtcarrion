document.addEventListener('DOMContentLoaded', function() {
    // Only get slides that end with _banner.png
    const slides = Array.from(document.querySelectorAll('.banner-slide')).filter(slide => {
        const bgImage = slide.style.backgroundImage;
        return bgImage && bgImage.includes('_banner.png');
    });

    // If no valid slides found, exit
    if (slides.length === 0) {
        console.warn('No valid banner images found. Make sure images end with _banner.png');
        return;
    }

    let currentSlide = 0;
    const slideInterval = 3000; // Change slide every 3 seconds

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Start the slideshow
    setInterval(nextSlide, slideInterval);
}); 