const menubutton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const navList = document.querySelectorAll("#nav-menu li");
const mainTitle = document.querySelector("#Main-Title");

menubutton.addEventListener("click", () => {
  navMenu.classList.remove("hidden", "animate-slide-out");
  navMenu.classList.add("flex", "animate-slide-in");
  navMenu;
});

navList.forEach((liElement) => {
  liElement.addEventListener("click", () => {
    if (window.innerWidth >= 640) return;
    navMenu.classList.add("animate-slide-out");
    navMenu.classList.remove("animate-slide-in");
  });
  
});

navMenu.addEventListener("animationend", (event) => {
  if (event.animationName !== "slide-out") return;
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 640) {
    navMenu.classList.remove("animate-slide-out", "animate-slide-out");
  }
});

mainTitle.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
