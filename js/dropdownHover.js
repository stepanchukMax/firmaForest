const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdown.addEventListener("mouseleave", () => {
  dropdownMenu.style.display = "none";
});

dropdownToggle.addEventListener("mouseenter", () => {
  dropdownMenu.style.display = "block";
});

dropdownToggle.addEventListener("mouseleave", () => {
  dropdownMenu.style.display = "none";
});

dropdownMenu.addEventListener("mouseenter", () => {
  dropdownMenu.style.display = "block";
});

dropdownMenu.addEventListener("mouseleave", () => {
  dropdownMenu.style.display = "none";
});