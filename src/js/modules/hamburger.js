function hamburger({ triggerringElement, content, closingElements }) {
  const trigger = document.querySelector(triggerringElement);
  const menu = document.querySelector(content);
  const closeElements = document.querySelectorAll(closingElements);

  trigger.addEventListener("click", () => {
    menu.classList.toggle("menu_active");
  });

  closeElements.forEach((e) => {
    e.addEventListener("click", function () {
      menu.classList.remove("menu_active");
    });
  });
}

export default hamburger;
