import Data from "./data/data.xml";
import Notes from "./data/data.csv";
import "./styles/index.css";
const table = document.querySelector("table");
for (let i = 0; i < table.rows.length; i++) {
  // Loop through rows
  let row = table.rows[i];
  for (let j = 0; j < row.cells.length; j++) {
    row.cells[j].textContent = Notes[i][j];
  }
}
