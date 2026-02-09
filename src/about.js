const aboutPage = function () {
  const h1 = document.createElement("h1");
  const paragraph = document.createElement("p");
  const h2 = document.createElement("h2");
  const paragraph2 = document.createElement("p");

  const container = document.querySelector("#content");
  h1.textContent = "About us";
  paragraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eius iure repellendus, earum necessitatibus odio, pariatur autem optio animi blanditiis quisquam accusantium temporibus ipsum tenetur inventore sunt esse. Nemo, accusamus";
  h2.textContent = "Around The Managers";
  paragraph2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eius iure repellendus, earum necessitatibus odio, pariatur autem optio animi blanditiis quisquam accusantium temporibus ipsum tenetur inventore sunt esse. Nemo, accusamus";

  container.append(h1, paragraph, h2, paragraph2);
};
module.exports = aboutPage;
