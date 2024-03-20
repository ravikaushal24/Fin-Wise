const sideMenu = document.querySelector("aside");
const modal = document.querySelector("#modal");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

// const chart = document.querySelector("#chart").getContext("2d");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
