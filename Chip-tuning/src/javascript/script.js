const nav = document.getElementById("navigation");
const burger = document.querySelector(".burger");
const toggleMenu = () => {
  if (nav.classList.contains("is-active")) {
    nav.classList.remove("is-open");
    setTimeout(() => nav.classList.remove("is-active"), 200);
  } else {
    nav.classList.add("is-active");
    setTimeout(() => nav.classList.add("is-open"), 0);
  }
};
burger.addEventListener("click", toggleMenu);
