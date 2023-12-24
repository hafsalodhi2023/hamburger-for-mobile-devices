const icon = document.querySelector(".hamburger-lines");
const menuIcon = document.querySelector(".hamburger-lines");

menuIcon.addEventListener("click", (event) => {
  icon.classList.toggle("open");
});
