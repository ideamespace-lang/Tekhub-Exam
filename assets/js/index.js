const toggled = document.querySelector(".hamburger");
const links = document.querySelector(".navLi");
const navBar = document.querySelector(".navBar");

console.log(toggled, links, navBar);

toggled.addEventListener("click", () => {
  links.classList.toggle("active");
});
