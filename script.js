const gridContainer = document.querySelector(".grid-container");
let gridSize = 16;

for (let i = 1; i <= gridSize; i++) {
  const rowContainer = document.createElement("div");
  rowContainer.setAttribute("class", "row-container");
  gridContainer.appendChild(rowContainer);

  for (let j = 1; j <= gridSize; j++) {
    const block = document.createElement("div");
    block.setAttribute("class", "block");
    rowContainer.appendChild(block);
  }
}
