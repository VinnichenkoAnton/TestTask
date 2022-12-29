"use strict";
import preloader from "./modules/preloader";
import hamburger from "./modules/hamburger";
import slider from "./modules/slider";
window.addEventListener("load", () => {
  preloader();
});
window.addEventListener("DOMContentLoaded", () => {
  hamburger({
    triggerringElement: ".mainscreen__hamburger",
    content: ".menu",
    closingElements: ".menu__ref, .menu__overlay, .menu__link, .menu__close",
  });
  slider({
    container: ".slides__slider",
    slide: ".slides__slide",
    nextArrow: ".slides__slider-next",
    prevArrow: ".slides__slider-prev",
    wrapper: ".slides__slider-wrapper",
    field: ".slides__slider-inner",
  });
});
