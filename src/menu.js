import { createComponent, cleanDom } from "./dom";

const menuPage = function () {
  cleanDom();

  const content = document.querySelector("#content");

  const menuSection = createComponent("div", "", "menu-section");

  const h1 = createComponent("h1", "Menu");
  const intro = createComponent(
    "p",
    "Fresh ingredients, bold flavors, and dishes made with care. Explore our favorites below."
  );

  // Starters
  const startersTitle = createComponent("h2", "Starters");
  const startersList = document.createElement("ul");

  startersList.append(
    createComponent("li", "Garlic Bread — $4.99"),
    createComponent("li", "Bruschetta — $6.49"),
    createComponent("li", "Soup of the Day — $5.99")
  );

  // Main Dishes
  const mainTitle = createComponent("h2", "Main Dishes");
  const mainList = document.createElement("ul");

  mainList.append(
    createComponent("li", "Grilled Chicken Plate — $12.99"),
    createComponent("li", "Classic Beef Burger — $10.99"),
    createComponent("li", "Vegetarian Pasta — $11.49")
  );

  // Drinks
  const drinksTitle = createComponent("h2", "Drinks");
  const drinksList = document.createElement("ul");

  drinksList.append(
    createComponent("li", "Fresh Lemonade — $3.49"),
    createComponent("li", "Iced Coffee — $4.29"),
    createComponent("li", "Mineral Water — $1.99")
  );

  menuSection.append(
    h1,
    intro,
    startersTitle,
    startersList,
    mainTitle,
    mainList,
    drinksTitle,
    drinksList
  );

  content.append(menuSection);
};

export default menuPage;
