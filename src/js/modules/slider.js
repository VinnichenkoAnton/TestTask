function slider({ container, slide, nextArrow, prevArrow, wrapper, field }) {
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

  slides.forEach((slide) => {
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

    indicators.forEach((dot) => (dot.style.opacity = 0.5));
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

    indicators.forEach((dot) => (dot.style.opacity = 0.5));
    indicators[slideIndex - 1].style.opacity = 1;
  });

  indicators.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      indicators.forEach((dot) => (dot.style.opacity = 0.5));
      indicators[slideIndex - 1].style.opacity = 1;
    });
  });
}
export default slider;
