window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pagination: true,
        navigationSwipe: true,
        navigationKeys: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
    
    // Manually fix carousel image dimensions
    carousels.forEach(carousel => {
        carousel.on('before:show', state => {
            state.slides.forEach((slide) => {
                let image = slide.querySelector('img');
                if (image) {
                    // Ensure image is properly sized and centered
                    image.style.display = 'block';
                    image.style.margin = '0 auto';
                }
            });
        });
    });
    
    bulmaSlider.attach();
    
    // Ensure GIF animations loop continuously
    document.querySelectorAll('img[src$=".gif"]').forEach(img => {
        img.setAttribute('loop', 'infinite');
    });
});
