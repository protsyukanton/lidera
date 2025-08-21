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


    /* ---------- Popup ---------- */

    /* Ищем все кнопки открытия popup окон и помещаем их в переменную "popupButtons" */
    const popupButtons = document.querySelectorAll(".open-popup");

    /* Вещаем на каждую кнопку открытия popup-окон событие клик */
    popupButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            /* Получаем атрибут "data-popup" у кнопки, на которую кликнули */
            const popupId = this.getAttribute("data-popup");
            /* Получаем обертку popup-окна, data-popup которого соответствует кнопке, на которую кликнули */
            const popupWrapper = document.querySelector(
                `.popup-wrapper[data-popup="${popupId}"]`
            );
            /* На всвякий случай проверяем, есть ли соответствующее кнопке popup окно и добавляем активный класс для показа */
            if (popupWrapper) {
                popupWrapper.classList.add("popup-wrapper-show");
            }
        });
    });

    /* Получаем все кнопки закрытия popup окон */
    const popupCloseButtons = document.querySelectorAll(".popup__close");

    /* Вещаем на каждую кнопку закрытия popup-окон событие клик */
    popupCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            /* Получаем все обертки popup-окон и удаляем у низ активный класс */
            const popupWrappers = document.querySelectorAll(".popup-wrapper");
            popupWrappers.forEach(function (popupWrapper) {
                popupWrapper.classList.remove("popup-wrapper-show");
            });
        });
    });

    /* 
        Закрытие popup-окна кликом вне его
        Вешаем событие клик на страницу
        Ищем все popup-окна, обертки которых имеют активный класс
    */
    document.addEventListener("click", function (e) {
        const popupWrappersVisible = document.querySelectorAll(
            ".popup-wrapper.popup-wrapper-show"
        );

        /* Проверяем на что мы кликнули, если это popup-окно или его дочерние элементы или кнопка открытия popup-окна, то помещаем в переменные */
        popupWrappersVisible.forEach(function (popupWrapper) {
            const isPopupOrChild =
                e.target.classList.contains("popup") || e.target.closest(".popup");
            const isPopupButton = e.target.classList.contains("open-popup");
            /* Мы должны сделать отрицание наших переменных - если это не окно, его дочерние элементы или кнопка открытия окна, то удаляем активный класс */
            if (!isPopupOrChild && !isPopupButton) {
                popupWrapper.classList.remove("popup-wrapper-show");
            }
        });
    });

});