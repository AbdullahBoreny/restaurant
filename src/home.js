import "./styles/index.css";

import heroImage from "./templates/res.jpg";
import menuPage from "./menu";

import { createComponent, cleanDom } from "./dom";

const homePage = function () {
  cleanDom();
  const content = document.querySelector("#content");

  const h1 = createComponent("h1", "Our Wonderful Restaurant");
  const paragraph = createComponent(
    "p",
    "where fresh flavors, warm service, and a cozy atmosphere make every meal a delight",
  );
  const img = document.createElement("img");
  img.src = heroImage;
  const btn = createComponent("button", "Our Menu", "button-menu");
  const homeDiv = createComponent("div", " ", "hero-text");
  const imageDiv = createComponent("div", " ", "image-overlay");

  imageDiv.append(img);

  homeDiv.append(h1, paragraph, btn);

  content.append(imageDiv, homeDiv);
  btn.addEventListener("click", () => {
    menuPage();
  });
};
export default homePage;
