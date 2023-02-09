const gridContainer = document.querySelector(".grid-container");
const changeSizeButton = document.querySelector("#change-grid-size");
const clearGridButton = document.querySelector("#clear-grid");
let gridSize = 16;

clearGridButton.addEventListener("click", clearGrid);
changeSizeButton.addEventListener("click", changeSizeHandler);

function changeSizeHandler(e) {
  const size = prompt("How many numbers of squares per side?");
  clearGrid(e);
  setupGrid(size);
}

function setupGrid(size) {
  for (let i = 1; i <= size; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("class", "row-container");
    gridContainer.appendChild(rowContainer);

    for (let j = 1; j <= size; j++) {
      const block = document.createElement("div");
      block.setAttribute("class", "block");
      rowContainer.appendChild(block);
    }
  }
}

function clearGrid(e) {
  console.log(e.target);
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("block")) {
    e.target.classList.toggle("highlight");
  }
});

setupGrid(gridSize);
