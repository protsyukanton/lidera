/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', function () {\n\n    /* ---------- Creative slider ---------- */\n\n    const crerativeSlider = new Swiper('.creative-slider', {\n        loop: true,\n        pagination: {\n            el: '.creative-slider-pagination',\n            clickable: true,\n        },\n        navigation: {\n            nextEl: '.creative-slider-button-next',\n            prevEl: '.creative-slider-button-prev',\n        },\n        slidesPerView: 4,\n        spaceBetween: 24,\n    });\n\n\n    /* ---------- Hero video ---------- */\n\n    const player = new Plyr('.hero-video__item', {\n        controls: ['play-large']\n    });\n\n\n    /* ---------- Popup ---------- */\n\n    /* Ищем все кнопки открытия popup окон и помещаем их в переменную \"popupButtons\" */\n    const popupButtons = document.querySelectorAll(\".open-popup\");\n\n    /* Вещаем на каждую кнопку открытия popup-окон событие клик */\n    popupButtons.forEach(function (button) {\n        button.addEventListener(\"click\", function () {\n            /* Получаем атрибут \"data-popup\" у кнопки, на которую кликнули */\n            const popupId = this.getAttribute(\"data-popup\");\n            /* Получаем обертку popup-окна, data-popup которого соответствует кнопке, на которую кликнули */\n            const popupWrapper = document.querySelector(\n                `.popup-wrapper[data-popup=\"${popupId}\"]`\n            );\n            /* На всвякий случай проверяем, есть ли соответствующее кнопке popup окно и добавляем активный класс для показа */\n            if (popupWrapper) {\n                popupWrapper.classList.add(\"popup-wrapper-show\");\n            }\n        });\n    });\n\n    /* Получаем все кнопки закрытия popup окон */\n    const popupCloseButtons = document.querySelectorAll(\".popup__close\");\n\n    /* Вещаем на каждую кнопку закрытия popup-окон событие клик */\n    popupCloseButtons.forEach(function (button) {\n        button.addEventListener(\"click\", function () {\n            /* Получаем все обертки popup-окон и удаляем у низ активный класс */\n            const popupWrappers = document.querySelectorAll(\".popup-wrapper\");\n            popupWrappers.forEach(function (popupWrapper) {\n                popupWrapper.classList.remove(\"popup-wrapper-show\");\n            });\n        });\n    });\n\n    /* \n        Закрытие popup-окна кликом вне его\n        Вешаем событие клик на страницу\n        Ищем все popup-окна, обертки которых имеют активный класс\n    */\n    document.addEventListener(\"click\", function (e) {\n        const popupWrappersVisible = document.querySelectorAll(\n            \".popup-wrapper.popup-wrapper-show\"\n        );\n\n        /* Проверяем на что мы кликнули, если это popup-окно или его дочерние элементы или кнопка открытия popup-окна, то помещаем в переменные */\n        popupWrappersVisible.forEach(function (popupWrapper) {\n            const isPopupOrChild =\n                e.target.classList.contains(\"popup\") || e.target.closest(\".popup\");\n            const isPopupButton = e.target.classList.contains(\"open-popup\");\n            /* Мы должны сделать отрицание наших переменных - если это не окно, его дочерние элементы или кнопка открытия окна, то удаляем активный класс */\n            if (!isPopupOrChild && !isPopupButton) {\n                popupWrapper.classList.remove(\"popup-wrapper-show\");\n            }\n        });\n    });\n\n});\n\n//# sourceURL=webpack://gulp-2025/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;