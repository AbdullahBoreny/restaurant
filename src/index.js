import "./styles/index.css"
import homePage from "./home";
import menuPage from "./menu";
import aboutPage from "./about";
const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const menuBtn = document.querySelector(".menu");
const content = document.querySelector("#content");
homeBtn.addEventListener("click",()=> {
content.textContent = " ";
homePage();
});
aboutBtn.addEventListener("click",()=> {
content.textContent = " ";
aboutPage();
});
menuBtn.addEventListener("click",()=> {
content.textContent = " ";
menuPage();
});
console.log("hello");
