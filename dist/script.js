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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/preloader */ "./src/js/modules/preloader.js");
/* harmony import */ var _modules_preloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_preloader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");




_modules_preloader__WEBPACK_IMPORTED_MODULE_0___default()();
window.addEventListener("DOMContentLoaded", () => {
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/modules/preloader.js":
/*!*************************************!*\
  !*** ./src/js/modules/preloader.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function preloader() {
  window.onload = function () {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 500);
  };
}

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

  // const dots = document.createElement("ol"),
  //   indicators = [];
  // dots.classList.add("carousels-dots");
  // dots.style.cssText = `
  //           position: absolute;
  //           right: 0;
  //           bottom: 0;
  //           left: 0;
  //           z-index: 15;
  //           display: flex;
  //           justify-content: center;
  //           margin-right: 15%;
  //           margin-left: 15%;
  //           list-style: none;
  //       `;
  // slider.append(dots);

  // for (let i = 0; i < slides.length; i++) {
  //   const dot = document.createElement("li");
  //   dot.setAttribute("data-slide-to", i + 1);
  //   dot.style.cssText = `
  //           box-sizing: content-box;
  //           flex: 0 1 auto;
  //           width: 30px;
  //           height: 6px;
  //           margin-right: 3px;
  //           margin-left: 3px;
  //           cursor: pointer;
  //           background-color: #fff;
  //           background-clip: padding-box;
  //           border-top: 10px solid transparent;
  //           border-bottom: 10px solid transparent;
  //           opacity: .5;
  //           transition: opacity .6s ease;
  //       `;
  //   if (i == 0) {
  //     dot.style.opacity = 1;
  //   }
  //   dots.append(dot);
  //   indicators.push(dot);
  // }

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

    // indicators.forEach((dot) => (dot.style.opacity = 0.5));
    // indicators[slideIndex - 1].style.opacity = 1;
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

    // indicators.forEach((dot) => (dot.style.opacity = 0.5));
    // indicators[slideIndex - 1].style.opacity = 1;
  });

  // indicators.forEach((dot) => {
  //   dot.addEventListener("click", (e) => {
  //     const slideTo = e.target.getAttribute("data-slide-to");

  //     slideIndex = slideTo;
  //     offset = +width.slice(0, width.length - 2) * (slideTo - 1);

  //     slidesField.style.transform = `translateX(-${offset}px)`;

  //     indicators.forEach((dot) => (dot.style.opacity = 0.5));
  //     indicators[slideIndex - 1].style.opacity = 1;
  //   });
  // });

  function swipedetect(el, callback) {
    let touchsurface = el,
      swipedir,
      startX,
      startY,
      distX,
      distY,
      threshold = 50,
      restraint = 30,
      allowedTime = 300,
      elapsedTime,
      startTime,
      handleswipe = callback || function (swipedir) {};
    touchsurface.addEventListener("touchstart", function (e) {
      let touchobj = e.changedTouches[0];
      swipedir = "none";
      distX = 0;
      distY = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime();
    }, false);
    touchsurface.addEventListener("touchend", function (e) {
      let touchobj = e.changedTouches[0];
      distX = touchobj.pageX - startX;
      elapsedTime = new Date().getTime() - startTime;
      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          swipedir = distX < 0 ? "left" : "right";
        }
      }
      handleswipe(swipedir);
    });
  }
  let el = document.querySelector(".offer__slider-wrapper");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
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

      // indicators.forEach((dot) => (dot.style.opacity = 0.5));
      // indicators[slideIndex - 1].style.opacity = 1;
    }

    if (swipedir == "right") {
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

      // indicators.forEach((dot) => (dot.style.opacity = 0.5));
      // indicators[slideIndex - 1].style.opacity = 1;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map