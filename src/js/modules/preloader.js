function preloader() {
  document.body.classList.add("loading");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loading");
  }, 500);
}

export default preloader;
