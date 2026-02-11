import "./styles/general.css";
import menuPage from "./menu";
import homePage from "./home";
import aboutPage from "./about";
const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const menuBtn = document.querySelector(".menu");

homeBtn.addEventListener("click", () => {
  homePage();
});
aboutBtn.addEventListener("click", () => {
  aboutPage();
});
menuBtn.addEventListener("click", () => {
  menuPage();
});
homePage();
