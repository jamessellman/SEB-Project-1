const grid = document.querySelector(".grid");
const width = 10;
const cellCount = width * width;
const cells = [];
//will set starting position at bottom middle
let playerCurrentPosition = 44;
const lavaPositions = [40, 41, 42, 45, 46, 48, 49];
const beachPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const coralPositions = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
let sharkRowOne = [89, 86, 83, 80];
let sharkRowTwo = [60, 63, 66, 69];
let sharkRowThree = [29, 26, 23, 20];

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
  addLava(lavaPositions);
  addBeach(beachPositions);
  addCoral(coralPositions);
  addShark(sharkRowOne, sharkRowTwo, sharkRowThree);
}

createGrid();

//function to add player character
function addPlayer(position) {
  cells[position].classList.add("player");
}
//function to remove player. this will give illusion of moving per cell
function removePlayer(position) {
  cells[position].classList.remove("player");
}
function addLava(lavaPositions) {
  for (let i = 0; i < lavaPositions.length; i++) {
    cells[lavaPositions[i]].classList.add("lava");
  }
}
function addBeach(beachPositions) {
  for (let i = 0; i < beachPositions.length; i++) {
    cells[beachPositions[i]].classList.add("beach");
  }
}
function addCoral(coralPositions) {
  for (let i = 0; i < coralPositions.length; i++) {
    cells[coralPositions[i]].classList.add("coral");
  }
}
function addShark(sharkRowOne, sharkRowTwo, sharkRowThree) {
  for (let i = 0; i < sharkRowOne.length; i++) {
    cells[sharkRowOne[i]].classList.add("shark");
    cells[sharkRowTwo[i]].classList.add("shark");
    cells[sharkRowThree[i]].classList.add("shark");
  }
}
//function to map player movment with keystrokes and create boundary around grid
function handleKeyDown(event) {
  console.log("pressed a key", event.keyCode);
  removePlayer(playerCurrentPosition);
  if (event.keyCode === 37 && playerCurrentPosition % width !== 0) {
    playerCurrentPosition--;
  } else if (event.keyCode === 38 && playerCurrentPosition >= width) {
    playerCurrentPosition -= width;
  } else if (
    event.keyCode === 39 &&
    playerCurrentPosition % width !== width - 1
  ) {
    playerCurrentPosition++;
  } else if (
    event.keyCode === 40 &&
    playerCurrentPosition < cellCount - width
  ) {
    playerCurrentPosition += width;
  }
  addPlayer(playerCurrentPosition);
  console.log(`player at position${playerCurrentPosition}`);
}

document.addEventListener("keydown", handleKeyDown);
