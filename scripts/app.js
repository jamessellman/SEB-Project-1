//variables for grid
const grid = document.querySelector(".grid");
const width = 10;
const cellCount = width * width;
const cells = [];

let playerCurrentPosition = 34;
//variables for objects do not move
const lavaPositions = [40, 41, 42, 45, 46, 48, 49];
const beachPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const coralPositions = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
//variables for movable objects
let sharkRowOne = [86, 83, 80];
let sharkRowTwo = [62, 65, 68];
let sharkRowThree = [26, 23, 20];

//function to create the grid(playing area)
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement("div");
    cell.innerText = i;
    grid.appendChild(cell);
    cells.push(cell);
  }
  addPlayer(playerCurrentPosition);
  addLava(lavaPositions);
  addBeach(beachPositions);
  addCoral(coralPositions);
  addShark(sharkRowOne);
  addShark(sharkRowTwo);
  addShark(sharkRowThree);
}

createGrid();

//functions to add player & obsticals to the board
function addPlayer(playerCurrentPosition) {
  cells[playerCurrentPosition].classList.add("player");
}
//function to remove player. this will give illusion of moving per cell
function removePlayer(playerCurrentPosition) {
  cells[playerCurrentPosition].classList.remove("player");
}
//functions to add immovable objects
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
//function to add movable objects
function addShark(sharkRow) {
  for (let i = 0; i < sharkRow.length; i++) {
    cells[sharkRow[i]].classList.add("shark");
  }
}

function removeShark(sharkRow) {
  for (let i = 0; i < sharkRow.length; i++) {
    cells[sharkRow[i]].classList.remove("shark");
  }
}
// removeShark(sharkRowOne);
//function to handle player or hazard entering the same cell
function impact() {
  removePlayer(playerCurrentPosition);
  playerCurrentPosition = 34;
  addPlayer(playerCurrentPosition);
}

// create a function that allows sharks to move across page
// will need to make a set interval that moves the shark every x seconds
// to move across the page, will need to increment -- or ++ to move to adjacent box
function moveSharkRowOne(interval) {
  sharkTimer = setInterval(() => {
    removeShark(sharkRowOne);
    if (sharkRowOne.includes(88)) {
      sharkRowOne = [86, 83, 80];
    } else {
      console.log(sharkRowOne);
      sharkRowOne = sharkRowOne.map((element) => {
        return (element += 1);
      });
    }

    addShark(sharkRowOne);
  }, interval);
}
moveSharkRowOne(2000);

function moveSharkRowTwo(interval) {
  sharkTimer = setInterval(() => {
    removeShark(sharkRowTwo);
    if (sharkRowTwo.includes(66)) {
      sharkRowTwo = [62, 65, 68];
    } else {
      console.log(sharkRowTwo);
      sharkRowTwo = sharkRowTwo.map((element) => {
        return (element -= 1);
      });
    }

    addShark(sharkRowTwo);
  }, interval);
}
moveSharkRowTwo(1500);

function moveSharkRowThree(interval) {
  sharkTimer = setInterval(() => {
    removeShark(sharkRowThree);
    if (sharkRowThree.includes(28)) {
      sharkRowThree = [26, 23, 20];
    } else {
      console.log(sharkRowThree);
      sharkRowThree = sharkRowThree.map((element) => {
        return (element += 1);
      });
    }

    addShark(sharkRowThree);
  }, interval);
}
moveSharkRowThree(1000);

//function to map player movment with keystrokes and create boundary around grid
function handleKeyDown(event) {
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
  console.log(`player at position:${playerCurrentPosition}`);

  if (cells[playerCurrentPosition].classList.contains("lava")) {
    console.log("hit lava");
    impact();
  }
  if (cells[playerCurrentPosition].classList.contains("shark")) {
    console.log("hit shark");
    impact();
  }
}

document.addEventListener("keydown", handleKeyDown);
