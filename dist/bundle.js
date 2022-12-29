/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/preloader */ "./src/js/modules/preloader.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");





window.addEventListener("load", () => {
  Object(_modules_preloader__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
window.addEventListener("DOMContentLoaded", () => {
  Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_1__["default"])({
    triggerringElement: ".mainscreen__hamburger",
    content: ".menu",
    closingElements: ".menu__ref, .menu__overlay, .menu__link, .menu__close"
  });
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])({
    container: ".slides__slider",
    slide: ".slides__slide",
    nextArrow: ".slides__slider-next",
    prevArrow: ".slides__slider-prev",
    wrapper: ".slides__slider-wrapper",
    field: ".slides__slider-inner"
  });
});

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function hamburger(_ref) {
  let {
    triggerringElement,
    content,
    closingElements
  } = _ref;
  const trigger = document.querySelector(triggerringElement);
  const menu = document.querySelector(content);
  const closeElements = document.querySelectorAll(closingElements);
  trigger.addEventListener("click", () => {
    menu.classList.toggle("menu_active");
  });
  closeElements.forEach(e => {
    e.addEventListener("click", function () {
      menu.classList.remove("menu_active");
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/preloader.js":
/*!*************************************!*\
  !*** ./src/js/modules/preloader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function preloader() {
  document.body.classList.add("loading");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loading");
  }, 500);
}
/* harmony default export */ __webpack_exports__["default"] = (preloader);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(_ref) {
  let {
    container,
    slide,
    nextArrow,
    prevArrow,
    wrapper,
    field
  } = _ref;
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1,
    offset = 0;
  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";
  slidesWrapper.style.overflow = "hidden";
  slides.forEach(slide => {
    slide.style.width = width;
  });
  slider.style.position = "relative";
  const dots = document.createElement("ol"),
    indicators = [];
  dots.classList.add("carousels-dots");
  dots.style.cssText = `
      position: absolute;
      right: -62px;
      bottom: -62px;
      z-index: 1;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
  `;
  let x = window.matchMedia("(max-width: 767px)");
  function media(x) {
    if (x.matches) {
      dots.style.cssText = `display: none`;
    } else {
      return;
    }
  }
  media(x);
  x.addListener(media);
  slider.append(dots);
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
        width: 62px;
        height: 62px;
        background-color: white;
        background-size: 40px 40px;
        background-position: 50%;
        background-repeat: no-repeat;
        box-sizing: content-box;
        flex: 0 1 auto;
        border-radius: 50%;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        opacity: 1;
        transition: opacity .6s ease;
  `;
    if (i == 0) {
      dot.style.opacity = 1;
    }
    dots.append(dot);
    indicators.push(dot);
  }
  dots.children[0].style.backgroundImage = `url("./icons/slides/brain.svg")`;
  dots.children[1].style.backgroundImage = `url("./icons/slides/diagnosis.svg")`;
  dots.children[2].style.backgroundImage = `url("./icons/slides/prescription.svg")`;
  dots.children[3].style.backgroundImage = `url("./icons/slides/ecosystem.svg")`;
  next.addEventListener("click", () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    indicators.forEach(dot => dot.style.opacity = 0.5);
    indicators[slideIndex - 1].style.opacity = 1;
  });
  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    indicators.forEach(dot => dot.style.opacity = 0.5);
    indicators[slideIndex - 1].style.opacity = 1;
  });
  indicators.forEach(dot => {
    dot.addEventListener("click", e => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      indicators.forEach(dot => dot.style.opacity = 0.5);
      indicators[slideIndex - 1].style.opacity = 1;
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map