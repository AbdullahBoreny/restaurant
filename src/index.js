import "./styles/general.css";
import menuPage from "./menu";
import homePage from "./home";
import aboutPage from "./about";
const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const menuBtn = document.querySelector(".menu");
const createComponent = (element, text, className) => {
  const el = document.createElement(element);
  el.classList.add(className);
  el.textContent = text;
  return el;
};
const cleanDom = () => {
  const content = document.querySelector("#content");
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.textContent = "";
  content.textContent = "";
};
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
export { createComponent, cleanDom };
