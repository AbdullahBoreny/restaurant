import heroImage from "./templates/res.jpg";
import "./styles/general.css";
import "./styles/index.css";
import menuPage from "./menu";
import aboutPage from "./about";
const menuContainer = document.querySelector(".menu-container");
const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const menuBtn = document.querySelector(".menu");
const content = document.querySelector("#content");
const createComponent = function (element, text, className) {
  const el = document.createElement(element);
  el.classList.add(className);
  el.textContent = text;
  return el;
};
const homePage = function () {
  const h1 = document.createElement("h1");
  h1.textContent = "Our Wonderful Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    " where fresh flavors, warm service, and a cozy atmosphere make every meal a delight.";
  const img = document.createElement("img");
  img.src = heroImage;
  const btn = createComponent("button", "Our Menu", "button-menu");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("hero-text");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image-overlay");

  imageDiv.append(img);

  homeDiv.append(h1, paragraph, btn);

  content.append(imageDiv, homeDiv);
  btn.addEventListener("click", () => {
    menuContainer.textContent = "";

    content.textContent = "";
    menuPage();
  });
};

homeBtn.addEventListener("click", () => {
  content.textContent = "";
  menuContainer.textContent = "";

  homePage();
});
aboutBtn.addEventListener("click", () => {
  content.textContent = "";
  menuContainer.textContent = "";

  aboutPage();
});
menuBtn.addEventListener("click", () => {
  menuPage();
});
homePage();
