const grid = document.querySelector(".grid");
const width = 10;
const cellCount = width * width;
const cells = [];
const playerCurrentPosition = 95;

//function to create the grid(playing area)
function createGrid() {
  //need a forloop to iterate a certain number of times to push the desired number of cells into grid
  for (let i = 0; i < cellCount; i++) {
    //create a div and store it in the variable named cell. this will make up a single cell on the board
    const cell = document.createElement("div");
    //index to see which cells we are working with. will remove later
    cell.innerText = i;
    //grab element we want to push cells into
    grid.appendChild(cell);
    cells.push(cell);
  }
  addPlayer(playerCurrentPosition);
}

createGrid();

//function to add player character
function addPlayer(position) {
  cells[position].classList.add("player");
}
