import heroImage from "./templates/res.jpg";
import "./styles/menu.css";
import { createComponent,cleanDom } from "./index";

const menuPage = function () {
  const menuContainer = document.querySelector(".menu-container");
  cleanDom();
  const img = document.createElement("img");
  img.src = heroImage;
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-section");

  // Title
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  const intro = document.createElement("p");
  intro.textContent =
    "Fresh ingredients, bold flavors, and dishes made with care. Explore our favorites below.";

  // Starters
  const startersTitle = document.createElement("h2");
  startersTitle.textContent = "Starters";

  const startersList = document.createElement("ul");

  const starter1 = document.createElement("li");
  starter1.textContent = "Garlic Bread — $4.99";

  const starter2 = document.createElement("li");
  starter2.textContent = "Bruschetta — $6.49";

  const starter3 = document.createElement("li");
  starter3.textContent = "Soup of the Day — $5.99";

  startersList.append(starter1, starter2, starter3);

  // Main Dishes
  const mainTitle = document.createElement("h2");
  mainTitle.textContent = "Main Dishes";

  const mainList = document.createElement("ul");

  const main1 = document.createElement("li");
  main1.textContent = "Grilled Chicken Plate — $12.99";

  const main2 = document.createElement("li");
  main2.textContent = "Classic Beef Burger — $10.99";

  const main3 = document.createElement("li");
  main3.textContent = "Vegetarian Pasta — $11.49";

  mainList.append(main1, main2, main3);

  // Drinks
  const drinksTitle = document.createElement("h2");
  drinksTitle.textContent = "Drinks";

  const drinksList = document.createElement("ul");

  const drink1 = document.createElement("li");
  drink1.textContent = "Fresh Lemonade — $3.49";

  const drink2 = document.createElement("li");
  drink2.textContent = "Iced Coffee — $4.29";

  const drink3 = document.createElement("li");
  drink3.textContent = "Mineral Water — $1.99";

  drinksList.append(drink1, drink2, drink3);

  // Append everything
  menuDiv.append(
    h1,
    intro,
    startersTitle,
    startersList,
    mainTitle,
    mainList,
    drinksTitle,
    drinksList,
  );
  menuContainer.append(menuDiv);
};

export default menuPage;
