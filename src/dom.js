const createComponent = (element, text = "", className = "") => {
  const el = document.createElement(element);

  if (className) el.classList.add(className);
  if (text) el.textContent = text;

  return el;
};

const cleanDom = () => {
  const content = document.querySelector("#content");
  content.textContent = "";
};
export {cleanDom,createComponent}