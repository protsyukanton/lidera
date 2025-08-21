document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Creative slider ---------- */

    const crerativeSlider = new Swiper('.creative-slider', {
        loop: true,
        pagination: {
            el: '.creative-slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.creative-slider-button-next',
            prevEl: '.creative-slider-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 24,
    });


    /* ---------- Hero video ---------- */

    const player = new Plyr('.hero-video__item', {
        controls: ['play-large']
    });

});