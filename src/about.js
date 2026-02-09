import "./styles/about.css";
import Data from "./data/data.xml"
import Notes from './data/data.csv'

const element = document.createElement('div');
const container = document.querySelector('.container');
element.textContent = Data.note.body;
console.log(Data.note.body);
console.log(Notes);
container.appendChild(element);
